/*
  Seed users and guests for testing purposes
*/

db = db.getSiblingDB("staybook");

const users = [
  {
    email: "guest1@staybook.com",
    name: "Guest One",
    role: "guest",
    seed: true
  },
  {
    email: "guest2@staybook.com",
    name: "Guest Two",
    role: "guest",
    seed: true
  }
];

// Use upsert to avoid duplicate users when script is executed multiple times
users.forEach(user => {
  db.users.updateOne(
    { email: user.email },
    { $setOnInsert: user },
    { upsert: true }
  );
});

print("Users seeded successfully.");
