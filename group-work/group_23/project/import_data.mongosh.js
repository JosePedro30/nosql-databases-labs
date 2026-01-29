/*
  Script to prepare database before importing data
  NOTE: Data is imported using MongoDB Compass
*/

// Explicit database selection for scripts
// Using getSiblingDB is safer than use() in non-interactive scripts
db = db.getSiblingDB("staybook");

// Optional cleanup before import
db.listings.deleteMany({});
db.reviews.deleteMany({});
db.reservations.deleteMany({});

print("Database selected and collections cleaned.");
