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
  for (let i = 0; i < magicianArray.length; i++) {
    magicianArray[i] = "the Great " + magicianArray[i];
  }
}

// Call make_great to modify the magicians array
make_great(magicians);

// Call show_magicians to see the modified list
show_magicians(magicians);
