// Array of friend names
var namesoffriends = ["Ali", "Babar", "Dawood", "Danish", "Zubair"];
// Personalized greeting message
var greetingMessage = "Hello, ";
// Print a personalized message to each person
for (var i = 0; i < namesoffriends.length; i++) {
    var personalizedMessage = greetingMessage + namesoffriends[i] + "!";
    console.log(personalizedMessage);
}
