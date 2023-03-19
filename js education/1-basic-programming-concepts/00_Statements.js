/**
 *
 * In this example, we have several different kinds of statements:
 *
 *  - Variable Declaration Statement: let age = 25;
 *  - Function Declaration Statement: function sayHello(name) {...}
 *  - Conditional Statement: if (age >= 18) {...}
 *  - Loop Statement: for (let i = 0; i < 5; i++) {...}
 *  - Switch Statement: switch (fruit) {...}
 *  - Try/Catch Statement: try {...} catch (error) {...}
 *
 * Each statement serves a different purpose and can be used to accomplish different tasks in a JavaScript program.
 *
 */


// Variable Declaration Statement
let justAge = 25;

// Function Declaration Statement
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// Conditional Statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are not yet an adult.");
}

// Loop Statement
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

// Switch Statement
let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.");
        break;
    default:
        console.log("I don't know what fruit this is.");
        break;
}

// Try/Catch Statement
try {
    // Some code that might throw an error
} catch (error) {
    console.log(`An error occurred: ${error.message}`);
}
