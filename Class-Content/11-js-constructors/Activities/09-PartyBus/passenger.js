// constructor function for creating dud objects
var Passenger = function(gender, name, coolnessScale) {
  this.gender = gender;
  this.name = name;
  this.coolnessScale = coolnessScale;
  // prints out a different message depending on whether dud is male or female
  this.greet = function() {
    if (this.gender === "female") {
      console.log("Sup?");
    } else {
      console.log("Hi everyone.");
    }
  };
};

// exporting our Dud constructor.We will require it in partyBus.js
module.exports = Passenger;
