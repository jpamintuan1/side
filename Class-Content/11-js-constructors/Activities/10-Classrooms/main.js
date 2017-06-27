// requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("Love ", 3187);

// calling the addStudent method on our firstClass object
firstClass.addStudent("ASS", "Coding is depressing", 3.87);

console.log(firstClass);
