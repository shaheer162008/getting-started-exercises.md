// Original array of people to invite to dinner
var guestList = ["Nikola Tesla", "Albert Einstein", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Stephen Hawking"];
// Print invitation messages for the original guest list
console.log("Original Invitation List:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. Please join us for an evening of stimulating conversation.");
}
// Inform that only two people can be invited
console.log("\nI'm sorry, but due to a delay, I can invite only two people for dinner.");
// Remove guests until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last guest
    console.log("Sorry, " + removedGuest + ", but I can't invite you to dinner this time.");
}
// Print a message to the two remaining guests
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are still invited to dinner. Please join us for an evening of stimulating conversation.");
}
// Remove the last two names to make an empty list
guestList.pop();
guestList.pop();
// Print the empty guest list
console.log("\nEmpty Guest List:");
console.log(guestList);
