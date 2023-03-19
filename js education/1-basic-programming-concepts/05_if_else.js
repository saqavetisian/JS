/**

 In JavaScript, we can use if-else statements to conditionally execute code.
 The basic syntax of an if-else statement is as follows:
    if (condition) {
        // code to be executed if condition is true
    } else {
        // code to be executed if condition is false
    }
 The condition is an expression that evaluates to a Boolean value (either true or false).
 If the condition is true, the code inside the if block is executed; otherwise, the code inside the else block is executed.
 It is also possible to have multiple else-if blocks between the if and else blocks to handle additional conditions.
 */
// Example 1: Simple if-else statement
let num = 10;

if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Non-positive number");
}

// Example 2: if-else-if statement
let grade = 80;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// Example 3: Nested if-else statements
let age = 20;
let gender = "female";

if (age >= 18) {
    if (gender === "male") {
        console.log("You are a man");
    } else {
        console.log("You are a woman");
    }
} else {
    console.log("You are not yet an adult");
}

/**

 If-else statements are a fundamental building block of programming
 and allow us to create complex decision-making logic in our code.
 They can be used to perform different actions based on user input,
 system state, or other factors that may affect the behavior of our program.
 It's important to write clear and concise if-else statements that are easy to understand and maintain over time.
 --------
 In addition to the basic if...else statement, JavaScript also provides several other conditional statements
 that can be used to execute code based on certain conditions.
 Switch Statement:
 The switch statement evaluates an expression and executes the code associated with the matching case.
 If no matching case is found, the default code block is executed.
 */

const dayOfWeek = 'Monday';

switch (dayOfWeek) {
    case 'Monday':
        console.log('It is Monday!');
        break;
    case 'Tuesday':
        console.log('It is Tuesday!');
        break;
    case 'Wednesday':
        console.log('It is Wednesday!');
        break;
    default:
        console.log('It is not Monday, Tuesday, or Wednesday.');
}

/**

 2. Ternary Operator:
 The ternary operator is a shorthand way to write an if...else statement.
 It consists of a condition followed by a question mark (?), then an expression to execute if the condition is true,
 followed by a colon (:), and finally an expression to execute if the condition is false.
 */

const personAge = 18;
const isAdult = personAge >= 18 ? true : false;

console.log(`Is adult: ${isAdult}`);

/**

 3. Nullish Coalescing Operator:
 The nullish coalescing operator (??) is used to return the first value that is not null or undefined.
 It is useful for providing default values when dealing with optional variables or function parameters.
 */
let name;
console.log(name ?? 'Unknown'); // Output: Unknown

name = 'John';
console.log(name ?? 'Unknown'); // Output: John

/**

 Conditional statements are essential for controlling the flow of code execution in JavaScript.
 By using if...else statements, switch statements, ternary operators, and nullish coalescing operators,
 we can write more dynamic and flexible programs that can handle a variety of different situations.
 */