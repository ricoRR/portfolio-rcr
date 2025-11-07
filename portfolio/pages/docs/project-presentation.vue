<template>
  <div class="bg-[#0b0b0b] min-h-screen text-gray-200 px-6 py-16">
    <div class="mx-auto max-w-4xl space-y-10">
      <header class="space-y-3">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">
          Documentation projet
        </p>
        <h1 class="text-3xl font-semibold text-[#ffdd00]">
          Présentation & maquette de la solution web
        </h1>
        <p class="text-sm text-gray-300">
          Synthèse des choix techniques, de l'architecture cible et du parcours
          utilisateur retenu pour mon portfolio professionnel.
        </p>
      </header>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">1. Objectifs</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Valoriser mon profil de développeur fullstack en alternance.</li>
          <li>Centraliser mes réalisations (projets, compétences, expériences).</li>
          <li>Offrir un canal de contact fiable avec suivi par email.</li>
          <li>Maintenir un index de documentation projet accessible en ligne.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">2. Public cible</h2>
        <p class="text-sm text-gray-300">
          Je m'adresse aux responsables techniques et recruteurs en recherche d'alternants capables
          d'intervenir sur le front-end et le back-end d'une application web, avec
          une forte sensibilité qualité / déploiement.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">3. Architecture fonctionnelle</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Accueil structuré autour d'un hero, d'un aperçu du parcours et d'un call-to-action.</li>
          <li>Sections dédiées : À propos, Points forts, Projets, Galerie, Documentation, Contact.</li>
          <li>Formulaire de contact branché sur Resend ou sur `/api/contact` (hébergement Node).</li>
          <li>Documentation publique accessible via `/docs/*`.</li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">4. Maquette & navigation</h2>
        <p class="text-sm text-gray-300">
          La maquette haute fidélité illustre un parcours vertical avec des ancres
          de navigation. Les blocs respectent une grille 12 colonnes, une palette à
          fort contraste (#0a0a0a / #ffdd00) et une typographie linéale.
        </p>
        <NuxtLink
          to="/wireframe.svg"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-full border border-[#ffdd00] px-4 py-2 text-sm font-semibold text-[#ffdd00] transition hover:bg-[#ffdd00]/10"
        >
          Consulter la maquette (SVG)
        </NuxtLink>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">5. Schéma technique</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Nuxt 3 (Vue 3) pour le rendu côté client et l'hébergement des API Nitro.</li>
          <li>Tailwind CSS 4 (plugin Vite) pour le design system.</li>
          <li>`useContactForm` pilote l'appel à Resend ou à l'endpoint configuré via `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT`.</li>
          <li>Runtime Config gère les secrets SMTP/Resend (`MAIL_*`, `RESEND_*`) et les variables publiques (`NUXT_PUBLIC_*`).</li>
          <li>Déploiements cibles : Vercel (Resend + `/tmp/portfolio-data`) ou hébergement Node (Render, Railway, VPS).</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">6. Collaboration & outillage</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Gestion de versions via Git et GitHub (branches feature, pull requests).</li>
          <li>Suivi de tâches avec Trello (colonne Backlog → Doing → Review → Done).</li>
          <li>Communication asynchrone : Discord et email.</li>
          <li>Documentation produite dans le dossier <code>docs/</code> du dépôt.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">7. Conformité aux attendus</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Accroche & identité : Hero avec ma photo, ma phrase d’introduction, ma localisation, CV téléchargeable.</li>
          <li>Coordonnées & contact : email, téléphone, formulaire connecté à Resend ou à `/api/contact`.</li>
          <li>Travaux regroupés : projets détaillés + galerie modale.</li>
          <li>Suivi compétences RNCP : matrice dédiée reliant chaque bloc à mes preuves.</li>
          <li>Documentation : `/docs/*` centralise présentation, tests, guide, améliorations.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">8. Approche hybride</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Face présentation : sections publiques Hero, À propos, Points forts, Projets, Galerie.</li>
          <li>Face apprentissage : documentation accessible listant mes analyses QA, mon suivi RNCP et mon monitoring.</li>
          <li>Mise à jour continue : backlog Trello + revues hebdo, docs synchronisées avec la prod.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">9. Analyse RNCP</h2>
        <div class="overflow-x-auto rounded-2xl border border-white/10">
          <table class="min-w-full border-collapse text-sm text-gray-200">
            <thead class="bg-white/5 text-xs uppercase tracking-[0.3em] text-[#ffdd00]">
              <tr>
                <th class="px-4 py-3 text-left">Bloc</th>
                <th class="px-4 py-3 text-left">Compétences</th>
                <th class="px-4 py-3 text-left">Réalisations</th>
                <th class="px-4 py-3 text-left">Axes</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-white/5">
                <td class="px-4 py-4 font-semibold text-white">Bloc 1 – Interfaces</td>
                <td class="px-4 py-4">Maquettage responsive, accessibilité, intégrations Vue/Nuxt.</td>
                <td class="px-4 py-4">TopHardware (catalogue Next.js + Stripe), Propulse by CA (dashboard design system).</td>
                <td class="px-4 py-4">Automatiser les tests UI (Playwright) et préparer une version EN.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="px-4 py-4 font-semibold text-white">Bloc 2 – Back-end</td>
                <td class="px-4 py-4">Modélisation SQL/NoSQL, API sécurisées, documentation.</td>
                <td class="px-4 py-4">Propulse by CA (API Discourse + migrations AWS), TopHardware (API Symfony, OAuth).</td>
                <td class="px-4 py-4">Renforcer la couverture d’intégration et publier Swagger.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="px-4 py-4 font-semibold text-white">Bloc 3 – Ops & QA</td>
                <td class="px-4 py-4">CI/CD, monitoring, plan de tests, runbooks.</td>
                <td class="px-4 py-4">Portfolio (plan QA, sauvegarde messages) ; Propulse by CA (mise en prod Discourse).</td>
                <td class="px-4 py-4">Industrialiser GitHub Actions et suivre GA4.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="px-4 py-4 font-semibold text-white">Bloc 4 – Collaboration</td>
                <td class="px-4 py-4">Auto-évaluation, communication agile, partage connaissances.</td>
                <td class="px-4 py-4">Portfolio (docs d’analyse, ICE backlog) ; Propulse by CA (rites Scrum, démos).</td>
                <td class="px-4 py-4">Documenter davantage les retours utilisateurs et préparer une rétrospective trimestrielle.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
