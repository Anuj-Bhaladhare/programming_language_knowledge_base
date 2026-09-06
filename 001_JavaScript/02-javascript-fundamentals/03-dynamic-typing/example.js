// ==========================================
// Dynamic Typing in JavaScript
// ==========================================

// JavaScript is a dynamically typed language.
// This means a variable can hold values of
// different data types at different times.

// ------------------------------------------
// 1. The variable initially stores a Number
// ------------------------------------------

let value = 100;

console.log(value);        // Output: 100
console.log(typeof value); // Output: number


// ------------------------------------------
// 2. Now we change the value to a String
// ------------------------------------------

// We did NOT create a new variable.
// We are assigning a new value to the same variable.

value = "Hello JavaScript";

console.log(value);        // Output: Hello JavaScript
console.log(typeof value); // Output: string


// ------------------------------------------
// 3. Now we change the value to a Boolean
// ------------------------------------------

value = true;

console.log(value);        // Output: true
console.log(typeof value); // Output: boolean


// ------------------------------------------
// 4. We can change it again to an Object
// ------------------------------------------

value = {
    name: "Rahul",
    age: 20
};

console.log(value);
console.log(typeof value); // Output: object


// ==========================================
// What happened?
// ==========================================
//
// The SAME variable "value" held different
// types of values during the program:
//
// value = 100
//       ↓
//     Number
//
// value = "Hello JavaScript"
//       ↓
//     String
//
// value = true
//       ↓
//     Boolean
//
// value = { name: "Rahul", age: 20 }
//       ↓
//     Object
//
// This ability is called DYNAMIC TYPING.
// ==========================================
