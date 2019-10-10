"use strict";

// Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
function isTrue(input) {
    return (input === true);
}

console.log(isTrue(true));             // true
console.log(isTrue(false));            // false
console.log(isTrue(0));               // false
console.log(isTrue(null));             // false
console.log(isTrue("true"));           // false
console.log(isTrue("Banana"));         // false
console.log(isTrue([1, 2]));           // false
// Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
function isFalse(input) {
    return (input === false);
}

console.log(isFalse(false));             // true
console.log(isFalse(true));              // false
console.log(isFalse(0));                 // false
console.log(isFalse(null));              // false
console.log(isFalse(""));                // false
console.log(isFalse("Banana"));          // false
console.log(isFalse([1, 2]));            // false
// Define a function named not that takes in any input and returns the boolean opposite of the provided input.
function not(input){
    return (!input);
}

console.log(not(false));                  // true
console.log(not(0));                      // true
console.log(not(""));                     // true
console.log(not(null));                   // true
console.log(not(NaN));                    // true
console.log(not(undefined));              // true
console.log(not(true));                   // false
console.log(not("something"));            // false
console.log(not(Infinity));               // false
console.log(not(123));                    // false
// Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
function addOne(input) {
    var input = parseFloat(input);
    return (++input);
}

console.log(addOne(0));                    // 1
console.log(addOne(2));                    // 3
console.log(addOne(-5));                   // -4
console.log(addOne(5.789));                // 6.789
console.log(addOne(Infinity));             // Infinity
console.log(addOne("2"));                  // 3
console.log(addOne("0"));                  // 1
console.log(addOne("banana"));             // NaN
console.log(addOne(true));                 // NaN
console.log(addOne(NaN));                        // NaN
// Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.
function isEven(input){
    var input = parseFloat(input);
    return (input % 2 === 0);
}
console.log(isEven(2));                   // true
console.log(isEven(-8));                  // true
console.log(isEven(0));                   // true
console.log(isEven("42"));                // true
console.log(isEven(1));                   // false
console.log(isEven("-3"));                // false
console.log(isEven(false));               // false
console.log(isEven("banana"));            // false
// Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.
function isIdentical(x, y) {
    return (x === y);
}

console.log(isIdentical(3, 3));                     // true
console.log(isIdentical(false, false));             // true
console.log(isIdentical("hello", "hello"));         // true
console.log(isIdentical(3, 3.0));                   // true
console.log(isIdentical(undefined, undefined));     // true
console.log(isIdentical(2, "2"));                   // false
console.log(isIdentical("javascript", "java"));     // false
// Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
function isEqual(x, y){
    return (x == y);
}

console.log(isEqual(3, "3"));                       // true
console.log(isEqual("abc123", "abc123"));           // true
console.log(isEqual(true, 1));                      // true
console.log(isEqual(0, false));                     // true
console.log(isEqual(4, -5));                        // false
console.log(isEqual("java", "javascript"));         // false
// Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
function or(x, y){
    return (x || y);
}

console.log(or(true, true));                    // true
console.log(or(true, false));                   // true
console.log(or(false, true));                   // true
console.log(or(false, false));                  // false
console.log(or("hello", "world"));              // "hello" (this behavior is non-obvious, research more!)
// Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
function and(x, y){
    return x && y;
}

console.log(and(true, true));                    // true
console.log(and(true, false));                   // false
console.log(and(false, true));                   // false
console.log(and(false, false));                  // false
console.log(and("hello", "world"));              // "world" (this behavior is non-obvious, research more)
// Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
function concat(x, y){
    return ("" + x + y);
}

console.log(concat("code", "up"));                // "codeup"
console.log(concat("connect", 4));                // "connect4"
console.log(concat("hello", "world"));            // "helloworld"
console.log(concat(4, 2));                        // "42"
console.log(concat(true, true));                  // "truetrue"