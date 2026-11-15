# Utiliser GitHub Copilot de manière responsable

Ce domaine représente **15–20 %** de l’examen GH-300. L’objectif est de reconnaître les risques, d’exercer son jugement humain et de valider chaque modification assistée par l’IA avant sa mise en production.

## Objectifs

- Décrire les risques et les limites des outils d’IA générative.
- Expliquer une utilisation éthique et responsable de l’IA.
- Identifier les préjudices possibles et les mesures d’atténuation.
- Expliquer pourquoi il faut valider les résultats de Copilot.
- Utiliser Copilot tout en conservant une responsabilité humaine claire.

## Notes d’étude

### Risques et limites

Copilot produit des suggestions à partir du contexte disponible. Une suggestion peut sembler plausible tout en étant fausse, incomplète, vulnérable, biaisée ou inadaptée au projet.

- Le modèle peut inventer une API, mal utiliser une bibliothèque ou mal comprendre une exigence.
- Le code généré peut contenir une injection, une désérialisation dangereuse ou un secret en dur.
- Les modèles peuvent reproduire des pratiques anciennes, biaisées ou contraires aux standards de l’équipe.
- Un contexte limité peut masquer des contraintes présentes dans d’autres fichiers ou services.
- Deux requêtes identiques peuvent produire des résultats différents.

### Principes responsables en pratique

Utilisez l’équité, la fiabilité et la sécurité, la confidentialité et la sécurité des données, l’inclusion, la transparence et la responsabilité comme grille de revue. Demandez-vous :

1. Qui pourrait être touché par ce résultat ?
2. Peut-on l’expliquer et le tester ?
3. Le changement révèle-t-il une donnée personnelle ou confidentielle ?
4. Qui relit et accepte le changement final ?

Le développeur et l’organisation restent responsables du logiciel livré. Copilot est un assistant, pas le décideur.

### Valider avant d’accepter

Traitez chaque suggestion comme une ébauche. Vérifiez le comportement par rapport au besoin, exécutez les tests, ajoutez les tests des nouveaux chemins, inspectez les erreurs et vérifiez les API ou dépendances citées.

## Liste de vérification

- [ ] Traduire le besoin en test ou en critère d’acceptation.
- [ ] Relire le code généré ligne par ligne.
- [ ] Vérifier les secrets, données personnelles, permissions et entrées externes.
- [ ] Exécuter les tests et les outils de sécurité.
- [ ] Identifier le relecteur humain et la raison de l’acceptation.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [IA responsable avec GitHub Copilot](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/)
- [Documentation GitHub Copilot](https://docs.github.com/fr/copilot)
- [GitHub Trust Center](https://github.com/trust-center)
