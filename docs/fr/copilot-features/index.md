# Utiliser les fonctionnalités de GitHub Copilot

Ce domaine est le plus important avec **25–30 %** de l’examen. Le guide officiel regroupe l’IDE, le CLI, les capacités et la gestion de l’organisation dans un seul domaine.

## Objectifs

- Activer Copilot dans l’IDE et le déclencher avec les suggestions inline, le chat, le CLI et le mode Agent.
- Configurer les exclusions de contenu pour des fichiers ou dépôts précis lorsque la surface le permet.
- Installer et utiliser Copilot CLI en interaction ou en session, notamment pour les scripts et les fichiers.
- Utiliser Agent Mode, Copilot Edits, MCP, les sessions Agent, les sous-agents, la revue de code, Spaces, Spark, les résumés de pull request et les fichiers d’instructions.
- Comprendre les limites, options, commandes, participants, variables, retours et fichiers de requêtes réutilisables du chat.
- Reconnaître les politiques globales de l’organisation, les politiques de revue de code, les événements d’audit et les surfaces de gestion des abonnements.

## Couverture officielle de l’examen

Le guide d’étude Microsoft évalue ce domaine à travers quatre groupes fonctionnels. Utilisez cette carte pour vérifier chaque objectif officiel.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Activer Copilot dans l’IDE et déclencher les suggestions inline, le chat, le CLI et le mode Agent | [Flux de travail dans l’IDE](#flux-de-travail-dans-lide) |
| Configurer les exclusions de contenu pour des fichiers ou dépôts précis | [Flux de travail dans l’IDE](#flux-de-travail-dans-lide) et le [domaine confidentialité](../privacy-safeguards/) |
| Définir, installer et utiliser Copilot CLI ; comprendre les commandes, sessions, scripts et fichiers | [Flux de travail avec le CLI](#flux-de-travail-avec-le-cli) et [Installation et portée du CLI](#installation-et-portée-du-cli) |
| Utiliser Agent Mode, Copilot Edits, MCP, les sessions Agent, les sous-agents, la revue de code, Spaces, Spark, les résumés de pull request et les fichiers d’instructions | [Capacités et gestion de l’organisation](#capacités-et-gestion-de-lorganisation) |
| Comprendre les limites, options, retours, commandes et fichiers de requêtes réutilisables du chat | [Vocabulaire du chat](#vocabulaire-du-chat) |
| Gérer les politiques, les politiques de revue de code, les événements d’audit et les abonnements via l’API REST | [Contrôles de l’organisation](#contrôles-de-lorganisation) |

## Flux de travail dans l’IDE

Commencez par l’interaction la plus petite utile. Les suggestions inline conviennent au code local ; le chat convient aux explications, comparaisons et questions multi-fichiers. Le mode Agent peut planifier et exécuter une tâche plus large : relisez son plan, ses demandes d’outils et sa différence avant toute acceptation.

Pour améliorer un résultat, ajoutez du contexte pertinent : fichier ou symbole ciblé, comportement attendu, tests, version d’API et contraintes de sécurité.

### Vocabulaire du chat

| Mécanisme | Utilisation |
| --- | --- |
| Commande slash | Action répétable : expliquer, corriger, tester ou documenter |
| Participant | Source spécialisée, comme l’espace de travail ou le terminal |
| Variable | Fichier, symbole ou autre contexte explicite |
| Fichier d’instructions | Convention persistante du dépôt ou d’un chemin |

Les raccourcis varient selon l’éditeur et le système. Pratiquez les commandes affichées par votre client actuel : accepter, refuser, parcourir les propositions, ouvrir le chat et afficher plusieurs résultats.

## Flux de travail avec le CLI

Consultez la [documentation actuelle de Copilot CLI](https://docs.github.com/fr/copilot/github-copilot-in-the-cli) pour l’installation et la syntaxe. Pour l’examen, distinguez une session interactive d’une requête utilisée dans l’automatisation et vérifiez les décisions de confiance et d’autorisation avant de créer des fichiers ou d’exécuter des commandes.

| Flux | Contrôle à vérifier |
| --- | --- |
| Session interactive | Confiance du dossier, plan, autorisations et fichiers touchés |
| Requête programmée | Code retour, entrées, journaux, secrets et permissions CI |
| Génération de script | Sécurité shell, guillemets, portabilité et simulation |
| Gestion de fichiers | Portée, différence produite et plan de retour arrière |

Ne confondez pas le CLI agentique actuel avec les anciennes extensions GitHub CLI. Identifiez le produit et le contexte de version avant de répondre.

### Installation et portée du CLI

GitHub Copilot CLI est une interface de terminal pour poser des questions, écrire et déboguer du code et interagir avec GitHub. Pour une installation actuelle, utilisez le démarrage rapide et la référence des commandes officielles plutôt que de mémoriser une commande issue d’une ancienne version :

1. Confirmer que le compte, le plan, la politique de l’organisation et le système sont compatibles avec le CLI.
2. Installer la version actuelle du CLI et s’authentifier avec le compte GitHub prévu.
3. Commencer dans un dépôt temporaire et examiner les demandes de confiance et d’autorisation des outils.
4. Pratiquer une session interactive et une requête destinée à l’automatisation.
5. Vérifier les scripts, fichiers modifiés, codes retour, journaux et secrets avant de réutiliser le résultat.

La [documentation officielle du CLI](https://docs.github.com/fr/copilot/how-tos/copilot-cli) fournit les étapes d’installation, la référence des commandes, les raccourcis, le fonctionnement des sessions et les contrôles d’autorisation. Ces détails peuvent évoluer indépendamment des objectifs de l’examen.

## Capacités et gestion de l’organisation

Une fonctionnalité peut exister dans le produit tout en étant indisponible à cause du plan, d’une politique, du dépôt, de l’éditeur ou d’un déploiement progressif. Examinez la politique effective, la portée et les traces d’audit avant de diagnostiquer une fonctionnalité manquante.

### Contrôles de l'organisation

Lorsqu’un scénario demande pourquoi une fonctionnalité est indisponible ou comment un administrateur doit la gérer, identifiez la portée et les preuves avant toute modification :

| Zone de contrôle | Élément à identifier |
| --- | --- |
| Disponibilité des fonctionnalités | Si l’entreprise ou l’organisation autorise la fonctionnalité dans les IDE pris en charge et sur github.com |
| Politique de revue de code | Si Copilot Code Review est activé et quelles normes ou instructions s’appliquent |
| Preuves d’audit | Quels événements d’audit enregistrent la modification administrative ou d’abonnement |
| Gestion des abonnements | Quelle opération de l’API REST GitHub et quelle permission sont appropriées |
| Portée effective | Quelle configuration d’entreprise, d’organisation, de dépôt, d’utilisateur, de client ou de déploiement s’applique |

N’inférez pas un plan ou une permission à partir du nom d’une fonctionnalité. Vérifiez la [documentation actuelle des plans et fonctionnalités](https://docs.github.com/fr/copilot/get-started/plans) et la politique applicable.

## Liste de vérification

- [ ] Activer Copilot dans un IDE et vérifier le compte actif.
- [ ] Comparer une suggestion inline, une question de chat et une tâche Agent.
- [ ] Exécuter une tâche CLI interactive et noter les fichiers et commandes utilisés.
- [ ] Localiser les contrôles d’organisation pour les fonctionnalités et la revue de code.
- [ ] Expliquer comment un fichier d’instructions rend les réponses plus constantes.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Documentation GitHub Copilot](https://docs.github.com/fr/copilot)
- [Plans et fonctionnalités Copilot](https://docs.github.com/fr/copilot/get-started/plans)
- [À propos de GitHub Copilot CLI](https://docs.github.com/fr/copilot/github-copilot-in-the-cli)
