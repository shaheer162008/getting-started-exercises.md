// Define an array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Define the show_magicians function
function show_magicians(magicianArray) {
    for (var _i = 0, magicianArray_1 = magicianArray; _i < magicianArray_1.length; _i++) {
        var magician = magicianArray_1[_i];
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "the Great " + magicianArray[i];
    }
}
// Call make_great to modify the magicians array
make_great(magicians);
// Call show_magicians to see the modified list
show_magicians(magicians);
