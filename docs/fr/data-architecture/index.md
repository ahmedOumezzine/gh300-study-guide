# Comprendre les données et l’architecture de Copilot

Ce domaine représente **10–15 %** de l’examen. Construisez un modèle conceptuel de la préparation, du filtrage et du retour d’une suggestion, sans supposer que toutes les surfaces Copilot utilisent exactement le même contexte.

## Objectifs

- Expliquer l’utilisation, le flux et le partage des données.
- Décrire le traitement de l’entrée et la construction de la requête.
- Expliquer le filtrage par proxy et le post-traitement.
- Visualiser le cycle de vie d’une suggestion de code.
- Décrire les limites des grands modèles de langage et de Copilot.

## Couverture officielle de l’examen

Le guide d’étude Microsoft évalue ce domaine avec des objectifs de traitement des données et de cycle de vie. Utilisez cette carte pour vérifier chaque sujet requis.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Expliquer l’utilisation, le flux et le partage des données | [Traitement et partage des données](#traitement-et-partage-des-données) |
| Décrire le traitement de l’entrée et la construction de la requête | [Modèle pratique d’une requête](#modèle-pratique-dune-requête) |
| Expliquer le filtrage par proxy et le post-traitement | [Filtrage et post-traitement](#filtrage-et-post-traitement) |
| Visualiser le cycle de vie d’une suggestion de code | [Points de contrôle du cycle](#points-de-contrôle-du-cycle) |
| Décrire les limites des grands modèles de langage et de Copilot | [Limites à reconnaître](#limites-à-reconnaître) |

## Modèle pratique d’une requête

1. **Intention et contexte** — le client rassemble les fichiers, symboles, historique ou instructions autorisés.
2. **Construction de la requête** — la demande est combinée au contexte sélectionné et aux contraintes du système.
3. **Filtrage et routage** — les contrôles de politique, de confidentialité et de sécurité peuvent modifier ce qui est envoyé ou retourné.
4. **Génération** — le modèle produit une réponse probabiliste ; ce n’est pas le résultat d’une exécution.
5. **Post-traitement** — des contrôles de sûreté, de politique ou de correspondance peuvent s’appliquer.
6. **Décision humaine** — le développeur relit, teste, modifie, accepte ou rejette le résultat.

Ce schéma sert à réviser. Pour un détail d’implémentation, utilisez la documentation officielle de la fonctionnalité concernée.

### Filtrage et post-traitement

Le filtrage peut intervenir avant l’envoi, pendant le routage par un service ou avant l’affichage de la réponse. Selon la surface et la politique, les contrôles peuvent limiter le contexte, appliquer des contrôles de sûreté ou d’abus, détecter des correspondances avec du code public ou désactiver une capacité. Le post-traitement peut formater la réponse et appliquer d’autres contrôles de politique ou de contenu. Un filtrage ne prouve pas que la sortie restante est correcte ou sûre.

### Traitement et partage des données

Pour un scénario de traitement des données, posez ces questions au lieu de vous fier à une affirmation générale sur Copilot :

| Question | Preuve à identifier |
| --- | --- |
| Que contient l’envoi ? | Prompt, code sélectionné, fichiers ouverts, contexte du dépôt, historique, appels d’outils et instructions système réellement utilisés |
| Où cela va-t-il ? | Client, frontière de service GitHub, fournisseur de modèle ou autre service configuré, et intégration autorisée |
| Qui peut y accéder ? | Utilisateur, administrateurs de l’organisation ou de l’entreprise, opérateurs du service et fournisseur autorisé par le plan ou la politique effective |
| Combien de temps est-ce conservé ? | Produit, plan, surface et déclarations actuelles du Trust Center ; ne pas déduire la rétention d’une autre fonctionnalité Copilot |
| Quels contrôles s’appliquent ? | Exclusions, politiques, correspondance du code public, permissions, journaux et client choisi |

La documentation officielle décrit les fenêtres de contexte comme contenant les messages, réponses Copilot, appels et résultats d’outils ainsi que les instructions système. Une longue session peut remplir le contexte disponible : certains éléments anciens peuvent être compactés ou ne plus influencer la réponse. Gardez un contexte sélectif et vérifiez le comportement actuel du client étudié.

### Le contexte varie selon la surface

| Surface | Contexte à examiner | Question de revue |
| --- | --- | --- |
| IDE | Fichiers courants ou ouverts, dépôt, code sélectionné, historique du chat et instructions | Le fichier ou l’instruction utile est-il réellement dans la portée ? |
| GitHub.com | Dépôt, issues, pull requests, code sélectionné et recherche web facultative | La recherche web est-elle activée et sa source autorisée ? |
| Terminal ou CLI | Prompt, shell ou répertoire courant, historique de session et résultats d’outils autorisés | La commande est-elle exécutée automatiquement ou doit-elle être approuvée et lancée par une personne ? |
| Copilot Spaces | Sources ajoutées à l’espace et sous-ensemble récupéré pour la réponse | Le contenu est-il pertinent, actuel et sûr à partager ? |

### Catégories de données à distinguer

| Catégorie | Exemple | Question de revue |
| --- | --- | --- |
| Entrée utilisateur | Prompt, sélection ou commande | Contient-elle un secret ou une donnée inutile ? |
| Contexte | Fichiers ouverts, instructions, historique | Est-il pertinent et autorisé ? |
| Résultat généré | Complétion, explication ou patch | Que faut-il tester ou relire ? |
| Télémétrie et administration | Usage ou audit | Qui y accède et pourquoi ? |

### Points de contrôle du cycle

| Étape | Vérification |
| --- | --- |
| Avant l’envoi | Portée, exclusions, compte et politique |
| Traitement | Construction, routage, filtrage et frontière de service |
| Avant affichage | Sûreté, correspondance, politique et post-traitement |
| Avant fusion | Tests, sécurité, licence, exigences et relecteur |

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
