# Rapport de déploiement

## Contexte
- **Date** : 2025-10-26
- **Version** : `v1.1`
- **Serveur visé** : Node 20 / Docker (image basée sur `node:20-alpine`)

## Préparation
1. Installation des dépendances : `npm install`
2. Compilation : `npm run build`
   - Sortie générée dans `.output/`
   - Aucun blocage (quelques warnings Browserslist/Tailwind connus)
3. Image Docker disponible (`Dockerfile`) pour une livraison containerisée.

## Validation
- **Tests automatisés** : `npm test` (Vitest + couverture V8)
  - Cas couverts : validation formulaire de contact (TC01/TC02).
  - Rapport HTML généré dans `coverage/index.html`.
- **Base SQLite** : le dossier `data/` est créé automatiquement ; volume recommandé en production pour persister les messages.

## Actions post-déploiement
- Monter le volume : `-v /path/data:/app/data`
- Charger les variables d'environnement (`.env` ou secrets Render).
- Lancer le serveur : `node .output/server/index.mjs` (ou `docker run` selon la cible).
