"use strict";
//----------------#1--------------------------
var x = 1;
while (x < 65536) {
    console.log(x *= 2);

}
//-------------------#2---------------------------
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
    var customer = Math.floor(Math.random() * 5) + 1;
    console.log(allCones -= customer);
    if (customer > allCones) {console.log("I cannot sell you " + customer + " cones I only have " + allCones)}
    if (allCones <= 0){console.log("Yay! I sold them all!")}

} while (allCones > 0);

//-------------------------#3------------------------------
