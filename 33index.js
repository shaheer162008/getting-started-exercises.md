// Store the numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinal = void 0;
    // Use an if-else chain to determine the ordinal ending
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    // Print the result
    console.log("".concat(number).concat(ordinal));
}
