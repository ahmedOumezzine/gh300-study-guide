# Configurer la confidentialité, les exclusions et les protections

Ce domaine représente **10–15 %** de l’examen. Apprenez ce que protège chaque contrôle, où il se configure et ce qu’il ne garantit pas.

## Objectifs

- Configurer les exclusions de contenu et les paramètres de l’éditeur.
- Décrire la propriété et les limites des résultats de Copilot.
- Activer le filtrage des suggestions correspondant au code public.
- Résoudre les problèmes liés aux suggestions et aux exclusions.

## Contrôles à comprendre

### Exclusions de contenu

Les règles d’exclusion peuvent empêcher certains fichiers ou dépôts d’être utilisés comme contexte ou pour les suggestions, selon la surface Copilot et la configuration. Étudiez la portée, l’héritage, la propagation et les surfaces non prises en charge dans la documentation actuelle. Une exclusion ne remplace pas la suppression d’un secret du dépôt.

### Correspondance avec du code public

Les contrôles de filtrage peuvent aider à repérer une suggestion ressemblant à du code public. Ils ne remplacent pas la revue de licence, l’attribution ou la revue de code et ne prouvent pas que chaque résultat est original.

### Propriété et limites des résultats

Un résultat généré peut nécessiter une modification humaine. Son traitement juridique dépend du résultat, de la juridiction, de la licence et de la politique de l’organisation. Ne présentez pas un résultat comme automatiquement original, sûr ou correct.

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
