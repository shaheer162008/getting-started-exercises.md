// Define an array of magician's names
const magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Define the show_magicians function
function show_magicians(magicianArray) {
  for (const magician of magicianArray) {
    console.log(magician);
  }
}

// Call the show_magicians function and pass in the array
show_magicians(magicians);
