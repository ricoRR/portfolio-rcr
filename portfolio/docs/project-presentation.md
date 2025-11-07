# Présentation du projet

## Objectifs
- Valoriser mon profil et les compétences que je développe en alternance.
- Donner un aperçu concret des projets que j’ai menés et des stacks que je maîtrise.
- Offrir un canal de contact professionnel avec suivi par email.
- Centraliser tous les documents utiles aux recruteurs et partenaires.

## Public cible
Je m’adresse aux responsables techniques et recruteurs qui recherchent un alternant fullstack capable de livrer une application moderne (front + back).

## Périmètre fonctionnel
1. **Page d'accueil** : hero, navigation rapide, accroche.
2. **À propos** : parcours, compétences, langues.
3. **Points forts** : carousel interactif.
4. **Projets** : fiches détaillées (stack, durée, rôle).
5. **Galerie** : modal plein écran.
6. **Documentation** : centre de ressources `/docs/*` (présentation, tests, analyses).
7. **Contact** : formulaire relié à un service externe compatible GitHub Pages.

## Architecture technique
- Nuxt 3, Vue 3, Tailwind 4 (plugin Vite).
- API Nitro (`/api/contact`) activable sur un hébergement Node pour stocker les messages et déclencher Resend/SMTP.
- Intégration formulaire externe via `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` (Formspree, EmailJS…) lorsque j’héberge en statique.
- Déploiement cible : Vercel (Resend + `/tmp/portfolio-data`) ou Render/Railway pour l’API persistante.

## Conformité aux attendus
- **Accroche & identité** : Hero avec ma photo, ma phrase d’introduction, ma localisation et un lien direct vers mon CV (`components/HeroSection.vue`).
- **Coordonnées & contact** : email, téléphone et formulaire connecté à Resend ou à `/api/contact` (`components/ContactForm.vue`).
- **Travaux regroupés** : projets détaillés (stack, rôle, résultats) + galerie modale (`components/ProjectsList.vue`, `components/ImageModal.vue`).
- **Suivi compétences RNCP** : matrice dédiée qui relie chaque bloc à mes réalisations (`components/CompetenciesSection.vue`, tableau ci-dessous).

## Approche hybride
- **Présentation** : sections publiques Hero, À propos, Points forts, Projets et Galerie qui condensent mon meilleur profil pour les recruteurs.
- **Apprentissage** : section Documentation où je décris ma démarche, mes tests et mon suivi RNCP.
- **Mise à jour** : backlog Trello + revues hebdomadaires (cf. `docs/qa-monitoring.md`, `docs/improvement-proposals.md`).

## Analyse des réalisations et progression
| Bloc RNCP | Compétences clés travaillées | Réalisations & preuves | Progression / axes |
|-----------|-----------------------------|------------------------|--------------------|
| Bloc 1 – Interfaces | Maquettage responsive, accessibilité, intégrations Vue/Nuxt | TopHardware (catalogue Next.js + Stripe) ; Propulse by CA (dashboard Nuxt + design system) | Poursuivre les tests UI automatisés (Playwright) et livrer une version EN du site. |
| Bloc 2 – Back-end | Modélisation SQL/NoSQL, API sécurisées, documentation | Propulse by CA (API Discourse + migrations AWS) ; TopHardware (API Symfony, OAuth) | Renforcer la couverture d’intégration et publier la documentation Swagger/Postman. |
| Bloc 3 – Ops & QA | CI/CD, monitoring, plan de tests, runbooks | Portfolio (plan QA, SQLite, sauvegarde messages) ; Propulse by CA (mise en prod Discourse) | Industrialiser la pipeline GitHub Actions et suivre les métriques GA4. |
| Bloc 4 – Collaboration | Auto-évaluation, communication agile, partage connaissances | Portfolio (docs d’analyse, ICE backlog) ; Propulse by CA (rites Scrum, démos) | Documenter davantage les retours utilisateurs et préparer des rétrospectives trimestrielles. |

## Documentation & conformité
- **Conformité aux attendus** : l’ensemble des éléments demandés (accroche, contacts, projets, CV, analyse compétences) est présent sur la homepage et dans `/docs`.
- **Approche hybride** : la face présentation sert les recruteurs, la face apprentissage expose mes preuves, tests et plans d’évolution.
- **Analyse RNCP** : le tableau ci-dessus relie chaque bloc à des réalisations concrètes avec des axes de progression.

## Maquette
Une maquette SVG est disponible dans `public/wireframe.svg` et accessible sur le site via `/docs/project-presentation`.
