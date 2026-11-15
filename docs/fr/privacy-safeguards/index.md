# Configurer la confidentialité, les exclusions et les protections

Ce domaine représente **10–15 %** de l’examen. Apprenez ce que protège chaque contrôle, où il se configure et ce qu’il ne garantit pas.

## Objectifs

- Configurer les exclusions de contenu et les paramètres de l’éditeur.
- Décrire la propriété et les limites des résultats de Copilot.
- Activer le filtrage des suggestions correspondant au code public.
- Résoudre les problèmes liés aux suggestions et aux exclusions.

## Couverture officielle de l’examen

Le guide d’étude Microsoft évalue ce domaine avec les paramètres de confidentialité, les limites des sorties, les protections du code public et le diagnostic. Utilisez cette carte pour vérifier chaque objectif.

| Objectif officiel | Partie à réviser |
| --- | --- |
| Configurer les exclusions de contenu et les paramètres de l’éditeur | [Exclusions de contenu](#exclusions-de-contenu) et [Méthode de diagnostic](#méthode-de-diagnostic) |
| Décrire la propriété et les limites des résultats | [Propriété et limites des résultats](#propriété-et-limites-des-résultats) |
| Activer le filtrage des suggestions correspondant au code public | [Correspondance avec du code public](#correspondance-avec-du-code-public) |
| Résoudre les problèmes liés aux suggestions et aux exclusions | [Méthode de diagnostic](#méthode-de-diagnostic) |

## Contrôles à comprendre

### Exclusions de contenu

Les règles d’exclusion peuvent empêcher certains fichiers ou dépôts d’être utilisés comme contexte ou pour les suggestions, selon la surface Copilot et la configuration. Étudiez la portée, l’héritage, la propagation et les surfaces non prises en charge dans la documentation actuelle. Une exclusion ne remplace pas la suppression d’un secret du dépôt.

| Portée à identifier | Question type |
| --- | --- |
| Organisation ou entreprise | Qui peut définir ou remplacer la règle ? |
| Dépôt | La règle concerne-t-elle les forks et le contenu privé ? |
| Client ou éditeur | Cette surface applique-t-elle la règle localement ? |
| Motif de fichier | Le motif correspond-il au chemin attendu et à sa casse ? |
| Propagation | Quand les sessions existantes verront-elles le changement ? |

Utilisez un fichier de test sans données sensibles pour vérifier une exclusion. Ne placez jamais un vrai secret dans un prompt de diagnostic.

#### Limites, propagation et audit

Une exclusion de contenu est une protection Copilot, pas une frontière de sécurité du système de fichiers. Selon la surface, elle peut ne pas empêcher l’accès indirect à des informations sémantiques, l’accès via un serveur MCP tiers ou toutes les formes d’accès au fichier. Conservez les permissions du système, du dépôt et la gestion des secrets.

Après une modification, attendez la propagation ou rechargez le client pris en charge selon la documentation. La documentation GitHub actuelle indique un délai pouvant atteindre 30 minutes dans les IDE qui avaient déjà chargé les paramètres. Consultez les informations d’audit du dépôt ou de l’organisation lorsque le changement doit être tracé, et utilisez l’API REST prise en charge pour la gestion programmatique.

### Correspondance avec du code public

Les contrôles de filtrage peuvent aider à repérer une suggestion ressemblant à du code public. Ils ne remplacent pas la revue de licence, l’attribution ou la revue de code et ne prouvent pas que chaque résultat est original.

Selon le compte, l’organisation, l’entreprise et le produit, les suggestions correspondant au code public peuvent être bloquées ou autorisées avec des références. Lorsque ces références existent, examinez le dépôt source et la licence avant de conserver, remplacer ou attribuer le code. Le système compare la suggestion et le code environnant à un index : l’absence de correspondance ne prouve pas l’originalité.

### Propriété et limites des résultats

Un résultat généré peut nécessiter une modification humaine. Son traitement juridique dépend du résultat, de la juridiction, de la licence et de la politique de l’organisation. Ne présentez pas un résultat comme automatiquement original, sûr ou correct.

Propriété, licence, confidentialité et responsabilité sont des questions distinctes. Vérifiez les conditions GitHub applicables, la politique de l’organisation, la licence du projet et la juridiction, puis conservez une revue humaine du résultat accepté.

## Méthode de diagnostic

1. Confirmer le compte, le plan, le dépôt, l’organisation et l’éditeur.
2. Vérifier si une politique ou une exclusion concerne le fichier, le langage ou la surface utilisée.
3. Recharger ou redémarrer le client lorsque la documentation indique une propagation.
4. Comparer avec un fichier de test minimal et sans données sensibles.
5. Documenter le paramètre effectif et transmettre des diagnostics sans copier de code privé dans une requête.

## Liste de vérification

- [ ] Localiser les exclusions au bon niveau d’administration.
- [ ] Expliquer la différence entre une exclusion et la suppression d’un secret.
- [ ] Expliquer ce que le filtrage du code public peut et ne peut pas prouver.
- [ ] Diagnostiquer une suggestion absente sans exposer de code privé.
- [ ] Revoir les paramètres après un changement de produit ou de politique.

## Références officielles

- [Guide d’étude GH-300](https://learn.microsoft.com/fr-fr/credentials/certifications/resources/study-guides/gh-300)
- [Configurer les exclusions de contenu](https://docs.github.com/fr/copilot/how-tos/configure-content-exclusion)
- [Plans et fonctionnalités Copilot](https://docs.github.com/fr/copilot/get-started/plans)
- [GitHub Trust Center](https://github.com/trust-center)
