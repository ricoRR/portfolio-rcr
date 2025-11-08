# Cahier des charges – Portfolio Ricardo Chaves Rodrigues

## 1. Vision & objectifs
- Valoriser mon profil d’alternant fullstack en exposant les compétences RNCP, mes expériences pro et ma capacité à documenter un projet de A à Z.
- Offrir une vitrine immédiatement exploitable par les recruteurs tout en conservant un espace d’apprentissage qui centralise analyses, tests, retours et backlog.
- Garantir une présence en ligne maintenable : responsive, accessible, documentée, avec un process de mise à jour continu (docs, QA, roadmap).

## 2. Public cible & promesse
- **Recruteurs & responsables techniques** : accéder rapidement aux projets, stacks, résultats et obtenir un contact direct (formulaire + mail pro).
- **Équipe pédagogique / jury RNCP** : vérifier les livrables, preuves par bloc, plans de tests, comptes rendus de déploiement.
- **Proches / pairs** : suivre ma progression, comprendre mes choix techniques, contribuer via les retours collectés (formulaire + backlog Google Sheet).

## 3. Périmètre fonctionnel
| Zone | Expérience attendue | Implémentation / Références |
|------|--------------------|-----------------------------|
| Hero & navigation | Photo, accroche, CTA « Découvrir mes projets », menu sticky | `HeroSection.vue`, `AppHeader.vue`, `docs/project-presentation.md`, `docs/user-guide.md` |
| À propos & compétences | Parcours, stacks, langues, matrice RNCP | `AboutSection.vue`, `CompetenciesSection.vue`, tableau RNCP issu de `docs/project-presentation.md` |
| Points forts & galerie | Carousel + modal accessible (ESC, focus visible) | `Carousel.vue`, `ImageModal.vue`, `docs/maquette.md`, `docs/accessibility-report.md` |
| Projets | Fiches détaillées (stack, rôle, résultats) avec visuels | `ProjectsList.vue`, `docs/project-presentation.md` |
| Documentation publique | Hub `/docs/*` avec présentation, tests, guides, analyses | `pages/docs/*`, `docs/*.md`, synchronisation hebdo |
| Contact | Formulaire relié à Resend ou `/api/contact`, email direct | `ContactForm.vue`, `server/api/contact`, `docs/technical-documentation.md`, `docs/test-plan.md` |

## 4. Architecture technique & environnement
- Stack Nuxt 3 / Vue 3 / Tailwind 4 (`@tailwindcss/vite`), composants typés en TypeScript.
- Structure de dépôt décrite dans `docs/working-environment.md` avec séparation claire `components/`, `pages/`, `server/`, `docs/`, `data/`.
- Formulaire : `useContactForm` cible un endpoint externe (`NUXT_PUBLIC_CONTACT_FORM_ENDPOINT`) ou l’API Nitro `POST /api/contact` (SQLite + Nodemailer + Resend).
- Base SQLite (`data/app.db`) initialisée via `server/utils/` et persistée par volume Docker ou `NUXT_DATA_DIR` (`/tmp/portfolio-data` sur Vercel).
- Scripts & outils : `npm run dev/build/preview/test`, Vitest + couverture V8, Dockerfile pour garantir un run reproductible, GitHub Actions prévu pour CI/CD.

## 5. Exigences détaillées
- **Identité & accès rapide** : hero avec photo, localisation, CV PDF, boutons vers projets et contact.
- **Contenus RNCP** : tableau bloc → compétences → réalisations → axes de progression (cf. `docs/project-presentation.md`), visible dans la page documentation.
- **Preuves techniques** : code Nuxt/Server, documentation technique (`docs/technical-documentation.md`, `docs/specifications-techniques.md`) décrivant stack, API, sécurité.
- **Base documentaire** : chaque livrable (tests, QA, déploiement, guide utilisateur, argumentaire, maquette) est accessible depuis `/docs` et depuis le dépôt.
- **Gestion des données** : validation stricte (serveur + client), stockage sécurisé des messages, secrets en variables d’environnement (`MAIL_*`, `RESEND_*`, `NUXT_DATA_DIR`).
- **Suivi des améliorations** : backlog Google Sheet + ICE score (`docs/improvement-proposals.md`, `docs/document-argumentatif.md`) pour prioriser CMS, analytics, i18n, QA auto.

## 6. UX, maquette & accessibilité
- Parcours vertical défini dans `docs/maquette.md` et `public/wireframe.svg` : hero → à propos → points forts → projets → galerie → docs → contact.
- Identité visuelle : fond `#0a0a0a`, accent `#ffdd00`, texte `#ffffff`, grille 12 colonnes, marges 24 px.
- Accessibilité (audit Lighthouse) : contraste AA, focus visible, navigation clavier complète, modal fermée via ESC, textes alternatifs descriptifs.
- Améliorations planifiées : bouton « Passer au contenu », navigation clavier renforcée dans le carousel, hiérarchie de titres revue, version EN/PT alignée avec la roadmap i18n.

## 7. Qualité, tests & monitoring
- **Plan de tests** (`docs/test-plan.md`) : TC01–TC22 couvrant formulaire, navigation, carousel, modal, validations.
- **Automatisation** : Vitest (TC01/TC02) via `npm test`, rapport dans `coverage/index.html`. Playwright prévu pour TC21/TC22.
- **Journal de tests** (`docs/test-report.md`) : historise chaque exécution, versionnée à partir de v1.1 (26/10/2025).
- **Monitoring** (`docs/qa-monitoring.md`) : collecte des retours via formulaire + email, suivi des KPIs (messages entrants ≥3/mois, délai <48h, taux d’erreur <5 %).
- **Boucle d’amélioration** : capture feedback → priorisation valeur/effort → update backlog Google Sheet → livraison + doc mise à jour.

## 8. Déploiement & exploitation
- **Cibles** : GitHub Pages (mode statique + service de formulaire), Render/Railway/Node 20 (mode full stack), Docker (`node:20-alpine`).
- **Guide opérationnel** (`docs/deployment-guide.md`) : prérequis, variables, commandes `npm run build`, `node .output/server/index.mjs`, `docker run`.
- **Rapport de déploiement** (`docs/deployment-report.md`) : trace les livraisons (v1.1), tests pré-prod, persistance SQLite, vérifications post-déploiement.
- **Maintenance** : volumes pour `data/`, surveillance des logs (`docker logs` ou Render dashboard), check régulier des endpoints `/` et `/docs/*`, test du formulaire après chaque release.

## 9. Livrables & documentation
- **Analyse & présentation** : `docs/project-presentation.md`, `docs/document-argumentatif.md`, `docs/user-guide.md`.
- **Conception & design** : `public/wireframe.svg`, `docs/maquette.md`, `docs/figma-homepage.css`.
- **Technique** : `docs/technical-documentation.md`, `docs/specifications-techniques.md`.
- **Qualité & opérations** : `docs/test-plan.md`, `docs/test-report.md`, `docs/qa-monitoring.md`, `docs/deployment-guide.md`, `docs/deployment-report.md`, `docs/accessibility-report.md`.
- **Améliorations** : `docs/improvement-proposals.md`, backlog ICE et priorisation.

## 10. Roadmap & priorités
1. **Suivi analytique** (GA4 ou Plausible) : mesurer l’engagement, alimenter le tableau d’indicateurs, renforcer le monitoring utilisateur.
2. **Automatisation QA** : élargir Vitest + Vue Testing Library, ajouter Playwright sur les parcours critiques, brancher la pipeline GitHub Actions.
3. **Module projets dynamique** : brancher un CMS headless (Contentful/Strapi) pour gérer les fiches sans redeployer.
4. **Internationalisation** : décliner l’interface FR/EN/PT avec switcher, traduire contenus, textes alternatifs et docs clés.
5. **Accessibilité avancée** : bouton skip link, mode clair/sombre, navigation clavier renforcée dans le carousel et la galerie.
6. **SEO & partage** : enrichir les meta tags (Open Graph, Twitter Cards) et générer un sitemap automatique.
