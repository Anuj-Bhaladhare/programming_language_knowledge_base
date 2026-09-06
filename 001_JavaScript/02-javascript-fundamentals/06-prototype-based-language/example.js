// ==========================================================
// example.js
// Topic: Prototype-Based Language in JavaScript
// ==========================================================
//
// JavaScript is a PROTOTYPE-BASED language.
//
// This means objects can inherit properties and methods
// from other objects through a PROTOTYPE.
//
// Important concepts:
//
// 1. Object
// 2. Prototype
// 3. Prototype Chain
// 4. Property Lookup
// 5. Prototype Inheritance
//
// ==========================================================


// ==========================================================
// 1. BASIC OBJECT
// ==========================================================
//
// An object can contain properties and methods.
//
// ==========================================================

const person = {
    name: "Rahul",
    age: 20,

    greet: function () {
        console.log("Hello!");
    }
};

console.log(person.name); // Rahul
console.log(person.age);  // 20

person.greet();           // Hello!


// ==========================================================
// 2. PROTOTYPE
// ==========================================================
//
// An object can have another object as its prototype.
//
// We can use Object.setPrototypeOf() to explicitly set
// the prototype of an object.
//
// ==========================================================

const parent = {
    city: "Nagpur",

    sayHello: function () {
        console.log("Hello from parent!");
    }
};

const child = {
    name: "Rahul"
};


// Set "parent" as the prototype of "child".
Object.setPrototypeOf(child, parent);


// "name" belongs directly to child.
console.log(child.name);

// "city" does NOT belong directly to child.
// JavaScript finds it in child's prototype.
console.log(child.city);

// "sayHello" also comes from the prototype.
child.sayHello();


// ==========================================================
// 3. HOW PROTOTYPE LOOKUP WORKS
// ==========================================================
//
// When we write:
//
//     child.city
//
// JavaScript first checks the child object.
//
//     child
//       ↓
//     Does child have "city"?
//       ↓
//     No
//
// Then JavaScript checks the prototype.
//
//     parent
//       ↓
//     Does parent have "city"?
//       ↓
//     Yes
//
// JavaScript returns "Nagpur".
//
// ==========================================================

console.log(child.city);


// ==========================================================
// 4. PROPERTY DIRECTLY ON OBJECT
// ==========================================================
//
// If the property exists directly on the object,
// JavaScript uses that property.
//
// ==========================================================

const parent2 = {
    name: "Parent"
};

const child2 = {
    name: "Child"
};

Object.setPrototypeOf(child2, parent2);

console.log(child2.name);

// Output:
// Child
//
// Why?
//
// JavaScript checks child2 first:
//
// child2
//   ↓
// name found
//   ↓
// "Child"
//
// It does NOT need to look at parent2.
//
// ==========================================================


// ==========================================================
// 5. PROTOTYPE CHAIN
// ==========================================================
//
// An object can have a prototype,
// and that prototype can have another prototype.
//
// This creates a PROTOTYPE CHAIN.
//
// ==========================================================

const grandParent = {
    country: "India"
};

const parent3 = {
    city: "Nagpur"
};

const child3 = {
    name: "Rahul"
};


// Create the prototype chain:
//
// child3
//   ↓
// parent3
//   ↓
// grandParent
//

Object.setPrototypeOf(parent3, grandParent);
Object.setPrototypeOf(child3, parent3);


// Direct property
console.log(child3.name);

// Found in parent3
console.log(child3.city);

// Found in grandParent
console.log(child3.country);


// ==========================================================
// 6. VISUAL REPRESENTATION OF THE PROTOTYPE CHAIN
// ==========================================================
//
// The relationship looks like this:
//
//
//     child3
//       │
//       │ [[Prototype]]
//       ↓
//     parent3
//       │
//       │ [[Prototype]]
//       ↓
//   grandParent
//       │
//       ↓
//      null
//
// ==========================================================


// ==========================================================
// 7. CHECKING THE PROTOTYPE
// ==========================================================
//
// Object.getPrototypeOf() allows us to see the prototype
// of an object.
//
// ==========================================================

console.log(Object.getPrototypeOf(child3) === parent3);

// Output:
// true

console.log(Object.getPrototypeOf(parent3) === grandParent);

// Output:
// true


// ==========================================================
// 8. CONSTRUCTOR FUNCTION + PROTOTYPE
// ==========================================================
//
// JavaScript also allows constructor functions to work
// with prototypes.
//
// This was a very common way of creating objects before
// the modern "class" syntax became popular.
//
// ==========================================================

function Person(name, age) {

    // These properties belong directly to each object.
    this.name = name;
    this.age = age;
}


// Add a method to Person.prototype.
//
// This method can be shared by objects created using
// the Person constructor.
Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};


// Create two Person objects.
const person1 = new Person("Rahul", 20);
const person2 = new Person("Amit", 25);


// Call the shared method.
person1.greet();
person2.greet();


// ==========================================================
// 9. UNDERSTANDING THE PROTOTYPE RELATIONSHIP
// ==========================================================
//
// person1 does NOT have its own "greet" property.
//
// Instead:
//
// person1
//   ↓
// Person.prototype
//   ↓
// greet()
//
// The same is true for person2:
//
// person2
//   ↓
// Person.prototype
//   ↓
// greet()
//
// This allows the method to be shared.
//
// ==========================================================

console.log(
    Object.getPrototypeOf(person1) === Person.prototype
);

// Output:
// true


console.log(
    Object.getPrototypeOf(person2) === Person.prototype
);

// Output:
// true


// ==========================================================
// 10. CLASS SYNTAX ALSO USES PROTOTYPES
// ==========================================================
//
// Modern JavaScript provides "class" syntax.
//
// It looks like traditional class-based programming,
// but JavaScript classes are built on top of the
// prototype system.
//
// ==========================================================

class Student {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, I am " + this.name);
    }
}


const student1 = new Student("Rahul");

student1.greet();


// The greet() method is stored on Student.prototype.
console.log(
    Object.getPrototypeOf(student1) === Student.prototype
);

// Output:
// true


// ==========================================================
// FINAL SUMMARY
// ==========================================================
//
// JavaScript is a PROTOTYPE-BASED language.
//
// The basic idea:
//
// Object
//   ↓
// [[Prototype]]
//   ↓
// Another Object
//   ↓
// Another Prototype
//   ↓
// null
//
// When JavaScript cannot find a property or method directly
// on an object, it can search through the prototype chain.
//
// Example:
//
// child.name
//    ↓
// Check child
//
// child.city
//    ↓
// Check child
//    ↓
// Not found
//    ↓
// Check prototype
//    ↓
// Found
//
// ==========================================================
//
// EASY DEFINITION:
//
// "JavaScript is prototype-based because objects can inherit
// properties and methods from other objects through a
// prototype chain."
//
// ==========================================================
