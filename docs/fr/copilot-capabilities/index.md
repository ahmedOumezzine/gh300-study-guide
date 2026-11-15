# Capacités et politiques de l’organisation

Le guide officiel place ces sujets dans **Utiliser les fonctionnalités de GitHub Copilot (25–30 %)**. Cette page sépare les capacités avancées et la gouvernance pour faciliter la révision ; elle ne crée pas un septième domaine d’examen.

## Couverture officielle de l’examen

Cette page complémentaire couvre les objectifs officiels liés aux capacités et à la gestion de l’organisation. Ils restent inclus dans **Utiliser les fonctionnalités de GitHub Copilot (25–30 %)**.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Utiliser Agent Mode, Copilot Edits et MCP ; gérer les sessions Agent et déléguer aux sous-agents | [Modes d’interaction](#modes-dinteraction) et [Model Context Protocol](#model-context-protocol-mcp) |
| Utiliser Copilot pour la revue de code et l’assistance au développement | [Revue de code et pull requests](#revue-de-code-et-pull-requests) |
| Utiliser Spaces, Spark, les résumés de pull request et les standards de revue via des fichiers d’instructions | [Spaces, Spark et instructions réutilisables](#spaces-spark-et-instructions-réutilisables) |
| Comprendre les limites, options, retours, commandes et fichiers de requêtes réutilisables du chat | [Contrôles du chat et rétroaction](#contrôles-du-chat-et-rétroaction) |
| Configurer les politiques globales, les politiques de revue de code et la disponibilité dans les IDE et sur github.com | [Plans et gestion de l’organisation](#plans-et-gestion-de-lorganisation) |
| Utiliser les événements d’audit et gérer les abonnements avec l’API REST | [Plans et gestion de l’organisation](#plans-et-gestion-de-lorganisation) |

## Modes d’interaction

### Mode Agent

Le mode Agent convient à une tâche en plusieurs étapes : Copilot inspecte le contexte, propose un plan, utilise des outils et itère. Le développeur reste responsable : il relit le plan, autorise les actions sensibles, inspecte la différence et exécute les contrôles du projet.

### Copilot Edits

Copilot Edits se concentre sur un ensemble de fichiers et une modification explicite. Utilisez-le pour obtenir une différence multi-fichier bornée et révisable plutôt qu'une exploration autonome du dépôt. Confirmez les fichiers ciblés, relisez chaque modification et exécutez les contrôles avant de l'accepter.

### Mode Plan

Le mode Plan sert à analyser avant d’implémenter. Il doit faire apparaître les hypothèses, fichiers touchés et questions ouvertes. Un plan n’est pas une modification terminée.

### Sessions et sous-agents

Une grande tâche peut être divisée en sessions ou sous-tâches. Donnez à chaque intervenant un objectif étroit, limitez les outils et fichiers accessibles, puis relisez le résultat combiné pour détecter les conflits.

Dans un scénario d'examen, distinguez la session Agent qui coordonne le travail du sous-agent délégué. La délégation peut améliorer le contexte, mais elle ne transfère ni la responsabilité des permissions, ni les autorisations d'outils, ni la validation de la différence finale.

## Model Context Protocol (MCP)

MCP relie un client Copilot à des outils ou sources externes via un protocole standard. Distinguez la réponse du modèle du résultat d’un outil et vérifiez l’authentification, les permissions, les données accessibles et la politique de l’organisation.

Avant d’activer un serveur MCP, vérifiez son éditeur, ses outils, son chemin réseau et ses permissions d’écriture. Considérez la sortie d’un outil comme une donnée non fiable et conservez une approbation humaine pour les actions sensibles.

Notez les outils et ressources exposés par le serveur, les identifiants auxquels il peut accéder et si le client autorise la lecture, l'écriture ou l'exécution de commandes. Une réponse du modèle n'est pas un résultat d'outil vérifié.

## Revue de code et pull requests

Copilot peut expliquer une différence, signaler des défauts possibles, préparer une revue ou résumer une pull request. Il ne remplace pas le relecteur. Vérifiez les tests, la sécurité, les exigences et les standards de revue du dépôt.

Pour une revue, séparez l'assistance au développement de l'approbation : lisez les lignes modifiées, vérifiez les standards de revue personnalisables et considérez le résumé de pull request comme une aide à la navigation, pas comme une preuve de sûreté.

## Spaces, Spark et instructions réutilisables

- **Spaces :** regrouper des sources et instructions pour obtenir une réponse ancrée dans un sujet borné.
- **Spark :** consulter la documentation actuelle pour les disponibilités et les limites.
- **Fichiers d’instructions :** versionner les conventions, commandes et critères de revue.
- **Fichiers de requêtes :** conserver un modèle réutilisable avec ses entrées et critères d’acceptation.

Évitez les secrets, les données personnelles et les règles contradictoires dans ces fichiers.

## Contrôles du chat et rétroaction

Les commandes, participants, variables, modèles et contrôles de rétroaction varient selon le client. Dans un scénario d’examen, choisissez le contexte minimal et la capacité la plus sûre. En cas de mauvaise réponse, vérifiez d’abord la requête, le contexte, le compte et la politique.

## Plans et gestion de l’organisation

Les offres Individuel, Business et Enterprise peuvent différer par les fonctionnalités, les contrôles d’administration et le traitement des données. Consultez la [documentation des plans](https://docs.github.com/fr/copilot/get-started/plans) et la politique effective.

Les administrateurs peuvent gérer la disponibilité, les modèles, les politiques de revue, les événements d’audit et les abonnements. La portée est importante : entreprise, organisation, dépôt, utilisateur et client peuvent tous modifier le résultat effectif.

Lorsqu'un objectif demande une opération REST ou un événement d'audit, identifiez l'organisation ou l'entreprise cible, la permission requise, l'effet de l'opération et la preuve à conserver. N'inférez pas une route API ou une permission de mémoire : utilisez la documentation GitHub actuelle.

## Tableau de révision

| Scénario | Première question à poser |
| --- | --- |
| Fonctionnalité absente | Quel compte, plan, politique, dépôt, client et déploiement s’appliquent ? |
| L’Agent veut lancer une commande | Quelle commande, quelles données et quelle approbation ? |
| Revue incohérente | Les instructions et standards du dépôt sont-ils actuels ? |
| Serveur MCP proposé | Quels outils, identifiants, données et droits d’écriture expose-t-il ? |

## Liste de vérification

- [ ] Comparer les modes Plan, Edit et Agent sur une même demande.
- [ ] Inspecter les outils et droits d’écriture d’un serveur MCP.
- [ ] Créer un petit fichier d’instructions et vérifier son effet.
- [ ] Trouver la politique effective aux niveaux organisation et dépôt.
- [ ] Expliquer pourquoi une revue Copilot ne remplace pas l’approbation humaine.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Documentation GitHub Copilot](https://docs.github.com/fr/copilot)
- [Gérer les politiques Copilot](https://docs.github.com/fr/copilot/managing-copilot)
- [Plans et fonctionnalités Copilot](https://docs.github.com/fr/copilot/get-started/plans)
- [GitHub Copilot Fundamentals Part 2](https://learn.microsoft.com/fr-fr/training/paths/gh-copilot-2/)
