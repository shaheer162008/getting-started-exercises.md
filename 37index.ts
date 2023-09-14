function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`You've ordered a ${size}-sized shirt with the following message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  make_shirt();
  
  // Create a medium shirt with the default message
  make_shirt('Medium');
  
  // Create a small shirt with a different message
  make_shirt('Small', 'JavaScript is awesome!');
  