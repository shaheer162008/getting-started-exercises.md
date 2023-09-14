var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    var modifiedMagicians = [];
    for (var i = 0; i < magicianArray.length; i++) {
        modifiedMagicians[i] = "the Great " + magicianArray[i];
    }
    return modifiedMagicians;
}
// Create a copy of the magicians array and call make_great to modify it
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians to display the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
