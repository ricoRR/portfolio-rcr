<template>
  <div class="bg-[#0b0b0b] min-h-screen text-gray-200 px-6 py-16">
    <div class="mx-auto max-w-4xl space-y-10">
      <header class="space-y-3">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">
          Documentation projet
        </p>
        <h1 class="text-3xl font-semibold text-[#ffdd00]">
          Présentation & maquette de la solution web
        </h1>
        <p class="text-sm text-gray-300">
          Synthèse des choix techniques, de l’architecture cible et du parcours
          utilisateur retenu pour le portfolio professionnel de Ricardo Chaves
          Rodrigues.
        </p>
      </header>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">1. Objectifs</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Présenter un profil de développeur fullstack en alternance.</li>
          <li>Centraliser les réalisations (projets, compétences, expériences).</li>
          <li>Proposer un canal de contact fiable avec suivi par email.</li>
          <li>Fournir un espace sécurisé pour partager la documentation détaillée.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">2. Public cible</h2>
        <p class="text-sm text-gray-300">
          Responsables techniques et recruteurs en recherche d’alternants capables
          d’intervenir sur le front-end et le back-end d’une application web, avec
          une sensibilité à la qualité logicielle et au déploiement.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">3. Architecture fonctionnelle</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Accueil structuré autour d’un hero, d’un aperçu du parcours et d’un call-to-action.</li>
          <li>Sections dédiées : À propos, Points forts, Projets, Galerie, Authentification, Contact.</li>
          <li>API Node/Nuxt pour la gestion du formulaire de contact et de l’authentification.</li>
          <li>Envoi de courriels via Nodemailer configuré avec un SMTP tiers.</li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">4. Maquette & navigation</h2>
        <p class="text-sm text-gray-300">
          La maquette haute fidélité illustre un parcours vertical avec des ancres
          de navigation. Les blocs respectent une grille 12 colonnes, une palette à
          fort contraste (#0a0a0a / #ffdd00) et une typographie linéale.
        </p>
        <NuxtLink
          to="/wireframe.svg"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-full border border-[#ffdd00] px-4 py-2 text-sm font-semibold text-[#ffdd00] transition hover:bg-[#ffdd00]/10"
        >
          Consulter la maquette (SVG)
        </NuxtLink>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">5. Schéma technique</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Nuxt 3 (Vue 3) pour le rendu côté client et l’hébergement des API Nitro.</li>
          <li>Tailwind CSS 4 (plugin Vite) pour le design system.</li>
          <li>Nodemailer pour l’intégration SMTP.</li>
          <li>Runtime Config gère les secrets (SMTP & authentification).</li>
          <li>Déploiement cible : hébergement Node (Render, Railway, ou VPS).</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">6. Collaboration & outillage</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Gestion de versions via Git et GitHub (branches feature, pull requests).</li>
          <li>Suivi de tâches avec Trello (colonne Backlog → Doing → Review → Done).</li>
          <li>Communication asynchrone : Discord et email.</li>
          <li>Documentation produite dans le dossier <code>docs/</code> du dépôt.</li>
        </ul>
      </section>
    </div>
  </div>
</template>
