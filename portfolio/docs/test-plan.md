# Plan de tests détaillé

## Aperçu
- **Portée** : fonctions critiques (contact, navigation, carousel, galerie).
- **Responsable** : Ricardo Chaves Rodrigues.
- **Cycle** : à chaque itération ou livraison majeure.

## Matrice de tests
| ID | Fonction | Type | Attendu |
|----|----------|------|---------|
| TC01 | Formulaire contact | Fonctionnel | Message de succès, envoi accepté par le service externe |
| TC02 | Formulaire contact | Fonctionnel (erreur) | Message d'erreur si service indisponible ou endpoint absent |
| TC03 | Formulaire contact | Validation | Empêcher email vide/format invalide |
| TC20 | Navigation anchors | UI/UX | Scroll fluide vers la section |
| TC21 | Carousel | UI | Items pivotent correctement |
| TC22 | Modal galerie | Accessibilité | Fermeture via clic overlay et touches |

## Automatisation
- **Stack** : Vitest (tests unitaires sur `contactService` côté serveur).
- **Commandes** : `npm test` (exécute l'ensemble des suites).
- **Couverture actuelle** :
  - `TC01`/`TC02` : validation du formulaire (`contactService` pour l'option serveur, logique partagée avec `useContactForm`).
- **Rapports** : disponibles dans `coverage/` (générés via Vitest).

## Stratégie d'exécution
1. Exécuter les tests manuels à chaque fin d'itération.
2. Documenter les résultats dans `docs/test-report.md`.
3. Étendre l'automatisation vers les scénarios UI (TC21, TC22) via des tests end-to-end (Playwright).

## Outils
- Lighthouse pour l'accessibilité.
- Chrome DevTools (mobile viewport, throttling).
- Vitest (à intégrer) pour tester les composants.
