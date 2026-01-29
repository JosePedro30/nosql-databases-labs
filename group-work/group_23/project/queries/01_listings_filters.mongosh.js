/*
  Example query to filter listings by price range
*/

db = db.getSiblingDB("staybook");

db.listings.aggregate([
  {
    // Ensure price normalization has been executed
    $match: {
      price_eur: { $exists: true }
    }
  },
  {
    $match: {
      price_eur: { $gte: 50, $lte: 150 }
    }
  },
  {
    $project: {
      name: 1,
      price_eur: 1,
      accommodates: 1
    }
  }
]);
