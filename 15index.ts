// Original array of people to invite to dinner
let guestList = ["Ali", "Owais", "Zubair"];

// Print invitation messages for the original guest list
console.log("Original Invitation List:");
for (let i = 0; i < guestList.length; i++) {
  console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. Please join us for an evening of stimulating conversation.");
}

// Identify the guest who can't make it
let guestCantMakeIt = guestList[1]; // Let's say Leonardo da Vinci can't make it

// Modify the guest list to replace the guest who can't make it
guestList[1] = "Aliyan"; // Invite Isaac Newton instead

// Print a message about the guest who can't make it
console.log("\nUnfortunately, " + guestCantMakeIt + " can't make it to the dinner.");

// Print a second set of invitation messages for the updated guest list
console.log("\nUpdated Invitation List:");
for (let i = 0; i < guestList.length; i++) {
  console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. Please join us for an evening of stimulating conversation.");
}
