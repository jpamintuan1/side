// requiring our partyBus module exported from partyBus.js
var PartyBus = require("./partyBus.js");

// creating a new PartyBus with our constructor and storing it in zbtPartyBus
var zbtPartyBus = new PartyBus("Cosmo", "NYC", "Recycling Center, MI");

// console logging out the duds array property on our zbtPartyBus object
console.log("\nnew bus, who dis?", zbtPartyBus.peeps);

// calling the addDud method on our zbtPartyBus object
zbtPartyBus.addPassenger("female", "Moon", 10);

console.log("\nwho's there?!", zbtPartyBus.peeps);

// adding more duds to zbtPartyBus
zbtPartyBus.addPassenger("male", "Breaker", 10);
zbtPartyBus.addPassenger("female", "Pine", 8);
zbtPartyBus.addPassenger("male", "Chance", 9);
zbtPartyBus.addPassenger("male", "West", 4);
zbtPartyBus.addPassenger("female", "Honor", 6);

console.log("\nwho wants to party?", zbtPartyBus.peeps);
