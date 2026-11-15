# Améliorer la productivité avec GitHub Copilot

Ce domaine représente **10–15 %** de l’examen. La productivité se mesure à la qualité du flux de travail, pas à la vitesse à laquelle on colle du code dans un dépôt.

## Objectifs

- Utiliser Copilot pour générer, refactoriser et documenter du code.
- Accélérer l’apprentissage et réduire les changements de contexte.
- Générer des données d’exemple et moderniser du code ancien.
- Générer des tests unitaires et d’intégration.
- Identifier les cas limites et suggérer des améliorations de sécurité ou de performance.

## Flux de travail utiles

### Générer et refactoriser avec prudence

Donnez le contrat existant, les invariants et des exemples avant de demander une modification. Pour une refactorisation, demandez une petite différence, conservez le comportement public et comparez les tests avant et après.

### Tester le comportement

Demandez des tests pour les chemins normaux, limites, invalides et en erreur. Relisez les assertions pour éviter les faux positifs, puis exécutez la suite. Les données d’exemple doivent être synthétiques et ne pas contenir de secrets ou de données personnelles.

### Utiliser Copilot pour apprendre

Demandez une explication ciblée, une comparaison ou un glossaire. Gardez la question ancrée dans le projet afin de faciliter la prochaine décision technique.

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
