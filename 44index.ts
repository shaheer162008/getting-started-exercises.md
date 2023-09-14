function makeSandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function with different numbers of arguments
  makeSandwich('Turkey', 'Cheese', 'Lettuce');
  makeSandwich('Ham', 'Swiss Cheese');
  makeSandwich('Peanut Butter', 'Jelly');
  