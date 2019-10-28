"use strict";

//Write a function named 'typeOfValue' that takes in a value and returns its
//  type.

function typeOfValue(x) {
    return typeof x;
}

//Write a function 'isPositive' that takes in a number and returns `true` or
//  `false` based on whether the input is positive.

function isPositive(num) {
    if (!isNaN(parseFloat(num))  && num >= 0){
        return true;
    } else {
        return false;
    }
}

//Write a function 'removeElement' that takes in an array and a value, and
// returns an Array with the first instance of the indicated value removed.

function removeElement(array, value) {
    var arr = array;
    var index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
}

//Write a function 'sumOfNumbers' that takes in an array of numbers and
// returns the sum of all values.

function sumOfNumbers(array) {
    return eval(array.join('+'))
}

//Write a function 'evensIndex' that takes in an array of numbers and returns an array
// containing the index values of all even numbers.

function evensIndex(array) {
    var arr = [];
    for(var i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            arr.push(array[i]);
        }
    }
    return arr;
}

//Write a function 'stringToArray' that takes in a comma separated list and
// returns it as an array.

function stringToArray(string) {
    var str = string
    return str.split(',')
}

//Given the following array of objects, write a function 'findUsers' that
// returns an Array of usernames.
var myMac = {};
myMac.users = [
    {
        username: "sophie",
        id: 1
    },
    {
        username: "vivian",
        id: 2
    },
    {
        username: "david",
        id: 3
    }
];

function findUsers(object) {
    var arr  = [];
    object.forEach(function (user) {
        arr.push(user.username);

    });
    return arr;
}

//Write a function 'addRole' that accepts the array of objects, then adds the
//  property 'role' to each object with a value of 'instructor.'
function addRole(x) {
    this.forEach(function (user) {
        user.role = x
    });
    return this;
}



//Write a function 'countLetters' that takes in a string and a character, and
//  counts the number of instances of that character in the string.

function countLetters(str, chr) {
    return str.toUpperCase().split(chr.toUpperCase()).length-1;
}