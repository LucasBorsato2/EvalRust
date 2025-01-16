use eval_lru_cache::{Cache, CacheOperations};
use std::fs;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_cache_creation() {
        let _cache: Cache<i32, String> = Cache::new(2);
        let _cache_zero: Cache<i32, String> = Cache::new(0);
        let _cache_large: Cache<i32, String> = Cache::new(1000);
    }

    #[test]
    fn test_basic_operations() {
        let mut cache: Cache<i32, String> = Cache::new(2);
        cache.put(1, "one".to_string());
        assert_eq!(cache.get(&1), Some(&"one".to_string()));
        assert_eq!(cache.get(&2), None);
    }

    #[test]
    fn test_capacity_and_eviction() {
        let mut cache: Cache<i32, String> = Cache::new(2);
        cache.put(1, "one".to_string());
        cache.put(2, "two".to_string());
        cache.put(3, "three".to_string());
        assert_eq!(cache.get(&1), None);
        assert_eq!(cache.get(&2), Some(&"two".to_string()));
        assert_eq!(cache.get(&3), Some(&"three".to_string()));
    }

    #[test]
    fn test_lru_order_updates() {
        let mut cache: Cache<i32, String> = Cache::new(2);
        cache.put(1, "one".to_string());
        cache.put(2, "two".to_string());
        cache.get(&1);
        cache.put(3, "three".to_string());
        assert_eq!(cache.get(&1), Some(&"one".to_string()));
        assert_eq!(cache.get(&2), None);
        assert_eq!(cache.get(&3), Some(&"three".to_string()));
    }

    #[test]
    fn test_complex_sequence() {
        let mut cache: Cache<i32, String> = Cache::new(2);
        cache.put(1, "one".to_string());
        cache.put(2, "two".to_string());
        cache.get(&1);
        cache.put(3, "three".to_string());
        cache.put(4, "four".to_string());
        assert_eq!(cache.get(&1), None);
        assert_eq!(cache.get(&2), None);
        assert_eq!(cache.get(&3), Some(&"three".to_string()));
        assert_eq!(cache.get(&4), Some(&"four".to_string()));
    }

    #[test]
    fn test_edge_cases() {
        // Test de mise à jour d'une clé existante
        let mut cache: Cache<i32, String> = Cache::new(1);
        cache.put(1, "one".to_string());
        cache.put(1, "uno".to_string());
        assert_eq!(cache.get(&1), Some(&"uno".to_string()));

        // Test avec capacité zéro
        let mut cache_zero: Cache<i32, String> = Cache::new(0);
        cache_zero.put(1, "one".to_string());
        assert_eq!(cache_zero.get(&1), None);
    }

    #[test]
    fn test_persistence() {
        let filename = "test_cache.txt";
        {
            let mut cache: Cache<String, i32> = Cache::new(2);
            cache.put("one".to_string(), 1);
            cache.put("two".to_string(), 2);
            cache.save(filename).unwrap();
        }

        let mut loaded_cache: Cache<String, i32> = Cache::new_persistent(2, filename).unwrap();
        assert_eq!(loaded_cache.get(&"one".to_string()), Some(&1));
        assert_eq!(loaded_cache.get(&"two".to_string()), Some(&2));
        
        fs::remove_file(filename).unwrap();
    }

    #[test]
    fn test_persistence_error_handling() {
        let filename = "nonexistent/test_cache.txt";
        let result: Result<Cache<String, i32>, _> = Cache::new_persistent(2, filename);
        assert!(result.is_ok());
        
        let mut cache: Cache<String, i32> = result.unwrap();
        assert_eq!(cache.get(&"one".to_string()), None);
    }
}