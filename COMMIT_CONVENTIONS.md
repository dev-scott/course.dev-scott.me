# Conventions de Commit & Guide d'Utilisation

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/) et un système automatisé de vérification des commits.

---

## 🚀 Utilisation Rapide

Pour effectuer un commit avec l'assistant interactif (recommandé) :

```bash
npm run commit
```

Cela vous guidera étape par étape pour construire un message de commit parfaitement conforme.

---

## 📝 Format d'un Message de Commit

```text
<type>(<scope optionnel>): <description courte en minuscules>

[corps optionnel explicatif]

[footer optionnel, ex: Closes #123]
```

### Exemples Valides

- `feat(auth): ajouter la connexion par Google`
- `fix(cart): corriger le calcul des frais de livraison`
- `docs: mettre a jour le fichier README`
- `refactor(ui): simplifier le composant Button`
- `chore: mettre a jour les dependances`

---

## 🏷️ Types Autorisés

- `feat` : Nouvelle fonctionnalité pour l'utilisateur
- `fix` : Correction d'un bug
- `docs` : Modifications de la documentation uniquement
- `style` : Changements n'affectant pas le sens du code (espaces, formatage, point-virgule manquant)
- `refactor` : Modification du code qui ne répare pas un bug et n'ajoute pas de fonctionnalité
- `perf` : Modification du code améliorant les performances
- `test` : Ajout de tests manquants ou correction de tests existants
- `build` : Changements affectant le système de build ou les dépendances externes (npm, webpack)
- `ci` : Modifications des fichiers et scripts de configuration CI (GitHub Actions, etc.)
- `chore` : Autres tâches ne modifiant pas les fichiers src ou de test
- `revert` : Annulation d'un commit précédent

---

## 🛡️ Vérifications Automatiques (Git Hooks)

Lors de chaque commit, le système vérifie automatiquement :

1. **Formatage & Linting** (`pre-commit`) :
   - ESLint corrige automatiquement le code.
   - Prettier formate le code.
   - TypeScript vérifie qu'il n'y a pas d'erreurs de type (`tsc --noEmit`).
2. **Format du message de commit** (`commit-msg`) :
   - Verification par Commitlint. Si le message n'est pas conforme, le commit est **bloqué**.
