use std::hash::Hash;
use crate::Cache;

/// Opérations du cache LRU
pub trait CacheOperations<K, V> {
    /// Récupère une valeur et la marque comme récemment utilisée
    fn get(&mut self, key: &K) -> Option<&V>;

    /// Ajoute ou met à jour une valeur, supprime l'élément LRU si nécessaire
    fn put(&mut self, key: K, value: V);
}

impl<K: Clone + Hash + Eq, V: Clone> CacheOperations<K, V> for Cache<K, V> {
    fn get(&mut self, key: &K) -> Option<&V> {
        if let Some(value) = self.map.get(key) {
            // Mise à jour de l'ordre LRU
            if let Some(pos) = self.order.iter().position(|k| k == key) {
                self.order.remove(pos);
                self.order.push(key.clone());
            }
            Some(value)
        } else {
            None
        }
    }

    fn put(&mut self, key: K, value: V) {
        // Si la clé existe déjà
        if self.map.contains_key(&key) {
            self.map.insert(key.clone(), value);
            if let Some(pos) = self.order.iter().position(|k| k == &key) {
                self.order.remove(pos);
                self.order.push(key);
            }
            return;
        }

        // Si le cache est plein et non vide, supprimer l'élément le plus ancien
        if self.map.len() >= self.capacity && !self.order.is_empty() && self.capacity > 0 {
            if let Some(old_key) = self.order.first().cloned() {
                self.map.remove(&old_key);
                self.order.remove(0);
            }
        }

        // Ajouter le nouvel élément seulement si la capacité n'est pas nulle
        if self.capacity > 0 {
            self.map.insert(key.clone(), value);
            self.order.push(key);
        }
    }
}
