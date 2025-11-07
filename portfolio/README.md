# Portfolio – Ricardo Chaves Rodrigues

Portfolio Nuxt 3 présentant mon profil de développeur web fullstack en alternance. Le site regroupe les sections principales (À propos, projets, galerie, contact) et renvoie vers la documentation détaillée du projet.

## Fonctionnalités
- Hero section avec informations clés et CTA.
- Présentation détaillée (expériences, compétences, langues).
- Carousel "Points forts" et galerie modale.
- Liste de projets avec stack et rôle.
- Formulaire de contact compatible GitHub Pages via un endpoint externe configurable (Formspree, EmailJS, etc.).
- Documentation accessible sous `/docs/*`.

## Démarrage
```bash
npm install
cp .env.example .env  # puis renseigner l'endpoint du formulaire et, si besoin, le SMTP
npm run dev
```

### Variables d'environnement
| Clé | Description |
|-----|-------------|
| `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` | URL du service de formulaires (Formspree, etc.). Obligatoire pour GitHub Pages. |
| `NUXT_PUBLIC_CONTACT_FORM_SUCCESS_MESSAGE` | Message de confirmation personnalisé (optionnel). |
| `NUXT_PUBLIC_CONTACT_FORM_ERROR_MESSAGE` | Message d'erreur personnalisé (optionnel). |
| `MAIL_HOST` | (Optionnel) Hôte SMTP pour la route `/api/contact` en déploiement Node. |
| `MAIL_PORT` | (Optionnel) Port SMTP. |
| `MAIL_USER` | (Optionnel) Identifiant SMTP. |
| `MAIL_PASS` | (Optionnel) Mot de passe SMTP. |
| `MAIL_RECIPIENT` | (Optionnel) Destinataire des messages (défaut : `MAIL_USER`). |
| `RESEND_API_KEY` | (Optionnel) Clé API Resend pour l'envoi d'emails via leur service. |
| `RESEND_FROM` | (Optionnel) Adresse d'expédition Resend (ex. `Portfolio <contact@tondomaine.com>`). |
| `RESEND_TO` | (Optionnel) Adresse de réception (défaut : `MAIL_RECIPIENT`). |
| `NUXT_DATA_DIR` | (Optionnel) Dossier d'écriture pour la base SQLite (`/tmp/portfolio-data` conseillé sur Vercel). |
 
## Scripts
- `npm run dev` : serveur de développement (http://localhost:3000).
- `npm run build` : build de production.
- `npm run preview` : prévisualisation de la build.
- `npm test` : tests unitaires + rapport de couverture (`coverage/`).

## Structure
```
components/      # Sections du site (Hero, About, Projects, Gallery, Contact)
pages/           # Routes (homepage + documentation)
server/api/      # API contact via SMTP pour hébergement Node
server/services/ # Logique métier du formulaire de contact
server/utils/    # Initialisation de la base SQLite (uniquement si API contact côté serveur)
composables/     # Hooks partageables (contact, etc.)
public/          # Assets statiques (maquette SVG, images)
docs/            # Documentation projet
data/            # Base SQLite (messages de contact, pour déploiement Node)
Dockerfile       # Industrialisation via conteneur
```

## Documentation
- `/docs/project-presentation` : maquette & choix techniques
- `/docs/test-plan` : stratégie de tests
- `/docs/user-guide` : guide utilisateur
- `/docs/improvements` : pistes d'amélioration et analyse QA
- `docs/deployment-guide.md` : procédures Render & Docker
- `docs/deployment-report.md` : journal des builds/tests exécutés

## Déploiement
Un guide détaillé est disponible dans `docs/deployment-guide.md`. Exemple de commandes :
```bash
npm run build
node .output/server/index.mjs
# ou
docker build -t portfolio-nuxt .
docker run --env-file .env -v $(pwd)/data:/app/data -p 3000:3000 portfolio-nuxt
```

Pour GitHub Pages, configurez `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` vers votre service (Formspree, etc.) puis utilisez la GitHub Action `Deploy Nuxt site to Pages`.

## Licence
Projet personnel – reproduction ou adaptation autorisée pour usage pédagogique.
