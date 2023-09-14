// Original array of people to invite to dinner
var guestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Isaac Newton"];
// Print invitation messages for the original guest list
console.log("Original Invitation List:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. Please join us for an evening of stimulating conversation.");
}
// Inform about the bigger dinner table
console.log("\nGood news! I've found a bigger dinner table.");
// Add new guests to the list
guestList.unshift("Nikola Tesla"); // Add a new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Ada Lovelace"); // Add a new guest to the middle
guestList.push("Stephen Hawking"); // Add a new guest to the end
// Print invitation messages for the updated guest list
console.log("\nUpdated Invitation List:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. Please join us for an evening of stimulating conversation.");
}
