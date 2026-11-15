# Appliquer la conception des requêtes et du contexte

Ce domaine représente **10–15 %** de l’examen. Une bonne requête réduit l’ambiguïté : elle définit le travail, fournit le bon contexte, décrit la sortie et précise comment la vérifier.

## Objectifs

- Décrire la structure et le contexte d’une requête.
- Expliquer comment le contexte est déterminé.
- Utiliser les requêtes zero-shot et few-shot.
- Appliquer les bonnes pratiques de formulation.
- Expliquer le flux de traitement et l’usage de l’historique du chat.

## Couverture officielle de l’examen

Le guide d’étude Microsoft évalue ce domaine avec la construction de prompts efficaces et l’amélioration de leur performance. Utilisez cette carte pour vérifier chaque objectif.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Décrire la structure et le contexte d’un prompt | [Structure pratique](#structure-pratique) |
| Comprendre comment le contexte est déterminé | [Sources de contexte](#sources-de-contexte) |
| Utiliser les requêtes zero-shot et few-shot | [Stratégies](#stratégies) |
| Appliquer les bonnes pratiques de formulation | [Bonnes pratiques de formulation](#bonnes-pratiques-de-formulation) |
| Expliquer les principes, le flux de traitement et l’usage de l’historique du chat | [Flux de traitement d’un prompt](#flux-de-traitement-dun-prompt) |

## Structure pratique

```text
Objectif : que faut-il produire ou modifier ?
Contexte : quels fichiers, API, formats et contraintes comptent ?
Exemples : quel résultat ou modèle existant doit être suivi ?
Acceptation : comment vérifier le résultat ?
```

Le contexte doit être pertinent et borné. Référencez un fichier ou un symbole, ne collez que l’extrait nécessaire et indiquez les versions ou exigences non fonctionnelles.

### Cinq questions pour un bon prompt

1. **Intention :** quel résultat est attendu et pour quel public ?
2. **Contexte :** quels fichiers, symboles, exemples, API ou erreurs comptent ?
3. **Contraintes :** que faut-il conserver et quelles règles de sécurité ou performance s’appliquent ?
4. **Exemples :** quel format ou modèle existant illustre la sortie voulue ?
5. **Contrôles :** quels tests ou critères décident de l’acceptation ?

### Sources de contexte

Le contexte dépend de la surface. La complétion inline utilise généralement le code proche et l’état de l’éditeur ; le chat peut utiliser la sélection, des fichiers référencés, les instructions, l’historique et les outils pris en charge. Les fichiers ouverts ne garantissent pas que chaque ligne est pertinente.

### Flux de traitement d’un prompt

1. **Définir l’objectif.** Préciser le résultat, le public, le langage, le format et les critères de réussite.
2. **Sélectionner le contexte.** Joindre le fichier, symbole, issue, pull request, dépôt, exemple ou fichier d’instructions utile ; retirer le contenu sans rapport.
3. **Construire la demande.** Ajouter les contraintes, exemples, outils autorisés et forme de sortie attendue.
4. **Inspecter la réponse.** Vérifier les hypothèses, références, cas manquants et respect du format demandé.
5. **Itérer ou réinitialiser.** Affiner la demande pour une petite correction ou démarrer une nouvelle conversation/session lorsque l’historique n’est plus pertinent.

L’historique est un contexte utile, mais il peut conserver une hypothèse erronée. Gardez seulement l’historique utile à la tâche et rappelez les contraintes critiques lorsque la tâche change.

## Stratégies

- **Zero-shot :** demander directement lorsque la tâche est conventionnelle et claire.
- **Few-shot :** donner de petits exemples lorsque le format ou les cas limites sont importants.
- **Itérative :** commencer petit, observer le résultat, puis ajouter la contrainte manquante.
- **Vérification d’abord :** demander un plan, des hypothèses ou des tests avant l’implémentation.

L’historique apporte une continuité mais peut aussi transporter une mauvaise hypothèse. Ouvrez une conversation ciblée ou rappelez les contraintes critiques lorsque la tâche change.

### Bonnes pratiques de formulation

- Commencer par l’objectif général, puis ajouter les détails et contraintes importants.
- Donner de petits exemples représentatifs d’entrées, de sorties ou d’implémentations existantes.
- Découper une tâche complexe en demandes plus petites avec un contrôle après chaque étape.
- Éviter les références ambiguës comme « ce fichier » ou « ce code » ; nommer le symbole, le chemin ou la réponse.
- Fournir le contexte pertinent, pas tout le dépôt par défaut.
- Expérimenter et itérer au lieu de réécrire aveuglément un long prompt.
- Relire la sortie de Copilot et appliquer les pratiques normales de code, de test et de sécurité.

## Liste de vérification

- [ ] Énoncer l’objectif et le public visé.
- [ ] Identifier les fichiers ou symboles à utiliser.
- [ ] Ajouter un exemple ou un critère d’acceptation si la sortie est ambiguë.
- [ ] Demander des tests et nommer les cas limites.
- [ ] Comparer une requête courte et une requête contextualisée dans l’atelier.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Conception des requêtes](https://docs.github.com/fr/copilot/concepts/prompting-and-context/prompt-engineering)
- [Requêtes et contexte](https://docs.github.com/fr/copilot/concepts/prompting-and-context)
- [Documentation GitHub Copilot](https://docs.github.com/fr/copilot)
