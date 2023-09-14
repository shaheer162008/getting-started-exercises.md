// List of current usernames
const currentUsers = ['John', 'Alice', 'Bob', 'Eve', 'Mallory'];

// List of new usernames to check
const newUsers = ['John', 'Jane', 'Charlie', 'Mallory', 'Oscar'];

// Function to check if a username is available
function isUsernameAvailable(username) {
  // Convert current usernames to lowercase for case-insensitive comparison
  const currentUsersLower = currentUsers.map(user => user.toLowerCase());

  // Check if the lowercase version of the username exists in the current users list
  return !currentUsersLower.includes(username.toLowerCase());
}

// Loop through new usernames and check for availability
newUsers.forEach(newUser => {
  if (isUsernameAvailable(newUser)) {
    console.log(`'${newUser}' is available!`);
  } else {
    console.log(`Sorry, '${newUser}' is not available. You'll need to enter a new username.`);
  }
});
