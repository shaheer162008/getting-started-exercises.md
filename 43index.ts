// Define an array of magician's names
const magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Define the show_magicians function
function show_magicians(magicianArray) {
  for (const magician of magicianArray) {
    console.log(magician);
  }
}

// Define the make_great function
function make_great(magicianArray) {
  const modifiedMagicians = [];
  for (let i = 0; i < magicianArray.length; i++) {
    modifiedMagicians[i] = "the Great " + magicianArray[i];
  }
  return modifiedMagicians;
}

// Create a copy of the magicians array and call make_great to modify it
const modifiedMagicians = make_great([...magicians]);

// Call show_magicians to display the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
