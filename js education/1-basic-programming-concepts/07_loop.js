/**

 In JavaScript, loops are used to execute a block of code repeatedly.
 There are three types of loops in JavaScript: for, while, and do...while.
 Each of these loops has a different syntax and use case, but they all serve the same basic purpose of executing code repeatedly.

 - for loop: A loop that executes a block of code for a specific number of times, based on a given condition.
 - while loop: A loop that executes a block of code repeatedly while a specific condition is true.
 - do...while loop: A loop that executes a block of code at least once, and then repeatedly while a specific condition is true.
 - for...in loop: A loop that iterates over the properties of an object.
 - for...of loop: A loop that iterates over the elements of an iterable object, such as an array or a string.
 
 */

// Here are examples of each type of loop:

// for loop example
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

// while loop example
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do...while loop example
let num = 1;
do {
    console.log(num);
    num++;
} while (num < 5);

// for...in loop example
const person = { name: "John", age: 30, occupation: "developer" };
for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

// for...of loop example
const arr = ["apple", "banana", "orange"];
for (let fruit of arr) {
    console.log(fruit);
}

/**

 The for loop is the most common type of loop in JavaScript.
 It is used when you know how many times you want to execute the loop.
 The for loop has three parts: the initialization, the condition, and the increment.
 The initialization is where you declare the loop variable, the condition is where you specify when to stop looping,
 and the increment is where you specify how much to increment the loop variable each time the loop runs.
 The while loop is used when you don't know how many times you want to execute the loop.
 It only has a condition, and the loop will continue to execute as long as the condition is true.
 The do...while loop is similar to the while loop, but the condition is checked at the end of the loop instead of the beginning.
 This means that the loop will always execute at least once, even if the condition is false to begin with.
 Loops are a powerful tool in JavaScript that allow you to execute code repeatedly and efficiently.
 By understanding how to use loops and when to use each type of loop, you can write more complex and dynamic applications.
 */