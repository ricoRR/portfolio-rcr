# Monitoring & retours utilisateurs

## Méthodologie
- Je centralise chaque message reçu via le formulaire (`ContactForm.vue` + Resend) dans ma boîte `ricardo.chaves-rodrigues@epitech.eu`, ce qui me permet de suivre les conversations et de répondre sous 48 h.
- Dès qu’un feedback arrive, je l’inscris dans mon tableau Google Sheet (colonnes : Source, Description, Impact, Statut) avec un statut Nouveau → Analyse → Résolu.
- J’active GA4 dès que le déploiement public est en ligne pour croiser les retours qualitatifs avec les métriques (temps passé sur la page projets, conversions du formulaire).

## Indicateurs suivis
| Indicateur | Objectif | Fréquence |
|------------|----------|-----------|
| Nombre de messages entrants | ≥ 3 / mois | Mensuelle |
| Délai de réponse | &lt; 48h | Hebdomadaire |
| Taux d'erreur formulaire | &lt; 5% | Mensuelle |
| Temps moyen sur la page projets | &gt; 45s | Mensuelle |

## Boucle d'amélioration
1. Je collecte le feedback (formulaire, échanges Discord, entretiens recruteurs) et je note le contexte dans la fiche correspondante du tableau Google Sheet.
2. Je priorise avec ma matrice Valeur / Effort (ou ICE) en fonction de l’impact sur le portfolio et de la facilité de mise en œuvre.
3. J’intègre la tâche dans l’itération en cours, puis je la documente (commit + doc si besoin).
4. Après déploiement, je préviens la personne à l’origine du retour et je vérifie l’indicateur concerné au prochain cycle.
