# Comprendre les données et l’architecture de Copilot

Ce domaine représente **10–15 %** de l’examen. Construisez un modèle conceptuel de la préparation, du filtrage et du retour d’une suggestion, sans supposer que toutes les surfaces Copilot utilisent exactement le même contexte.

## Objectifs

- Expliquer l’utilisation, le flux et le partage des données.
- Décrire le traitement de l’entrée et la construction de la requête.
- Expliquer le filtrage par proxy et le post-traitement.
- Visualiser le cycle de vie d’une suggestion de code.
- Décrire les limites des grands modèles de langage et de Copilot.

## Modèle pratique d’une requête

1. **Intention et contexte** — le client rassemble les fichiers, symboles, historique ou instructions autorisés.
2. **Construction de la requête** — la demande est combinée au contexte sélectionné et aux contraintes du système.
3. **Filtrage et routage** — les contrôles de politique, de confidentialité et de sécurité peuvent modifier ce qui est envoyé ou retourné.
4. **Génération** — le modèle produit une réponse probabiliste ; ce n’est pas le résultat d’une exécution.
5. **Post-traitement** — des contrôles de sûreté, de politique ou de correspondance peuvent s’appliquer.
6. **Décision humaine** — le développeur relit, teste, modifie, accepte ou rejette le résultat.

Ce schéma sert à réviser. Pour un détail d’implémentation, utilisez la documentation officielle de la fonctionnalité concernée.

## Limites à reconnaître

Un modèle ne connaît pas automatiquement toute l’architecture, l’état de production ni les règles métier implicites. Le contexte peut être incomplet et le code peut compiler tout en violant une exigence de sécurité ou de domaine.

## Liste de vérification

- [ ] Dessiner le cycle d’une complétion inline et d’une requête de chat.
- [ ] Identifier le contexte explicite, inféré, récupéré ou indisponible.
- [ ] Repérer les endroits où la confidentialité ou la politique peut changer le résultat.
- [ ] Expliquer pourquoi une réponse du modèle ne prouve pas que le code fonctionne.
- [ ] Vérifier les affirmations actuelles dans le Trust Center.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Gestion des données par GitHub Copilot](https://github.com/github/copilot-docs/blob/main/docs/how-tos/data-handling.md)
- [Documentation GitHub Copilot](https://docs.github.com/fr/copilot)
- [GitHub Trust Center](https://github.com/trust-center)
