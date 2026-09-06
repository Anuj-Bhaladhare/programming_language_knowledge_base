// ======================================================
// example.js
// Topic: Multi-Paradigm Programming in JavaScript
// ======================================================
//
// JavaScript is a MULTI-PARADIGM programming language.
//
// This means JavaScript allows us to write programs
// using different programming styles.
//
// In this example, we will see:
//
// 1. Procedural Programming
// 2. Object-Oriented Programming
// 3. Functional Programming
//
// ======================================================


// ======================================================
// 1. PROCEDURAL PROGRAMMING
// ======================================================
//
// Procedural programming means writing instructions
// step by step.
//
// Think:
//
// Step 1 → Do something
// Step 2 → Do something else
// Step 3 → Get the result
//
// ======================================================

console.log("----- Procedural Programming -----");

let price = 100;
let quantity = 3;

// Calculate the total price.
let total = price * quantity;

// Display the result.
console.log("Total price:", total);


// ======================================================
// 2. OBJECT-ORIENTED PROGRAMMING (OOP)
// ======================================================
//
// Object-oriented programming organizes code around
// OBJECTS.
//
// An object can contain:
//
// Data      → properties
// Behavior  → methods
//
// ======================================================

console.log("\n----- Object-Oriented Programming -----");

// Create a Product object.
const product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,

    // This method represents the behavior of the object.
    getTotal() {
        return this.price * this.quantity;
    }
};

// Access the object's data.
console.log("Product:", product.name);

// Call the object's method.
console.log("Total price:", product.getTotal());


// ======================================================
// 3. FUNCTIONAL PROGRAMMING
// ======================================================
//
// Functional programming focuses heavily on FUNCTIONS.
//
// A function can:
// - Receive data
// - Process data
// - Return a result
//
// JavaScript treats functions as values, so functions
// can be stored in variables, passed to other functions,
// and returned from functions.
//
// ======================================================

console.log("\n----- Functional Programming -----");

// Create a function that calculates the total.
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Call the function with different values.
const total1 = calculateTotal(100, 5);
const total2 = calculateTotal(200, 3);

console.log("Total 1:", total1);
console.log("Total 2:", total2);


// ======================================================
// JAVASCRIPT CAN COMBINE THESE PARADIGMS
// ======================================================
//
// One of the powerful things about JavaScript is that
// we don't have to choose only ONE programming style.
//
// We can combine different approaches.
//
// ======================================================

console.log("\n----- Combining Paradigms -----");

// Object containing product information.
const phone = {
    name: "Phone",
    price: 20000,
    quantity: 2
};

// Function that works with the object.
function getProductTotal(product) {
    return product.price * product.quantity;
}

// Pass the object to the function.
const phoneTotal = getProductTotal(phone);

console.log("Product:", phone.name);
console.log("Total price:", phoneTotal);


// ======================================================
// SUMMARY
// ======================================================
//
// PROCEDURAL
//     ↓
// Step-by-step instructions
//
// OBJECT-ORIENTED
//     ↓
// Organize code around objects
//
// FUNCTIONAL
//     ↓
// Organize logic around functions
//
// JavaScript supports all of these styles.
//
// Therefore:
//
// JavaScript = MULTI-PARADIGM LANGUAGE
//
// ======================================================
