// Array of travel destinations in a non-alphabetical order
let travelDestinations = ["Tokyo", "Paris", "New York", "Santorini", "Bali"];

// Print the original order of the array
console.log("Original Order:");
console.log(travelDestinations);

// Print the array in alphabetical order without modifying it
console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort());

// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(travelDestinations);

// Print the array in reverse alphabetical order without modifying it
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort().reverse());

// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(travelDestinations);

// Reverse the order of the original list
travelDestinations.reverse();

// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(travelDestinations);

// Reverse the order of the list again to get back to the original order
travelDestinations.reverse();

// Print the array to show it's back to its original order
console.log("\nOriginal Order (restored):");
console.log(travelDestinations);

// Sort the array to store it in alphabetical order
travelDestinations.sort();

// Print the array to show that its order has been changed
console.log("\nAlphabetical Order (sorted):");
console.log(travelDestinations);

// Sort the array to store it in reverse alphabetical order
travelDestinations.sort().reverse();

// Print the array to show that its order has been changed to reverse alphabetical
console.log("\nReverse Alphabetical Order (sorted in reverse):");
console.log(travelDestinations);
