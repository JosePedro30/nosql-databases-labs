/*
  Normalize listing prices
  Converts price from string to numeric value in euros
*/

db = db.getSiblingDB("staybook");

db.listings.updateMany(
  { price: { $exists: true } },
  [
    {
      $set: {
        // Remove currency symbol and thousand separators
        price_clean: {
          $replaceAll: {
            input: {
              $replaceAll: {
                input: "$price",
                find: "€",
                replacement: ""
              }
            },
            find: ",",
            replacement: ""
          }
        }
      }
    },
    {
      $set: {
        // Use double to preserve cents (e.g. 99.99)
        price_eur: { $toDouble: "$price_clean" }
      }
    },
    {
      $unset: "price_clean"
    }
  ]
);

print("Price normalization completed.");
