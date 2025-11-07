# Environnement de travail & collaboration

## Outils mis en place
- **Gestion de versions** : Git (workflow feature branch), dépôt GitHub privé.
- **Gestion de projet** : Trello avec colonnes Backlog → En cours → Revue → Terminé.
- **Communication** : Discord (synchrone) et email (suivi hebdomadaire).
- **CI/CD (prévu)** : GitHub Actions pour automatiser les tests et le déploiement.
- **Qualité & build** : Vitest pour les tests unitaires, Docker pour les livraisons reproductibles.

## Architecture du dépôt
```
portfolio/
├─ app.vue                # Layout global
├─ components/            # Sections du site
├─ pages/                 # Routes (homepage + docs publiques)
├─ server/api/            # Endpoint contact
├─ server/services/       # Règles métier (contact)
├─ server/utils/          # Initialisation SQLite
├─ composables/           # Hooks Nuxt (contact, etc.)
├─ docs/                  # Documentation projet
├─ public/                # Maquette SVG et assets statiques
├─ data/                  # Base SQLite (contact_messages)
├─ Dockerfile             # Image de déploiement
└─ .env.example           # Variables d'environnement à configurer
```

## Processus de contribution
1. Création d'une branche dédiée (`feature/section-hero`).
2. Développement et tests locaux (`npm run dev` ou `npm run build`).
3. Pull request avec description des changements et vérification du plan de tests.
4. Revue croisée + validation avant fusion dans `main`.

## Suivi & reporting
- **Daily** : message Discord rapide (avancement, blocages, plan du jour).
- **Weekly** : point de 30 minutes pour prioriser les fonctionnalités.
- **Livrables** : chaque fonctionnalité s'accompagne d'une mise à jour des docs.
