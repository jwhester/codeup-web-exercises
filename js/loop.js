"use strict";
/*
* WHILE LOOPS
*/

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)
let i = 10;
// while (i <= 100) {
//     console.log(i + '/100');
//     i += 10;
// }
// 2. Create a while loop that counts backwards from 50 - 1
let x = 50;
while(x > 1){
    console.log(x);
    x--;
}
// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?
let myQuestion = true;
// while(myQuestion){
//     myQuestion = confirm('Would you like to exit?')
// }

/** DO-WHILE LOOPS
*/
// 4. Refactor question 3 using a do-while loop.
do {
    myQuestion = confirm('Would you like to exit?');
}while (!myQuestion)
// What is the behavior this time?
// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"

do {
    var color = prompt("enter a color: ");
} while (color !== "blue");
// 6. Refactor question 1 using a do-while loop.
// do {
//
//     console.log(i += 10);
//
// } while (i < 100);


/** FOR LOOPS*/
var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];
// 7. Create a for loop that iterates over this array and logs out each
// element to the console
for (var y = 0; y < myArray.length; y++){
    console.log(myArray[y]);
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.
for (var a = 0; a <= 100; a++){
    if (a % 3 === 0 && a % 5 === 0){console.log(a + "= FizzBuzz")}
    else if (a % 5 === 0){console.log(a + "= buzz")}
    else if (a % 3 === 0){console.log(a + "= fizz")}
    else { console.log(a)}
}

// 9. Refactor question 1 using a for-loop
for (var z = i; z <= 100; z+=10){
    console.log(z);
}


// 10. Write a for-loop
/*
* BREAK AND CONTINUE
*/
// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.
// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.

