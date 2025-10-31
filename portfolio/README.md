# Portfolio – Ricardo Chaves Rodrigues

Portfolio Nuxt 3 présentant mon profil de développeur web fullstack en alternance. Le site regroupe les sections principales (À propos, projets, galerie, contact) ainsi qu’un espace partenaire protégé donnant accès à la documentation complète du projet.

## Fonctionnalités
- Hero section avec informations clés et CTA.
- Présentation détaillée (expériences, compétences, langues).
- Carousel "Points forts" et galerie modale.
- Liste de projets avec stack et rôle.
- Formulaire de contact relié à un SMTP (Nodemailer) et persistance des messages en SQLite.
- Authentification durcie (validation de format, mot de passe fort, verrouillage) pour accéder aux documents.
- Documentation accessible sous `/docs/*`.

## Démarrage
```bash
npm install
cp .env.example .env  # puis renseigner les valeurs SMTP + identifiants auth
npm run dev
```

### Variables d’environnement
| Clé | Description |
|-----|-------------|
| `MAIL_HOST` | Hôte SMTP |
| `MAIL_PORT` | Port SMTP |
| `MAIL_USER` | Identifiant SMTP |
| `MAIL_PASS` | Mot de passe SMTP |
| `MAIL_RECIPIENT` | Destinataire des messages (défaut : `MAIL_USER`) |
| `AUTH_EMAIL` | Email autorisé pour l’espace partenaire |
| `AUTH_PASSWORD` | Mot de passe associé |
| `AUTH_MAX_ATTEMPTS` | Nombre d’essais avant blocage (optionnel) |
| `AUTH_LOCK_MINUTES` | Durée du blocage en minutes (optionnel) |

## Scripts
- `npm run dev` : serveur de développement (http://localhost:3000).
- `npm run build` : build de production.
- `npm run preview` : prévisualisation de la build.
- `npm test` : tests unitaires + rapport de couverture (`coverage/`).

## Structure
```
components/      # Sections du site (Hero, About, Projects, Gallery, Auth, Contact)
pages/           # Routes (homepage + documentation)
server/api/      # API contact & auth
server/services/ # Logique métier (authentification, contact)
server/utils/    # Initialisation de la base SQLite
composables/     # Gestion de l’état d’authentification
public/          # Assets statiques (maquette SVG, images)
docs/            # Documentation projet
data/            # Base SQLite (messages de contact)
Dockerfile       # Industrialisation via conteneur
```

## Documentation
- `/docs/project-presentation` : maquette & choix techniques
- `/docs/test-plan` : stratégie de tests
- `/docs/user-guide` : guide utilisateur
- `/docs/improvements` : pistes d’amélioration et analyse QA
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

## Licence
Projet personnel – reproduction ou adaptation autorisée pour usage pédagogique.
