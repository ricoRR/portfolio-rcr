# Cahier des charges – Portfolio Ricardo Chaves Rodrigues

## 1. Contexte & objectifs
- **Sujet** : créer un portfolio hybride (apprentissage + présentation) démontrant toutes les compétences du titre RNCP.
- **Contrat** : page vitrine en ligne, responsive, flat design, mise à jour continue, documentation accessible à l’équipe pédagogique.
- **Utilisateurs cibles** :
  - Recruteurs / responsables techniques (face présentation).
  - Équipe pédagogique et proches (face apprentissage).

## 2. Exigences principales
| Domaine | Attendus du sujet | État |
|---------|-------------------|------|
| Identité | Accroche, photo professionnelle, coordonnées complètes, CV PDF | ✅ `HeroSection.vue` + lien `/CDI_CV_...` |
| Parcours & compétences | Sections À propos, Points forts, preuve RNCP par bloc | ✅ `AboutSection.vue`, `CompetenciesSection.vue` |
| Travaux | Regrouper plusieurs projets + visuels | ✅ `ProjectsList.vue`, `ImageModal.vue`, `Carousel.vue` |
| Contact | Email direct + formulaire relié à un service externe (Resend ou `/api/contact`) | ✅ `HeroSection.vue` + `ContactForm.vue` / `server/api/contact` |
| Documentation | Accessible en ligne (présentation, tests, guide, améliorations) | ✅ `/docs/*` pages + fichiers `docs/*.md` synchronisés |
| Mise à jour | Processus décrit (Trello, QA monitoring, improvement backlog) | ✅ `docs/qa-monitoring.md`, `docs/improvement-proposals.md` |
| Accessibilité | Respect WCAG, navigation clavier, modal ESC | ✅ `docs/accessibility-report.md`, `ImageModal.vue` |

## 3. Couverture composant ↔ documentation
| Section UI | Composant | Documentation associée |
|------------|-----------|------------------------|
| Hero & navigation | `HeroSection.vue`, `AppHeader.vue` | `docs/project-presentation.md`, `docs/user-guide.md` |
| À propos & compétences | `AboutSection.vue`, `CompetenciesSection.vue` | `docs/project-presentation.md` (analyse RNCP), `pages/docs/project-presentation.vue` |
| Points forts / Galerie | `Carousel.vue`, `ImageModal.vue` | `docs/maquette.md`, `figma-homepage.css` |
| Projets | `ProjectsList.vue` | `docs/project-presentation.md`, `docs/improvement-proposals.md` (CMS/filtre) |
| Contact | `ContactForm.vue`, `server/api/contact`, `server/services/contactService.ts` | `docs/technical-documentation.md`, `docs/test-plan.md`, `docs/deployment-guide.md` |
| Documentation publique | `pages/docs/*` | Synchronisé avec `docs/*.md` (maj mai 2025) |

## 4. Documents livrés
- **Figma / wireframe** : `public/wireframe.svg` + `docs/figma-homepage.css`.
- **Documentation technique** : `docs/technical-documentation.md`, `docs/specifications-techniques.md`.
- **Qualité** : `docs/test-plan.md`, `docs/test-report.md`, `docs/qa-monitoring.md`.
- **Déploiement** : `docs/deployment-guide.md`, `docs/deployment-report.md`.
- **Analyse** : `docs/project-presentation.md`, `docs/improvement-proposals.md`, `docs/document-argumentatif.md`.

## 5. Points vérifiés (mai 2025)
1. Pages `/docs` alignées avec les fichiers Markdown (user guide, test plan, improvements, project presentation).
2. Section RNCP mise à jour dans la page documentation.
3. Formulaire connecté à Resend (variables `RESEND_*` + fallback SMTP).
4. Base SQLite stockée dans `NUXT_DATA_DIR` (compatibilité Vercel).

## 6. Points d’attention / questions
1. **Internationalisation** : souhaites-tu prioriser une langue (EN/PT) ? Les textes ne sont pas encore traduits.
2. **CMS / données dynamiques** : valider le choix (Contentful vs Strapi) avant de structurer `ProjectsList`.
3. **Analytics** : préfères-tu GA4 ou Plausible pour respecter les contraintes RGPD ?
4. **Tests E2E** : Playwright est prévu ; faut-il intégrer une matrice détaillée pour TC21/22 avant la prochaine soutenance ?

Merci de confirmer ces choix ou de préciser d’autres priorités pour que la roadmap reste alignée avec les attentes pédagogiques.
