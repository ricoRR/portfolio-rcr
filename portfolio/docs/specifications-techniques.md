# Spécifications techniques

## Stack
- Nuxt 3.16 (Vue 3, Nitro)
- Tailwind CSS 4 via `@tailwindcss/vite`
- Service de formulaires externe configurable (`NUXT_PUBLIC_CONTACT_FORM_ENDPOINT`) pour GitHub Pages
- (Optionnel) Nodemailer + Better SQLite 3 pour les déploiements Node
- TypeScript dans les composants complexes

## Structure des composants
| Composant | Rôle | Particularités |
|-----------|------|----------------|
| `HeroSection.vue` | Accroche, informations clés, CTA | Image statique optimisée (balise `<img>`) |
| `AboutSection.vue` | Parcours, compétences, langues | Mise en page responsive en grille |
| `Carousel.vue` | Mise en avant des points forts | Navigation prév/next, computed item |
| `ProjectsList.vue` | Catalogue des projets | Données typées, badges stack |
| `ImageModal.vue` | Galerie modale | Utilise Teleport + accessibilité ESC |
| `ContactForm.vue` | Formulaire de contact | Utilise `useContactForm` (fetch vers endpoint externe) |

## API
### Formulaire de contact (GitHub Pages)
- **Envoi** : `fetch` JSON vers l'URL exposée par `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` (Formspree, EmailJS, etc.).
- **Validation** : trim, format email, longueur minimale (10 caractères) dans `useContactForm`.
- **Retour** : message de confirmation retourné par le service ou fallback configuré (`NUXT_PUBLIC_CONTACT_FORM_SUCCESS_MESSAGE`).

### Option Nitro `POST /api/contact` (déploiement Node)
- **Entrée** : `{ name, email, message }`
- **Validation** : assurée côté serveur (`validateContactPayload`)
- **Persistance** : insertion dans `contact_messages` (SQLite)
- **Notification** : SMTP via Nodemailer (`MAIL_*`)
- **Sortie** : `{ success: true, message, contactId }` ou erreur 400/500

## Sécurité
- Secrets en variables d'environnement (`MAIL_*`, `NUXT_PUBLIC_*`).
- Les messages envoyés via GitHub Pages transitent par un service tiers (Formspree, EmailJS) bénéficiant de leurs protections anti-spam.
- En déploiement Node, le module `contactService` valide et assainit les données avant insertion dans SQLite.
- Prévoir reCAPTCHA v3 ou un honeypot si la volumétrie augmente.

## Performance
- Lazy loading implicite via Nuxt.
- Images locales servies par `@nuxt/image` (optimisation automatique).
- Build Nuxt optimisé (44 kB JS côté client hors dépendances).
