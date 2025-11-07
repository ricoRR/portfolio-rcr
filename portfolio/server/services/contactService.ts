import { createError } from 'h3';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import db from '../utils/db';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type MailConfig = {
  mailHost?: string;
  mailPort?: string | number;
  mailUser?: string;
  mailPass?: string;
  mailRecipient?: string;
  resendApiKey?: string;
  resendFrom?: string;
  resendTo?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactPayload): ContactPayload {
  const trimmedName = payload.name?.trim();
  const trimmedEmail = payload.email?.trim();
  const trimmedMessage = payload.message?.trim();

  if (!trimmedName || trimmedName.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'INVALID_NAME',
      message: 'Le nom doit contenir au moins 2 caractères.',
    });
  }

  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'INVALID_EMAIL',
      message: 'Merci de renseigner un email valide.',
    });
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'MESSAGE_TOO_SHORT',
      message: 'Le message doit contenir au moins 10 caractères pour être exploitable.',
    });
  }

  return {
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
  };
}

export function saveContactMessage(payload: ContactPayload) {
  const statement = db.prepare(
    `
      INSERT INTO contact_messages (name, email, message)
      VALUES (@name, @email, @message)
    `
  );

  const result = statement.run(payload);
  return Number(result.lastInsertRowid);
}

export function getRecentContactMessages(limit = 10) {
  return db
    .prepare(
      `
        SELECT id, name, email, message, created_at
        FROM contact_messages
        ORDER BY created_at DESC
        LIMIT ?
      `
    )
    .all(limit);
}

const resendClients = new Map<string, Resend>();

function getResendClient(apiKey: string) {
  if (!resendClients.has(apiKey)) {
    resendClients.set(apiKey, new Resend(apiKey));
  }
  return resendClients.get(apiKey)!;
}

export async function sendContactEmail(
  payload: ContactPayload,
  config: MailConfig,
  transporter: nodemailer.Transporter | null = null
) {
  const {
    mailHost,
    mailPort,
    mailUser,
    mailPass,
    mailRecipient,
    resendApiKey,
    resendFrom,
    resendTo,
  } = config;

  const targetRecipient = resendTo ?? mailRecipient ?? mailUser;
  if (!targetRecipient) {
    throw createError({
      statusCode: 500,
      statusMessage: 'MAIL_RECIPIENT_MISSING',
      message: 'Aucun destinataire configuré pour la réception des messages.',
    });
  }

  if (resendApiKey) {
    const resend = getResendClient(resendApiKey);
    await resend.emails.send({
      from: resendFrom ?? 'Portfolio <onboarding@resend.dev>',
      to: [targetRecipient],
      subject: `Nouveau message du portfolio - ${payload.name}`,
      text: `Nom: ${payload.name}\nEmail: ${payload.email}\nMessage:\n${payload.message}`,
    });
    return;
  }

  if (!mailHost || !mailPort || !mailUser || !mailPass) {
    throw createError({
      statusCode: 500,
      statusMessage: 'MAIL_CONFIG_MISSING',
      message: 'Configuration du service mail manquante.',
    });
  }

  const resolvedTransporter =
    transporter ??
    nodemailer.createTransport({
      host: mailHost,
      port: Number(mailPort),
      secure: Number(mailPort) === 465,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

  await resolvedTransporter.sendMail({
    from: mailUser,
    to: targetRecipient,
    subject: `Nouveau message du portfolio - ${payload.name}`,
    text: `Nom: ${payload.name}\nEmail: ${payload.email}\nMessage:\n${payload.message}`,
  });
}
