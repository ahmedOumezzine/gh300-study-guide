# Améliorer la productivité avec GitHub Copilot

Ce domaine représente **10–15 %** de l’examen. La productivité se mesure à la qualité du flux de travail, pas à la vitesse à laquelle on colle du code dans un dépôt.

## Objectifs

- Utiliser Copilot pour générer, refactoriser et documenter du code.
- Accélérer l’apprentissage et réduire les changements de contexte.
- Générer des données d’exemple et moderniser du code ancien.
- Générer des tests unitaires et d’intégration.
- Identifier les cas limites et suggérer des améliorations de sécurité ou de performance.

## Couverture officielle de l’examen

Le guide d’étude Microsoft évalue ce domaine avec des résultats de productivité, de qualité, de test et de sécurité. Utilisez cette carte pour vérifier chaque objectif.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Utiliser Copilot pour générer, refactoriser et documenter du code | [Générer et refactoriser avec prudence](#générer-et-refactoriser-avec-prudence) et [Relier un besoin à un flux](#relier-un-besoin-à-un-flux) |
| Accélérer l’apprentissage et réduire les changements de contexte | [Utiliser Copilot pour apprendre](#utiliser-copilot-pour-apprendre) |
| Générer des données d’exemple et moderniser du code ancien | [Relier un besoin à un flux](#relier-un-besoin-à-un-flux) |
| Générer des tests unitaires et d’intégration | [Tester le comportement](#tester-le-comportement) |
| Identifier les cas limites, écrire des assertions et suggérer des améliorations de sécurité et de performance | [Tester le comportement](#tester-le-comportement) et [Mesurer le résultat](#mesurer-le-résultat) |

## Flux de travail utiles

### Générer et refactoriser avec prudence

Donnez le contrat existant, les invariants et des exemples avant de demander une modification. Pour une refactorisation, demandez une petite différence, conservez le comportement public et comparez les tests avant et après.

### Tester le comportement

Demandez des tests pour les chemins normaux, limites, invalides et en erreur. Relisez les assertions pour éviter les faux positifs, puis exécutez la suite. Les données d’exemple doivent être synthétiques et ne pas contenir de secrets ou de données personnelles.

### Relier un besoin à un flux

| Besoin | Demande utile à Copilot | Contrôle humain |
| --- | --- | --- |
| Nouvelle fonction | Générer une petite implémentation à partir d’un contrat | API, erreurs, cas limites, tests |
| Refactorisation | Proposer un plan en conservant le comportement public | Différence, régressions, performance |
| Documentation | Expliquer le comportement et les exemples | Exactitude, public, obsolescence |
| Couverture de tests | Générer des cas unitaires et d’intégration | Assertions, fixtures, faux positifs |
| Revue de sécurité | Repérer les frontières de confiance et motifs dangereux | Modèle de menace, analyse, correction |
| Code ancien | Expliquer puis proposer une migration progressive | Compatibilité, déploiement, retour arrière |

### Utiliser Copilot pour apprendre

Demandez une explication ciblée, une comparaison ou un glossaire. Gardez la question ancrée dans le projet afin de faciliter la prochaine décision technique.

### Mesurer le résultat

La productivité ne se réduit pas au nombre de lignes générées. Comparez une référence avec le flux assisté par Copilot à l’aide d’éléments tels que :

- temps nécessaire pour comprendre une modification ou terminer une tâche ;
- couverture des tests, défauts et régressions détectées après livraison ;
- retouches demandées en revue, maintenabilité et qualité de la documentation ;
- changements de contexte, interruptions et demandes de clarification ;
- résultats de sécurité, mesures de performance et effort de retour arrière.

Choisissez des mesures adaptées au projet et ne sacrifiez ni la sécurité ni la maintenabilité pour obtenir une première version plus rapide. Copilot peut accélérer un flux qui exige toujours une revue approfondie.

## Liste de vérification

- [ ] Demander un plan de refactorisation avant la différence.
- [ ] Générer des tests pour les cas normaux, limites et erreurs.
- [ ] Utiliser des données synthétiques et vérifier leur confidentialité.
- [ ] Exécuter formatage, analyse statique, tests et contrôles de sécurité.
- [ ] Mesurer l’amélioration de la qualité, de la maintenance ou du délai.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Cas d’usage de l’IA pour les développeurs](https://learn.microsoft.com/fr-fr/training/modules/developer-use-cases-for-ai-with-github-copilot/)
- [Tester avec GitHub Copilot](https://learn.microsoft.com/fr-fr/training/modules/testing-with-github-copilot/)
- [Documentation GitHub Copilot](https://docs.github.com/fr/copilot)
