"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var name = prompt("What is your name?")

var favColor = prompt("What is your favorite color?");
alert("Awesome, " + favColor + " is my favorite color too!");

var movie = 3;
var mermaid = prompt("How many days would you like to rent The Little Mermaid for?");
console.log(typeof (mermaid));
parseInt(mermaid);
console.log(typeof (parseInt(mermaid)));
var bear = prompt("How many days would you like to rent Brother Bear for?");
var hercules = prompt("How many days would you like to rent Hercules for?");
alert(name + " your total cost comes out to: " + "$" + ((parseInt(mermaid) + parseInt(bear) + parseInt(hercules)) * movie) + ".00");

var google = 400;
var amazon = 380;
var facebook = 350;
var googleTime = prompt("How many hours did you work for Google?");
var amazonTime = prompt("How many hours did you work for Amazon?");
var facebookTime = prompt("How many hours did you work for FaceBook?");
alert(name + "," + " you made " + "$" + ((google * parseInt(googleTime)) + (amazon * parseInt(amazonTime)) + (facebook * parseInt(facebookTime))) + ".00 this week.");

var classCount = prompt("How many students are in the class?");
var classTime = prompt("What time does the class start?");
function classStart(){
    if (parseInt(classTime) === 9 && classCount <= 100) {
        return alert("Let's go to school " + name + "!");
    } else {
        return alert("Sorry," + name + " you can't go to school.")
    }
}
console.log(classStart());

var moreThan2 = prompt("How many products did you purchase today " + name + "?");
var premium = confirm("Are you a premium member?");
var offer = confirm("Is this offer still valid?");
function offerValid(){
    if (parseInt(moreThan2) >= 2 || premium === true && offer === true) {
        return alert("Congratulations " + name + ", you get a discount!")
    } else {
        return alert("This is not the discount you're looking for.")
    }
}
console.log(offerValid())



