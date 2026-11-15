# Utiliser GitHub Copilot de manière responsable

Ce domaine représente **15–20 %** de l’examen GH-300. L’objectif est de reconnaître les risques, d’exercer son jugement humain et de valider chaque modification assistée par l’IA avant sa mise en production.

## Objectifs

- Décrire les risques et les limites des outils d’IA générative.
- Expliquer une utilisation éthique et responsable de l’IA.
- Identifier les préjudices possibles et les mesures d’atténuation.
- Expliquer pourquoi il faut valider les résultats de Copilot.
- Utiliser Copilot tout en conservant une responsabilité humaine claire.

## Couverture officielle de l’examen

Le guide d’étude Microsoft divise ce domaine en deux groupes de compétences. Le tableau relie chaque objectif officiel aux notes de cette page.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Décrire les risques et les limites des outils d’IA générative | [Risques et limites](#risques-et-limites) |
| Expliquer une utilisation éthique et responsable de l’IA | [Principes responsables](#principes-responsables-en-pratique) |
| Identifier les préjudices possibles et les mesures d’atténuation | [Relier un préjudice à une atténuation](#relier-un-préjudice-à-une-atténuation) |
| Expliquer pourquoi il faut valider les résultats de l’IA | [Valider avant d’accepter](#valider-avant-daccepter) |
| Identifier comment utiliser GitHub Copilot de manière responsable | [Workflow d’utilisation responsable](#workflow-dutilisation-responsable) |

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

### Workflow d’utilisation responsable

Utilisez cette séquence lorsqu’un scénario demande comment utiliser Copilot de manière responsable :

1. **Définir la tâche et les limites.** Préciser le besoin, les données autorisées, les utilisateurs concernés et les critères d’acceptation avant le prompt.
2. **Choisir le contexte utile minimal.** Exclure les secrets, les données personnelles et les informations propriétaires inutiles. Respecter les politiques du dépôt et de l’organisation.
3. **Traiter la réponse comme une ébauche non fiable.** Vérifier les API, les dépendances, les hypothèses, les permissions, les erreurs et les cas limites.
4. **Valider avec des preuves.** Exécuter les tests, les contrôles de sécurité et de qualité, la revue de licence et une revue humaine ciblée.
5. **Conserver la responsabilité humaine.** Noter le relecteur, les contrôles réalisés et le plan de surveillance ou de retour arrière après livraison.

La réponse la plus sûre n’est pas d’accepter aveuglément une suggestion plausible ni de supposer qu’une politique rend automatiquement le code généré correct.

### Six principes comme grille de revue

| Principe | Question pour une modification assistée par Copilot |
| --- | --- |
| Équité | Le code ou les données peuvent-ils défavoriser un groupe ? |
| Fiabilité et sécurité | Le résultat échoue-t-il de manière sûre ? |
| Confidentialité et sécurité | Les secrets, données personnelles et permissions sont-ils protégés ? |
| Inclusion | Des personnes aux capacités et profils différents peuvent-elles l’utiliser ? |
| Transparence | Les hypothèses et le comportement sont-ils compréhensibles ? |
| Responsabilité | Une personne est-elle responsable du changement accepté ? |

### Relier un préjudice à une atténuation

| Préjudice possible | Atténuation utile |
| --- | --- |
| Logique incorrecte ou inventée | Tests, vérification des API et cas limites |
| Implémentation vulnérable | Modélisation des menaces, revue et analyse statique |
| Donnée sensible dans le contexte | Exclusions, détection de secrets et hygiène des prompts |
| Comportement biaisé ou ancien | Exigences inclusives, standards actuels et tests représentatifs |
| Licence ou attribution | Filtrage du code public et revue humaine de licence |
| Acceptation aveugle | Petites différences, approbation et responsabilité explicite |

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
