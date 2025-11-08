# Document argumentatif

## Constat
Mon portfolio remplit la mission de présentation, mais je peux encore muscler l’engagement (meilleure collecte des leads) et fiabiliser les livraisons (moins de manipulations manuelles).

## Propositions clés
1. **Automatisation QA**  
   - Gain : moins de régressions, je sécurise les features critiques avant chaque soutenance.  
   - Effort : ajouter Vue Testing Library + Playwright dans la suite actuelle (Vitest est déjà en place).
2. **Déploiement automatisé**  
   - Gain : builds reproductibles, je ne dépends plus d’un run local pour Render/Vercel.  
   - Effort : workflow GitHub Actions (install → test → build → déploiement) + secrets partagés.
3. **Internationalisation**  
   - Gain : recruteurs EN/PT comprennent immédiatement mon profil, utile pour les candidatures internationales.  
   - Effort : factoriser les textes, créer le switcher, traduire les sections clés et les alt texts.
4. **Tracking analytique**  
   - Gain : décisions basées sur des données (taux de scroll, conversions).  
   - Effort : configuration GA4 ou Plausible + bandeau de consentement si nécessaire.

## Priorisation (ICE)
| Proposition | Impact | Confiance | Effort | Score |
|-------------|--------|-----------|--------|-------|
| Automatisation QA | 8 | 7 | 4 | 13.5 |
| Déploiement auto | 9 | 6 | 5 | 12.0 |
| Internationalisation | 7 | 5 | 6 | 9.0 |
| Tracking analytique | 6 | 8 | 3 | 12.0 |

## Conclusion
Je commence par l’automatisation QA et le déploiement continu pour solidifier la base. Une fois ces deux chantiers en place, j’enchaîne sur l’i18n et le tracking afin d’augmenter la portée du site sans sacrifier la qualité.
