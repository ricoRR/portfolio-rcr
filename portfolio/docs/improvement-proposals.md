# Propositions d'améliorations

## 1. Monitoring & retours utilisateurs
- Collecter systématiquement les messages entrants (stockage SQLite + Resend) pour identifier les points d’intérêt.
- Suivre les sessions via Google Analytics 4 (tableau récapitulatif prévu).
- Capitaliser les feedbacks recueillis lors des entretiens recruteurs et mettre à jour le backlog associé.

## 2. Ergonomie & accessibilité
- Contraste conforme WCAG AA (audits Lighthouse réguliers).
- Navigation clavier : focus visible, modale fermée via ESC.
- À prévoir : bouton « Aller au contenu » et traductions des textes alternatifs en anglais.

## 3. Pistes d'évolution produit
1. **Tests automatisés** : compléter Vitest avec Vue Testing Library puis Playwright pour les parcours critiques.
2. **CI/CD** : pipeline GitHub Actions déclenchant `npm run build` + déploiement Render/Vercel.
3. **CMS** : brancher un headless CMS (Contentful, Strapi) afin d'éditer les projets sans redeploiement.
4. **Internationalisation** : proposer l’interface en FR/EN/PT avec un switcher.
5. **Analytics** : activer GA4 ou Plausible pour suivre l’engagement et tracer les conversions.
6. **Accessibilité avancée** : mode clair/sombre, navigation au clavier dans le carousel via flèches.
7. **SEO** : enrichir les meta tags (Open Graph, Twitter Cards) et générer un sitemap.

## 4. Priorisation (ICE)
1. Mise en place du suivi analytique (impact fort, effort modéré).
2. Automatisation QA (réduit les régressions).
3. Refonte du module projets avec CMS.
4. Internationalisation complète.
