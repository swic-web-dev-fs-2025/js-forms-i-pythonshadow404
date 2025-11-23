// Object Property Access: Dot vs Bracket Notation

// Bracket notation ([]) is like looking up which key to use.

const car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
  "fuel-type": "gasoline",
};

// Bracket notation - useful for dynamic property names or special character
console.info(car["fuel-type"]);
console.info(car.make);
