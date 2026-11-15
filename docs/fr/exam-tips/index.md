# Conseils et points d’attention pour l’examen

Utilisez cette page après l’étude des six domaines. Elle transforme le périmètre officiel en plan de révision sans reproduire de questions confidentielles.

## Vue d’ensemble et format

La page Microsoft indique actuellement une durée de **100 minutes**, un examen surveillé et la possibilité de composants interactifs. Vérifiez la page de certification avant l’inscription, car les politiques, langues et modalités peuvent évoluer.

| Élément | Indication actuelle |
| --- | --- |
| Examen | GH-300 : GitHub Copilot |
| Score de réussite | 700 ou plus |
| Durée | 100 minutes |
| Modalité | Examen surveillé ; les options dépendent de l’inscription |
| Interactivité | Des composants interactifs peuvent être proposés |
| Validité | La page actuelle indique deux ans et une transition vers la recertification Microsoft |

## Stratégie de pondération

Commencez par le domaine Fonctionnalités Copilot à 25–30 %. Étudiez ensemble la page IDE/CLI et la page [capacités et politiques](../copilot-capabilities/) : ce sont deux pages de lecture pour un seul domaine officiel.

Ne transformez pas une fourchette en score exact inventé. Utilisez-la pour répartir votre temps de pratique.

## Points d’attention fréquents

### Plans et politiques

Une fonctionnalité documentée peut être indisponible à cause du plan, de la politique d’organisation, du dépôt, du client ou d’un déploiement progressif. Identifiez d’abord la portée du scénario.

### Modes différents

Les suggestions inline, le chat, Edit, Plan et Agent diffèrent par contexte, autonomie et approbation. Choisissez le mode le moins autonome qui répond au besoin.

### Exclusions et code public

Les exclusions de contenu et le filtrage du code public répondent à des problèmes différents. Aucun ne remplace la revue humaine, la gestion des secrets ou l’analyse de licence.

### Responsabilité humaine

Le code généré reste une ébauche. Le développeur doit comprendre, tester, sécuriser, vérifier la licence et maintenir ce qui est fusionné.

### Choix du contexte

Fichiers ouverts, symboles sélectionnés, instructions, historique, exemples et résultats d’outils influencent la réponse. Plus de contexte n’est pas toujours meilleur.

## Plan sur quatre semaines

1. **Semaine 1 — fondations :** terminer les deux parcours Microsoft Learn et pratiquer la revue responsable.
2. **Semaine 2 — fonctionnalités :** utiliser IDE et CLI, comparer les modes et observer les politiques.
3. **Semaine 3 — autres domaines :** suivre le flux de données, écrire des prompts, générer des tests et tester les exclusions.
4. **Semaine 4 — renforcement :** faire l’évaluation officielle, revoir les objectifs manqués et utiliser le bac à sable.

## Pratique indispensable

- Installer Copilot dans un projet temporaire et comparer inline, chat, Edit, Plan et Agent.
- Créer un fichier `.github/copilot-instructions.md` contenant des conventions sûres et testables.
- Exécuter l’atelier de comparaison et noter l’effet du contexte.
- Générer des tests puis ajouter un cas limite oublié par Copilot.
- Configurer une exclusion dans un dépôt de test et documenter son comportement.
- Relire une pull request assistée par IA en lisant la différence, pas seulement son résumé.

## Habitudes le jour de l’examen

- Lire les qualificatifs : *meilleur*, *première étape*, *moindre privilège*, *plus approprié*.
- Éliminer les choix qui ignorent le plan, la politique ou la portée indiquée.
- Marquer une question incertaine et y revenir.
- Utiliser le bac à sable pour se familiariser avec les composants interactifs.

## Fiches de révision

| Sujet | À retenir |
| --- | --- |
| IA responsable | Principes, préjudices, atténuation, validation, responsabilité |
| Fonctionnalités | IDE, CLI, chat, modes, capacités, politiques |
| Données | Contexte, requête, filtrage, post-traitement, limites |
| Prompts | Objectif, contexte, exemples, critères, historique |
| Productivité | Refactorisation, documentation, tests, sécurité, performance |
| Protections | Exclusions, paramètres, code public, diagnostic |

## Ressources officielles

- [Page de certification GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/github-copilot/)
- [Guide d’étude officiel](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Évaluation pratique Microsoft](https://learn.microsoft.com/fr-fr/credentials/certifications/github-copilot/?practice-assessment-type=certification)
- [Bac à sable de l’examen](https://aka.ms/exam-sandbox)
- [GitHub Copilot Fundamentals Part 1](https://learn.microsoft.com/fr-fr/training/paths/copilot/)
- [GitHub Copilot Fundamentals Part 2](https://learn.microsoft.com/fr-fr/training/paths/gh-copilot-2/)
