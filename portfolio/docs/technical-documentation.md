# Documentation technique

## Installation
```bash
npm install
cp .env.example .env # puis renseigner les valeurs SMTP si l'API contact est utilisée
npm run dev
```

## Scripts
- `npm run dev` : serveur de développement (http://localhost:3000).
- `npm run build` : build production (`.output/`).
- `npm run preview` : prévisualisation du build.
- `npm test` : suites unitaires (Vitest) + rapport de couverture.

## Variables d'environnement
| Variable | Description |
|----------|-------------|
| `MAIL_HOST` | Hôte SMTP |
| `MAIL_PORT` | Port SMTP |
| `MAIL_USER` | Identifiant SMTP |
| `MAIL_PASS` | Mot de passe SMTP |
| `MAIL_RECIPIENT` | Destinataire des messages (par défaut `MAIL_USER`) |
| `RESEND_API_KEY` | Clé API Resend pour déclencher l'envoi via HTTPS |
| `RESEND_FROM` | Adresse d'expéditeur Resend (ex : `Portfolio <contact@exemple.com>`) |
| `RESEND_TO` | Destinataire lorsque Resend est utilisé (défaut : `MAIL_RECIPIENT`) |
| `NUXT_DATA_DIR` | (Optionnel) Répertoire cible pour `data/app.db` (défaut : `data/`, fallback `/tmp/portfolio-data` sur Vercel) |

## Base de données & services
- **SQLite** : initialisé automatiquement dans `data/app.db` via `better-sqlite3`.
  - Table `contact_messages` : `id`, `name`, `email`, `message`, `created_at`.
  - Accessible via `server/services/contactService.ts`.
- **Services** :
  - `contactService` : validation des inputs, persistance SQLite, envoi SMTP.

## Tests
- Framework : Vitest (`npm test`).
- Périmètre actuel : validation serveur du formulaire de contact (TC01/02).
- Rapport HTML : `coverage/index.html`.

## Points d'extension
- Ajouter un CMS headless : créer un plugin Nuxt et remplacer les données statiques des composants.
- CI/CD : ajouter un workflow `.github/workflows/deploy.yml` déclenchant le build.

## Dépendances clés
- `@nuxt/image` : optimisation & responsive images.
- `@tailwindcss/vite` : génération des utilitaires Tailwind 4.
- `nodemailer` : envoi des emails de contact.
- `better-sqlite3` : persistance locale des messages.
- `vitest` / `@vitest/coverage-v8` : tests unitaires + couverture.
- `vue` / `nuxt` : framework principal.
