// ============================================================
// JavaScript: Values
// File: example.js
// ============================================================

// A VALUE is a piece of data that JavaScript can work with.

// ------------------------------------------------------------
// 1. Number Values
// ------------------------------------------------------------

// 25 is a number value.
25;

// 100 is also a number value.
100;

// Decimal numbers are also number values.
10.5;

// Negative numbers are also number values.
-50;


// ------------------------------------------------------------
// 2. String Values
// ------------------------------------------------------------

// "Hello" is a string value.
"Hello";

// A string can contain multiple words.
"Hello World";

// Strings can also use single quotes.
'JavaScript';

// Strings can use template literals.
`Learning JavaScript`;


// ------------------------------------------------------------
// 3. Boolean Values
// ------------------------------------------------------------

// true is a Boolean value.
true;

// false is also a Boolean value.
false;


// ------------------------------------------------------------
// 4. Undefined Value
// ------------------------------------------------------------

// undefined is a special JavaScript value.
// It generally represents a value that has not been assigned.
undefined;


// ------------------------------------------------------------
// 5. Null Value
// ------------------------------------------------------------

// null represents an intentional absence of a value.
null;


// ------------------------------------------------------------
// 6. Object Value
// ------------------------------------------------------------

// An object is also a value in JavaScript.
{
    name: "Anuj",
    age: 25
};


// ------------------------------------------------------------
// 7. Array Value
// ------------------------------------------------------------

// An array is also a value.
[10, 20, 30];


// ------------------------------------------------------------
// 8. Values Can Be Used in Expressions
// ------------------------------------------------------------

// 10 and 20 are values.
// The + operator performs addition.
10 + 20;

// The result of the expression is another value: 30.
console.log(10 + 20);


// ------------------------------------------------------------
// 9. Values Can Be Assigned to Variables
// ------------------------------------------------------------

// "age" is the variable.
// 25 is the value assigned to the variable.
let age = 25;

console.log(age);


// "name" is the variable.
// "Anuj" is the value.
let name = "Anuj";

console.log(name);


// "isDeveloper" is the variable.
// true is the value.
let isDeveloper = true;

console.log(isDeveloper);


// ------------------------------------------------------------
// 10. A Variable Can Change Its Value
// ------------------------------------------------------------

// Initially, age has the value 25.
let studentAge = 25;

console.log(studentAge); // 25

// The value of studentAge is changed to 30.
studentAge = 30;

console.log(studentAge); // 30


// ------------------------------------------------------------
// 11. A Variable Can Hold Different Types of Values
// ------------------------------------------------------------

// JavaScript is dynamically typed.
// A variable can hold a value of one type and later
// hold a value of another type.

let data = 100;

console.log(data); // 100

// data now contains a string value.
data = "Hello";

console.log(data); // Hello

// data now contains a Boolean value.
data = true;

console.log(data); // true


// ------------------------------------------------------------
// 12. Values Have Types
// ------------------------------------------------------------

// 25 is a number value.
console.log(typeof 25); // "number"

// "Hello" is a string value.
console.log(typeof "Hello"); // "string"

// true is a Boolean value.
console.log(typeof true); // "boolean"

// undefined is an undefined value.
console.log(typeof undefined); // "undefined"


// ------------------------------------------------------------
// 13. typeof Can Be Used With Variables
// ------------------------------------------------------------

let score = 95;

console.log(score);        // 95
console.log(typeof score); // "number"


let username = "Anuj";

console.log(username);        // Anuj
console.log(typeof username); // "string"


let loggedIn = true;

console.log(loggedIn);        // true
console.log(typeof loggedIn); // "boolean"


// ------------------------------------------------------------
// 14. Values Can Be Passed to Functions
// ------------------------------------------------------------

// "Hello World" is a value passed to console.log().
console.log("Hello World");

// 100 is a value passed to console.log().
console.log(100);

// true is a value passed to console.log().
console.log(true);


// ------------------------------------------------------------
// 15. Values Can Be Returned From Functions
// ------------------------------------------------------------

function getAge() {

    // 25 is a value returned by the function.
    return 25;
}

// Calling the function gives us the returned value.
let result = getAge();

console.log(result); // 25


// ------------------------------------------------------------
// 16. Values Can Be Used in Comparisons
// ------------------------------------------------------------

let userAge = 25;

// 25 and 18 are values.
// The > operator compares them.
console.log(userAge > 18); // true


// ------------------------------------------------------------
// 17. Multiple Values Can Be Combined
// ------------------------------------------------------------

let firstName = "Anuj";
let lastName = "Bhaladhare";

// The + operator combines two string values.
let fullName = firstName + " " + lastName;

console.log(fullName);
// Anuj Bhaladhare


// ============================================================
// IMPORTANT MENTAL MODEL
// ============================================================
//
//     let age = 25;
//
//     age
//      ↓
//   Variable
//
//     25
//      ↓
//    Value
//
//   number
//      ↓
//     Type
//
// ============================================================


// ------------------------------------------------------------
// Final Practice
// ------------------------------------------------------------

// Try to identify the VALUE in each statement below:
//
// let city = "Nagpur";
// let marks = 85;
// let passed = true;
//
// city  → "Nagpur" → String value
// marks → 85       → Number value
// passed → true    → Boolean value
//
// ============================================================