# Guide de déploiement

## Pré-requis
- Compte Render / Railway / VPS Node.js **ou** accès à un serveur Docker (VM, VPS, etc.)
- Node 20 LTS (si déploiement sans conteneur)
- Endpoint de formulaire tiers (Formspree, EmailJS, etc.) et variable `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT`
- Variables d'environnement SMTP configurées (`MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, `MAIL_RECIPIENT`) si l'API contact côté serveur est activée. Vous pouvez aussi utiliser Resend (`RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`) pour un envoi HTTP compatible serverless.
- Optionnel : `NUXT_DATA_DIR` pour définir un dossier d'écriture (utiliser `/tmp/portfolio-data` sur Vercel ou plateformes read-only).

## Déploiement GitHub Pages
1. Créer un formulaire sur Formspree (ou service équivalent) et récupérer l'URL d'endpoint.
2. Définir la variable `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` (Secrets GitHub ou `.env` local avant le build).
3. Facultatif : personnaliser `NUXT_PUBLIC_CONTACT_FORM_SUCCESS_MESSAGE` et `NUXT_PUBLIC_CONTACT_FORM_ERROR_MESSAGE`.
4. Lancer la GitHub Action “Deploy Nuxt site to Pages” ou exécuter `npm run generate` puis pousser le contenu de `.output/public`.
5. Vérifier le site : chargement des pages statiques et envoi du formulaire (consulter le tableau de bord du service externe).

## Étapes Render (exemple)
1. Forker le dépôt sur GitHub.
2. Créer un nouveau service Web sur Render (Node.js).
3. Renseigner la commande build : `npm run build`.
4. Renseigner la commande start : `node .output/server/index.mjs`.
5. Ajouter les variables d'environnement (`MAIL_*`).
6. Déployer. Render installe les dépendances et lance la commande build.

## Déploiement Docker (serveur ou local)
1. Copier et compléter la configuration : `cp .env.example .env`.
2. Construire l'image : `docker build -t portfolio-nuxt .`.
3. Lancer le conteneur :
   ```bash
   docker run -d \
     --env-file .env \
     -v $(pwd)/data:/app/data \
     -p 3000:3000 \
     --name portfolio \
     portfolio-nuxt
   ```
   > Le volume `$(pwd)/data` persiste la base SQLite (`contact_messages`).
4. Vérifier que l'application répond sur `http://localhost:3000`.

## Vérifications post-déploiement
- Tester `/` (chargement de la homepage).
- Tester `/docs/project-presentation` (contenu statique accessible publiquement).
- Tester le formulaire de contact :
  - Sur GitHub Pages : vérifier la réception via le service tiers (Formspree, EmailJS, etc.).
  - Sur déploiement Node : s'assurer que le mail est envoyé et que la ligne est présente dans `contact_messages`.
- Sur hébergement Node, vérifier les logs (`docker logs portfolio` ou console Render) pour confirmer l'absence d'erreurs 500.

## Dépannage
- **Erreur SMTP** : vérifier `MAIL_PORT` (465 => `secure: true`).
- **Build échoue** : s'assurer que la version Node >= 20 et que les dépendances sont installées.
- **Pages docs en 404** : vérifier que le dossier `pages/docs` est bien présent dans la branche déployée.
- **Base SQLite non créée** : vérifier que le dossier `data/` est accessible en écriture par le processus (volume manquant sur Docker ou droits insuffisants).
- **Formulaire inactif sur GitHub Pages** : contrôler `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` et les réglages du service externe (domaines autorisés, quotas).
