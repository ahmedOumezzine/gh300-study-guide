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