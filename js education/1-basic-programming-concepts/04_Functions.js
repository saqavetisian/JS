/**

 Functions are a fundamental concept in JavaScript, allowing us to encapsulate and reuse code.
 A function is a block of code that performs a specific task and can be called multiple times throughout a program.
 We can define functions using the function keyword, followed by the function name and a set of parentheses.
 The body of the function is enclosed in curly braces, and any code inside the function will be executed when the function is called.
 Functions can take parameters as input, which are specified inside the parentheses.
 We can also return values from functions using the return keyword.
 */

// Function Declaration with no Parameters
function sayHello() {
    console.log("Hello World!");
}

// Function Call
sayHello(); // Output: "Hello World!"

// Function Declaration with Parameters
function add(num1, num2) {
    return num1 + num2;
}

// Function Call
const result = add(5, 10);
console.log(result); // Output: 15

/**

 In this example, we define two functions: sayHello() and add().
 The sayHello() function takes no parameters and simply outputs "Hello World!" to the console when called.
 The add() function takes two parameters, num1 and num2, and returns their sum using the return keyword.
 We call both functions and output their results to the console using console.log().
 Functions are a powerful tool in JavaScript and can be used to solve a wide range of problems.
 */