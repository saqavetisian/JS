/**
 * In JavaScript, we can declare variables using the let, const, or var keywords.
 * The let keyword is used for declaring variables that can be reassigned later on,
 * while const is used for declaring constants that cannot be reassigned.
 * The var keyword is an older way of declaring variables and is still supported in modern JavaScript,
 * but it has some quirks that make it less desirable than let and const.
 */

// Variable Declaration with let keyword
let age = 25;

// Variable Declaration with const keyword
const PI = 3.14159;

// Variable Declaration with var keyword
var name = "John";

/**
 *
 * In this example, we declare variables using the let, const, and var keywords.
 * We output the values of these variables to the console using console.log(),
 * and then we update the values of some of the variables.
 * We also perform arithmetic operations using variables,
 * storing the results in new variables and outputting those values to the console as well.
 */

// Output variable value to console
console.log(`Age: ${age}`);
console.log(`PI: ${PI}`);
console.log(`Name: ${name}`);

// Updating variable value
age = 30;
name = "Jane";

// Output updated variable values to console
console.log(`New Age: ${age}`);
console.log(`New Name: ${name}`);

// Arithmetic operation with variables
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);

/**
 * Variables are a crucial concept in JavaScript,
 * and understanding how to declare and use them is essential for writing effective and efficient programs.
 * By using variables to store and manipulate data,
 * we can create more dynamic and interactive applications.
 */
