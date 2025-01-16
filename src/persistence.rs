use std::fs::{self, File};
use std::io::{self, BufRead, BufReader};
use std::path::Path;
use std::hash::Hash;
use std::fmt::{Debug, Display};
use std::str::FromStr;

use crate::Cache;
use crate::operations::CacheOperations;

impl<K, V> Cache<K, V>
where
    K: Clone + Hash + Eq + Display + FromStr + Debug,
    V: Clone + Display + FromStr + Debug,
{
    /// Crée un cache à partir d'un fichier (format : clé,valeur par ligne)
    pub fn new_persistent(capacity: usize, filename: &str) -> io::Result<Self> {
        let mut cache = Self::new(capacity);
        if Path::new(filename).exists() {
            let file = File::open(filename)?;
            let reader = BufReader::new(file);

            for line in reader.lines() {
                let line = line?;
                if let Some((key_str, value_str)) = line.split_once(',') {
                    if let (Ok(key), Ok(value)) = (K::from_str(key_str), V::from_str(value_str)) {
                        cache.put(key, value);
                    }
                }
            }
        }
        Ok(cache)
    }

    /// Sauvegarde le cache dans un fichier (format : clé,valeur par ligne)
    pub fn save(&self, filename: &str) -> io::Result<()> {
        let mut content = String::new();
        for key in &self.order {
            if let Some(value) = self.map.get(key) {
                content.push_str(&format!("{},{}\n", key, value));
            }
        }
        fs::write(filename, content)
    }
}
