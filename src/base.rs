use std::collections::HashMap;
use std::hash::Hash;
use std::fmt::Debug;

/// Cache LRU utilisant HashMap pour l'accès rapide et Vec pour l'ordre LRU
#[derive(Debug)]
pub struct Cache<K, V> {
    pub(crate) capacity: usize,
    pub(crate) map: HashMap<K, V>,
    pub(crate) order: Vec<K>,
}

impl<K: Clone + Hash + Eq + Debug, V: Clone + Debug> Cache<K, V> {
    /// Crée un nouveau cache avec une capacité donnée
    pub fn new(capacity: usize) -> Self {
        Cache {
            capacity,
            map: HashMap::new(),
            order: Vec::new(),
        }
    }
}
