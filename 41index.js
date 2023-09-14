// Define an array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Define the show_magicians function
function show_magicians(magicianArray) {
    for (var _i = 0, magicianArray_1 = magicianArray; _i < magicianArray_1.length; _i++) {
        var magician = magicianArray_1[_i];
        console.log(magician);
    }
}
// Call the show_magicians function and pass in the array
show_magicians(magicians);
