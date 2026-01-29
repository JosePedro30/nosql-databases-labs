/*
  Index blueprint for StayBook project
  These indexes support the most common queries used in the application
*/

db = db.getSiblingDB("staybook");

// INDEXES FOR LISTINGS COLLECTION

db.listings.createIndex(
  { price_eur: 1 },
  { name: "idx_listings_price" }
);

db.listings.createIndex(
  { accommodates: 1 },
  { name: "idx_listings_accommodates" }
);

// INDEXES FOR RESERVATIONS COLLECTION

/*
  This index is used to efficiently detect date conflicts
  when creating or validating reservations
*/
db.reservations.createIndex(
  { listingId: 1, dateFrom: 1, dateTo: 1, status: 1 },
  { name: "idx_reservation_conflict" }
);

/*
  Index to support queries by guest
*/
db.reservations.createIndex(
  { guestId: 1 },
  { name: "idx_reservation_guest" }
);

print("Index blueprint executed successfully.");
