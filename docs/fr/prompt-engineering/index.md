# Appliquer la conception des requêtes et du contexte

Ce domaine représente **10–15 %** de l’examen. Une bonne requête réduit l’ambiguïté : elle définit le travail, fournit le bon contexte, décrit la sortie et précise comment la vérifier.

## Objectifs

- Décrire la structure et le contexte d’une requête.
- Expliquer comment le contexte est déterminé.
- Utiliser les requêtes zero-shot et few-shot.
- Appliquer les bonnes pratiques de formulation.
- Expliquer le flux de traitement et l’usage de l’historique du chat.

## Structure pratique

```text
Objectif : que faut-il produire ou modifier ?
Contexte : quels fichiers, API, formats et contraintes comptent ?
Exemples : quel résultat ou modèle existant doit être suivi ?
Acceptation : comment vérifier le résultat ?
```

Le contexte doit être pertinent et borné. Référencez un fichier ou un symbole, ne collez que l’extrait nécessaire et indiquez les versions ou exigences non fonctionnelles.

## Stratégies

- **Zero-shot :** demander directement lorsque la tâche est conventionnelle et claire.
- **Few-shot :** donner de petits exemples lorsque le format ou les cas limites sont importants.
- **Itérative :** commencer petit, observer le résultat, puis ajouter la contrainte manquante.
- **Vérification d’abord :** demander un plan, des hypothèses ou des tests avant l’implémentation.

L’historique apporte une continuité mais peut aussi transporter une mauvaise hypothèse. Ouvrez une conversation ciblée ou rappelez les contraintes critiques lorsque la tâche change.

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
