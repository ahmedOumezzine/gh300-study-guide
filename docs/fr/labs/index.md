# Ateliers pratiques

## Comparer deux requêtes

**Objectif :** Observer l’effet du contexte et des critères d’acceptation sur la réponse de Copilot. Utilisez un espace de travail temporaire, un éditeur où Copilot Chat est activé et une installation locale de Node.js.

1. Ouvrez une nouvelle conversation et demandez à Copilot d’écrire une fonction qui normalise une liste d’étiquettes.
2. Ouvrez une autre conversation dans le même espace de travail. Demandez une fonction JavaScript qui supprime les espaces en début et en fin d’étiquette, convertit les étiquettes en minuscules, écarte les entrées vides et conserve la première occurrence de chaque étiquette. Demandez un exemple avec une liste vide.
3. Enregistrez la deuxième proposition dans `tags.cjs` et nommez la fonction `normalizeTags`. Ajoutez les assertions suivantes à la fin du fichier, puis exécutez `node tags.cjs`.

```js
const assert = require('node:assert/strict')
assert.deepEqual(normalizeTags([' JavaScript ', '', 'javascript', ' Node ']), ['javascript', 'node'])
assert.deepEqual(normalizeTags([]), [])
```

Comparez les deux propositions selon les mêmes règles. Relevez une amélioration liée au contexte ajouté et un comportement que vous avez dû vérifier. Consultez la page sur la [conception des requêtes](../prompt-engineering/).

## Ateliers Microsoft Learn

Ces modules officiels Microsoft Learn proposent des exercices guidés qui complètent les notes. Il s’agit d’activités de formation, pas de questions d’examen divulguées. Ouvrez le module pour vérifier les prérequis, la surface prise en charge et les exigences de compte actuels.

| Module ou parcours officiel | Compétences GH-300 exercées |
| --- | --- |
| [GitHub Copilot Fundamentals Part 1 of 2](https://learn.microsoft.com/en-us/training/paths/copilot) | Usage responsable, IDE, prompts, Spaces, fonctionnalités avancées et surfaces Copilot |
| [GitHub Copilot Fundamentals Part 2 of 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/) | Mode Agent, Copilot dans le cloud et serveur MCP GitHub |
| [Develop unit tests using GitHub Copilot tools](https://learn.microsoft.com/en-us/training/modules/develop-unit-tests-using-github-copilot-tools/) | Tests unitaires, cas limites, assertions et vérification |
| [Implement code improvements using GitHub Copilot tools](https://learn.microsoft.com/en-us/training/modules/implement-code-improvements-using-github-copilot-tools/) | Refactorisation, fiabilité, performance, sécurité et revue de code |
| [Ateliers techniques Microsoft](https://learn.microsoft.com/en-us/labs/) | Parcourir les ateliers actuels, dont Copilot CLI et le pair programming |

## Ateliers locaux GH-300

Les ateliers suivants sont des activités originales de ce guide. Utilisez un dépôt temporaire et ne placez jamais de secrets, de données personnelles ou de code propriétaire dans un prompt.

### 1. Comparer le contexte d’un prompt

**Compétences :** conception des prompts et du contexte.

Utilisez l’[exercice de comparaison](#comparer-deux-requêtes) ci-dessus. Enregistrez les deux résultats, appliquez les mêmes assertions et notez l’effet du contexte ajouté.

**Preuves :** deux prompts, la sortie des tests, une amélioration et un risque restant.

### 2. Revue responsable d’une sortie

**Compétences :** IA responsable.

Demandez à Copilot d’implémenter une petite fonction de validation d’entrée. Examinez les hypothèses incorrectes, les risques d’injection, les erreurs, l’accessibilité et les secrets en dur. Demandez des tests, puis écrivez vous-même au moins une assertion.

**Preuves :** checklist de revue, différence finale, résultats des tests et décision humaine d’accepter, modifier ou rejeter la suggestion.

### 3. Tracer une requête Copilot

**Compétences :** données et architecture.

Pour une demande de chat dans un IDE, dessinez le parcours depuis l’entrée et le contexte sélectionné jusqu’à la construction, au filtrage, à la réponse du modèle, au post-traitement et à la revue humaine. Marquez ce qui est explicite, inféré, récupéré ou indisponible.

**Preuves :** schéma du cycle et liste courte des hypothèses à confirmer dans la documentation actuelle.

### 4. Session Copilot CLI sûre

**Compétences :** fonctionnalités Copilot et utilisation responsable.

Dans un dépôt temporaire, utilisez la [documentation actuelle de Copilot CLI](https://docs.github.com/fr/copilot/how-tos/copilot-cli) pour lancer une session interactive. Demandez une explication du projet, un petit script et la liste des fichiers qui seraient modifiés. N’autorisez aucune commande ou écriture avant d’en comprendre la portée.

**Preuves :** objectif de session, autorisations ou refus, commandes proposées, fichiers modifiés et note de retour arrière.

### 5. Plan Agent et modification bornée

**Compétences :** Agent Mode, Copilot Edits, MCP et contrôles de revue.

Donnez à Copilot une tâche multi-fichier avec des critères d’acceptation explicites. Comparez une demande avec plan préalable et une demande Copilot Edits bornée. Si vous utilisez MCP, listez les outils et permissions du serveur avant de l’activer. Relisez la différence et exécutez les contrôles du projet.

**Preuves :** plan, fichiers sélectionnés, autorisations d’outils, différence finale et résultats de validation.

### 6. Générer des tests et trouver les cas limites

**Compétences :** productivité du développeur.

Demandez à Copilot de générer des tests unitaires et d’intégration pour une petite fonction ou un endpoint. Ajoutez les cas limites, entrées invalides, échecs et cas de sécurité oubliés. Exécutez toute la suite et vérifiez les faux positifs dans les assertions.

**Preuves :** matrice de tests, tests générés, tests ajoutés, sortie de commande et une limite de la suite générée.

### 7. Exclusions de contenu et code public

**Compétences :** confidentialité, exclusions et protections.

Dans un dépôt de test, configurez une exclusion inoffensive avec la [documentation GitHub actuelle](https://docs.github.com/fr/copilot/how-tos/configure-content-exclusion). Vérifiez le comportement dans un fichier inclus et un fichier exclu, puis rechargez le client si nécessaire. Examinez séparément le réglage de correspondance au code public et expliquez ce qu’une référence de code peut ou ne peut pas prouver.

**Preuves :** portée de l’exclusion, observation de propagation ou rechargement, résultats et décision de revue de licence. N’utilisez jamais un vrai secret comme donnée de test.

### 8. Scénario intégrateur GH-300

**Compétences :** les six domaines officiels.

Choisissez une petite demande. Écrivez un prompt avec contexte et critères d’acceptation, utilisez Copilot sur une surface, vérifiez les hypothèses de données et de politique, générez des tests, examinez les implications de code public et de confidentialité, puis préparez un résumé de pull request relu par un humain.

**Preuves :** prompt, inventaire du contexte, contrôles de politique, différence, tests, notes de sécurité et bilan de la productivité par rapport à l’effort de revue.

## Checklist de réalisation

- [ ] Utiliser un dépôt temporaire et la documentation produit actuelle.
- [ ] Noter la surface Copilot, le contexte de compte ou de plan et la date.
- [ ] Garder les secrets et données personnelles hors des prompts, fichiers, journaux et captures.
- [ ] Conserver les preuves : prompts, différences, tests, autorisations et décisions.
- [ ] Refaire l’atelier après une évolution du produit et noter ce qui est devenu obsolète.
