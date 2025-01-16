# Cache LRU (Least Recently Used)

## Description
Une implémentation d'un cache LRU (Least Recently Used) en Rust. Ce cache stocke les éléments les plus récemment utilisés et supprime automatiquement les plus anciens lorsqu'il atteint sa capacité maximale.

## Fonctionnalités
- Stockage de paires clé-valeur avec une capacité maximale configurable
- Politique de remplacement LRU
- Persistance des données sur le disque
- Opérations de base : get() et put()
- Support pour différents types de données grâce aux génériques

## Structure
Le cache utilise deux structures de données principales :
- Une `HashMap` pour un accès rapide aux valeurs par leur clé
- Un `Vec` pour maintenir l'ordre d'utilisation des éléments

## Utilisation
```rust
// Créer un nouveau cache avec une capacité de 3
let mut cache = Cache::new(3);

// Ajouter des éléments
cache.put("key1", "value1");
cache.put("key2", "value2");

// Récupérer un élément (le déplace en position "plus récemment utilisé")
let value = cache.get("key1");

// Sauvegarder le cache dans un fichier
cache.save("cache.txt");

// Charger un cache depuis un fichier
let cache = Cache::new_persistent(3, "cache.txt");
```

## Types supportés
Les types K (clé) et V (valeur) doivent implémenter les traits suivants :
- `Clone` : pour la duplication des valeurs
- `Hash` : pour utiliser K comme clé dans la HashMap
- `Eq` : pour la comparaison des clés
- `Debug` : pour l'affichage des valeurs
- `FromStr` : pour la création depuis des chaînes de caractères

## Persistance
Les données sont stockées dans un fichier texte avec une paire clé-valeur par ligne, séparées par une virgule. L'ordre LRU est préservé lors de la sauvegarde et du chargement.

## Note sur la source de temps
Dernière mise à jour : 2025-01-16T16:31:27+01:00

## License
MIT
