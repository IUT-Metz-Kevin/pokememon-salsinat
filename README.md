# Projet noté sur JavaScript - PokeMemon Game

PokeMemon Game est un jeu de mémoire où l'objectif est de trouver les pokemons par paire pour les capturer.

## Capacités du jeu

- Le jeu de mémo a une capacité de 3 lignes et 4 colonnes.
- Il y a donc 6 paires de pokemons à trouver.

## Fonctionnalités à développer

### Récupération de la liste des pokemons

- Avec `fetch`, récupérez la liste des pokemons de manière asynchrone, l'url sera celui de votre liveserver.
  - `http://localhost:5500/data/pokemon.json`
- Vous n'êtes pas obligé de commencer par cette étape et si vous le souhaitez travailler sur les autres fonctionnalités en partant d'une donnée locale dans le fichier `main.js` comme :

```ts
const pairOfPokemonIds = ["pikachu", "pikachu", "charmander", "charmander"];
```

### Boucle principale du jeu

- Le joueur clique sur un buisson.
- Le buisson se cache et affiche un pokemon.
- Le joueur choisi un deuxième buisson.
- Un deuxieme pokemon est affiché.
  - Si les deux pokemons sont identiques :
    - On affiche une pokeball pour indiquer la capture.
    - Le pokemon est affiché dans la liste des pokemons capturés sur la gauche.
  - Si les deux pokemons sont différents :
    - Après quelques secondes, on cache les pokemons et on re-affiche les buissons.
    - Tant que les pokemons ne sont pas cachées, le joueur ne peut pas cliquer sur d'autres buissons.

### Disposition aléatoire des pokemons

Quelque soit la façon dont vous allez gérer cette partie, on doit pouvoir constater que les pokemons ne sont pas toujours au même endroit quand on commence une partie en rechargeant la page ou en cliquant sur le bouton rejouer.

### Rejouer

Quand le joueur a capturé tous les pokemons, il peut rejouer une nouvelle partie s'il le souhaite. Rejouer va :

- Réinitialiser le nombre de coups pour finir la partie (pas le record).
- Remettre tous les buissons visibles.
- Enlever tous les pokemons.
- Relancer votre système de disposition aléatoire des pokemons.

### Statistiques

- Quand le joueur affiche une paire de pokemons, que cela soit juste ou non, on comptabilise 1 coup.
- Entre différentes parties, on retient le record du nombre de coups minimum pour finir le jeu. (Au minimum nous pouvons finir le jeu en 6 coups).
- Ces deux statistiques sont affichées à l'endroit prévu dans le code HTML.

### Animation

Vous avez vous quelques animations sur les buissons. Ajoutez des animations lorsque :

- Un pokemon s'affiche
- Une pokeball s'affiche
- Un pokemon est ajouté à la liste des pokemons capturés

Ce qui a été utilisé est la librairie [`animate.css`](https://animate.style/).
Vous n'êtes autorisés à ajouter les animations qu'[avec l'aide de JavaScript](https://animate.style/#javascript). Ce n'est que l'ajout de classes. Lisez bien la documentation sur son fonctionnement.

### Persistance des données du jeu

En utilisant l'api [`localStorage`](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage), faites en sorte de que si on recharge la page, on puisse :

- Retrouver notre record
- Reprendre notre partie en cours

### Fonctionnalité avancée : Grille dynamique de jeu en fonction du nombre de pokemons

- Nous allons permettre au joueur de choisir le nombre de pokemons dans le jeu.\
  **Le nombre de pokemons est forcément paire, minimum 4 et maximum 12.**
  _Le maximum dépend du nombre de pokemons dans la data que vous récupérez dans `data/pokemon.js`._

- Vous pouvez manipuler le fichier HTML pour cet exercice

- Utilisez un slider HTML (ou à la limite un select) pour la configuration du nombre de pokemons dans la grille de jeu.

- Vous devez [configurer les propriétés de votre slider](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/range) avec le bon min, max et step avec JavaScript.

- Vous devez vérifier à la soumission du formulaire que le nombre du slider soit correct. N'oubliez pas `event.preventDefault();` pour que la page ne se recharge pas lors de la soumission du formulaire.

- Votre grille doit se générer dynamiquement avec JavaScript. **Vous pouvez utiliser les [`<template` HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Element/template).** pour générer une `<div class="box">`

## Notes

- Réfléchissez à la structure de vos données

  - Comment allez vous stocker vos statistiques
  - Comment allez vous faire le lien entre un pokemon et ses deux positions dans la grille de jeu
  - Comment allez vous gérer la disposition aléatoire
  - Allez-y étape par étape. N'hésitez pas à réecrire votre code si besoin. Jeter du code n'est pas une mauvaise chose !

- Dans la mesure de vos connaissances actuelles, réfléchissez au découplage, en faisant des modules indépendants et autonome, vous pouvez plus facilement travailler sur une petite partie du projet et ne pas essayer de tout faire en même temps.

- Vous n'êtes pas obligé de faire les fonctionnalités dans l'ordre. A vous de vous organiser et de ne pas essayer de tout faire en même temps.

- J'autorise exceptionnellement la modification du fichier HTML si vous en avez vraiment besoin. Cependant le projet peut se faire uniquement avec du JavaScript.

- N'hésitez pas à faire du pair programming, c'est à dire :

  - Travailler ensemble sur un même PC.
  - Ou avec LiveShare de VSCode.
  - Vous pouvez bien sûr travailler chacun de votre côté, cependant vous êtes plus efficace à deux sur un problème à résoudre que tout seul, très souvent :) Cela dépendra bien sûr de vos affinités à travailler ensemble et à communiquer efficacement

- Faites des commits réguliers ! Plus vos commits sont petits avec une description compréhensible, plus il est facile de comprendre ce que vous avez fait, et surtout cela vous force à découper vos tâche en plus petites tâches !
