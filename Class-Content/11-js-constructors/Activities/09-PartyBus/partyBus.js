// requiring our Dud constructor function we exported from dud.js
var Passenger = require("./passenger.js");

// constructor function for creating partyBus objects
var PartyBus = function(driverName, startLocation, destination) {
  // this.duds will hold all of our dud objects
  this.peeps = [];
  this.driverName = driverName;
  this.startLocation = startLocation;
  this.destination = destination;
  // a method that creates a dud object from the constructor function we required
  // on line 1 and then pushes the new dud object to the this.duds array
  this.addPassenger = function(g, n, r) {
    this.peeps.push(new Passenger(g, n, r));
  };
};

// exporting the PartyBus constructor which we will use in main.js
module.exports = PartyBus;
