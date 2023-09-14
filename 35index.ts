// Store the names of animals with a common characteristic in an array
const animals = ['Dog', 'Cat', 'Rabbit'];

// Use a for loop to print the name of each animal
console.log("Common characteristic: These animals make great pets.");
console.log("\nNames of animals with a common characteristic:");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Modify the for loop to print a statement about each animal
console.log("\nStatements about these animals:");
for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

// Add a line at the end to emphasize their common characteristic
console.log("\nAny of these animals would make a great pet!");
