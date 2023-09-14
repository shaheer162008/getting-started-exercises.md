let fruit = 'apple';
let age = 25;
let numbers = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit != 'banana');

// Tests using the lower case function
console.log("Is 'HELLO' equal to 'hello'? I predict False.");
console.log('HELLO'.toLowerCase() == 'hello');

// Numerical tests
console.log("Is age equal to 25? I predict True.");
console.log(age == 25);

console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18);

console.log("Is age less than 30? I predict True.");
console.log(age < 30);

console.log("Is age not equal to 20? I predict True.");
console.log(age != 20);

// Tests using "and" and "or" operators
console.log("Is age greater than 18 and less than 30? I predict True.");
console.log(age > 18 && age < 30);

console.log("Is age greater than 30 or less than 18? I predict True.");
console.log(age > 30 || age < 18);

// Test whether an item is in an array
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));

