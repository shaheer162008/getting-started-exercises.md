// Original array of people to invite to dinner
let guestList = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Isaac Newton"];

// Print the number of people being invited to dinner
console.log("Number of People Invited to Dinner: " + guestList.length);

// Print invitation messages for the original guest list
console.log("\nInvitation Messages:");
for (let i = 0; i < guestList.length; i++) {
  console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. Please join us for an evening of stimulating conversation.");
}

