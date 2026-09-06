// ==========================================================
// example.js
// Topic: Non-Blocking JavaScript
// ==========================================================
//
// JavaScript is single-threaded.
//
// But JavaScript can perform NON-BLOCKING operations.
//
// Non-blocking means:
// JavaScript does not have to wait for an asynchronous
// operation to finish before continuing with other code.
//
// ==========================================================


// ==========================================================
// 1. SIMPLE NON-BLOCKING EXAMPLE
// ==========================================================

console.log("1. Start");


// setTimeout() schedules a function to run later.
//
// JavaScript does NOT stop here for 3 seconds.
//
// Instead:
// 1. The timer is registered.
// 2. JavaScript continues executing the next line.
// 3. After the timer is ready, the callback can run.

setTimeout(function () {
    console.log("3. Timer finished");
}, 3000);


console.log("2. End");


// Output:
//
// 1. Start
// 2. End
// 3. Timer finished
//
// Notice:
//
// We started the timer BEFORE printing "2. End",
// but "2. End" appears first.
//
// Why?
//
// Because setTimeout() is NON-BLOCKING.
//
// ==========================================================


// ==========================================================
// 2. ANOTHER EXAMPLE
// ==========================================================

console.log("\n--- Another Example ---");

console.log("Task A");

setTimeout(function () {
    console.log("Task C - Async task finished");
}, 2000);

console.log("Task B");


// Output:
//
// Task A
// Task B
// Task C - Async task finished
//
// JavaScript did NOT wait for Task C.
// It continued with Task B.
//
// ==========================================================


// ==========================================================
// 3. SIMULATING A SERVER REQUEST
// ==========================================================
//
// Imagine we are requesting data from a server.
//
// In a real application, we could use fetch().
//
// Here, setTimeout() is only being used to simulate
// a delayed operation.
//
// ==========================================================

console.log("\n--- Server Request Example ---");

console.log("Request started");


// Simulate a server response after 3 seconds.
setTimeout(function () {

    console.log("Server response received");

}, 3000);


// JavaScript continues immediately.
console.log("JavaScript continues doing other work");


// Output:
//
// Request started
// JavaScript continues doing other work
// Server response received
//
// The request was started,
// but JavaScript didn't sit and wait for 3 seconds.
//
// ==========================================================


// ==========================================================
// 4. BLOCKING VS NON-BLOCKING
// ==========================================================
//
// BLOCKING:
//
// JavaScript has to wait:
//
// Start
//   ↓
// Long task
//   ↓
// Wait
//   ↓
// Task finished
//   ↓
// Continue
//
//
// NON-BLOCKING:
//
// Start
//   ↓
// Start async task
//   ↓
// Don't wait
//   ↓
// Continue other work
//   ↓
// Async task finishes later
//   ↓
// Handle result
//
// ==========================================================


// ==========================================================
// 5. IMPORTANT: setTimeout() DOES NOT RUN THE FUNCTION
//    IMMEDIATELY AFTER THE TIME EXPIRES
// ==========================================================
//
// The 2 seconds in setTimeout() means:
//
// "Do not run this callback before approximately
// 2 seconds have passed."
//
// It does NOT mean:
//
// "Run this function exactly after 2 seconds."
//
// The callback still has to wait until JavaScript is
// able to execute it.
//
// ==========================================================

console.log("\n--- setTimeout Timing ---");

setTimeout(function () {
    console.log("Timer callback");
}, 0);

console.log("This runs first");


// Output:
//
// This runs first
// Timer callback
//
// Even with 0 milliseconds, the callback does not
// execute immediately.
//
// ==========================================================


// ==========================================================
// 6. MAIN IDEA
// ==========================================================
//
// JavaScript:
//
//        Single Thread
//             ↓
//     Execute JavaScript
//             ↓
//     Start async operation
//             ↓
//         Don't wait
//             ↓
//     Continue other work
//             ↓
//      Async operation finishes
//             ↓
//      Callback is executed later
//
// ==========================================================
//
// EASY DEFINITION:
//
// "Non-blocking means JavaScript can start an asynchronous
// operation without waiting for it to finish, allowing
// the main thread to continue doing other work."
//
// ==========================================================
