// Array of friend names
let namesoffriends = ["Ali", "Babar", "Dawood", "Danish", "Zubair"];

// Personalized greeting message
let greetingMessage = "Hello, ";

// Print a personalized message to each person
for (let i = 0; i < namesoffriends.length; i++) {
  let personalizedMessage = greetingMessage + namesoffriends[i] + "!";
  console.log(personalizedMessage);
}
