const productObject = {
    name: "Laptop",
    price: 899,
    inStock: true,
};

console.info(productObject);

// Step 1: Use Object.entries() to unpack the object into an array of pairs
const arrayOfPairs = Object.entries(productObject);

console.info(arrayOfPairs);
// Object.entries convert the object to an array of pairs:
// [ [ 'name', 'Laptop' ], [ 'price', 899 ], [ 'inStock', true ] ]

// Step 2: Modify the entries (e.g., uppercase keys)
const modifiedEntries = arrayOfPairs.map(([key,value]) => [key.toUpperCase(), value]);

console.info(modifiedEntries);

// Step 3: Use Object.fromEntries() to repack the modified entries into a new object
const updatedArrayOfPairs = Object.fromEntries(modifiedEntries);

console.info(updatedArrayOfPairs);
