// Store your favorite pizza names in an array
var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Use a for loop to print the name of each pizza
console.log("My favorite pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Modify the for loop to print a sentence using the name of the pizza
console.log("\nMy thoughts on each pizza:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
// Add a line at the end to express your overall love for pizza
console.log("\nI really love pizza!");
