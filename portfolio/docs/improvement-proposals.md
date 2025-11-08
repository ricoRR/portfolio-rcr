# Propositions d'améliorations

## 1. Monitoring & retours utilisateurs
- Je journalise chaque message entrant (SQLite + Resend) pour repérer rapidement les sujets qui intéressent le plus les recruteurs.
- J’ajoute GA4/Plausible pour confronter ces retours à des données de navigation (temps sur la page projets, taux de scroll).
- Après chaque entretien recruteur, je note les remarques clés et j’alimente le backlog afin de boucler la boucle d’amélioration.

## 2. Ergonomie & accessibilité
- Je garde un contraste AA (audits Lighthouse réguliers) et je consigne les écarts dans un log d’accessibilité.
- La navigation clavier reste prioritaire : focus visible sur tous les CTA, modale qui se ferme à l’ESC, piqûre de rappel à chaque refacto.
- À insérer dans la roadmap courte : bouton « Aller au contenu » et traductions des textes alternatifs en anglais pour préparer l’i18n.

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
