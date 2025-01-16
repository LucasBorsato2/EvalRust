//! Cache LRU (Least Recently Used)
//! 
//! Implémentation d'un cache LRU avec :
//! - Stockage clé-valeur avec capacité configurable
//! - Politique d'éviction LRU
//! - Persistance sur disque
//! - Support des types génériques

pub mod base;
pub mod operations;
pub mod persistence;

pub use base::Cache;
pub use operations::CacheOperations;

// Re-export des types couramment utilisés
pub use std::io;
pub use std::str::FromStr;
pub use std::hash::Hash;
pub use std::fmt::Debug;
