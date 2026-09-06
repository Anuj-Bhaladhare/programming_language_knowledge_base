// ==========================================================
// example.js
// Topic: First-Class Functions in JavaScript
// ==========================================================
//
// JavaScript treats functions as FIRST-CLASS VALUES.
//
// This means a function can be:
// 1. Stored in a variable
// 2. Passed as an argument to another function
// 3. Returned from another function
// 4. Stored inside an array or object
//
// ==========================================================


// ==========================================================
// 1. STORE A FUNCTION IN A VARIABLE
// ==========================================================
//
// We can store a function inside a variable just like
// we can store a number, string, or other value.
//
// ==========================================================

function greet() {
    console.log("Hello, JavaScript!");
}

// Store the function in another variable.
const myFunction = greet;

// Call the function using the new variable.
myFunction();

// Output:
// Hello, JavaScript!


// ==========================================================
// 2. PASS A FUNCTION AS AN ARGUMENT
// ==========================================================
//
// Because functions are values, we can pass a function
// to another function.
//
// ==========================================================

function sayHello() {
    console.log("Hello!");
}

function executeFunction(fn) {

    // "fn" contains the function we passed.
    // We call that function using fn().
    fn();
}

// Pass sayHello as an argument.
executeFunction(sayHello);

// Output:
// Hello!


// ==========================================================
// 3. RETURN A FUNCTION FROM ANOTHER FUNCTION
// ==========================================================
//
// A function can also return another function.
//
// ==========================================================

function createGreeting() {

    // Inner function
    function greeting() {
        console.log("Welcome to JavaScript!");
    }

    // Return the function itself.
    return greeting;
}

// createGreeting() returns a function.
const myGreeting = createGreeting();

// Call the returned function.
myGreeting();

// Output:
// Welcome to JavaScript!


// ==========================================================
// 4. STORE FUNCTIONS INSIDE AN ARRAY
// ==========================================================
//
// Functions are values, so we can store them inside arrays.
//
// ==========================================================

const operations = [

    function () {
        console.log("Addition operation");
    },

    function () {
        console.log("Subtraction operation");
    },

    function () {
        console.log("Multiplication operation");
    }
];

// Access and execute the functions.
operations[0]();
operations[1]();
operations[2];

// Notice:
// operations[2] is the function itself.
// operations[2]() calls/executes the function.


// ==========================================================
// 5. STORE A FUNCTION INSIDE AN OBJECT
// ==========================================================
//
// Functions can also be stored as object properties.
//
// ==========================================================

const person = {

    name: "Rahul",

    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

// Call the function stored inside the object.
person.greet();

// Output:
// Hello, my name is Rahul


// ==========================================================
// 6. IMPORTANT: FUNCTION vs FUNCTION CALL
// ==========================================================
//
// This is VERY important.
//
// functionName
//      ↓
// Refers to the function itself.
//
// functionName()
//      ↓
// Executes/calls the function.
//
// ==========================================================

function welcome() {
    console.log("Welcome!");
}

// Function itself
const functionReference = welcome;

// Execute the function
functionReference();

// Output:
// Welcome!


// ==========================================================
// FINAL SUMMARY
// ==========================================================
//
// JavaScript has FIRST-CLASS FUNCTIONS.
//
// This means functions can be treated like values.
//
// A function can:
//
// 1. Be stored in a variable
//       ↓
//    const fn = greet;
//
// 2. Be passed to another function
//       ↓
//    executeFunction(greet);
//
// 3. Be returned from another function
//       ↓
//    return greet;
//
// 4. Be stored in an array
//       ↓
//    const functions = [greet];
//
// 5. Be stored in an object
//       ↓
//    const obj = { greet: greet };
//
// ==========================================================
//
// EASY DEFINITION:
//
// "First-class functions means that JavaScript treats
// functions as values."
//
// ==========================================================
