/**

 In JavaScript, an array is a data structure that allows us to store and manipulate a collection of data.
 Arrays can hold multiple values of different data types, including numbers, strings, booleans, and even other arrays.
 We can declare an array using square brackets, with each element separated by a comma.
 We can access individual elements of an array using their index, starting from 0.
 Here is an example of declaring an array and accessing its elements:
 */
const myArray = ["apple", "banana", "orange"];
console.log(myArray[0]); // Output: "apple"
console.log(myArray[1]); // Output: "banana"
console.log(myArray[2]); // Output: "orange"

/**

 We can also add or remove elements from an array using various methods, such as push(), pop(), shift(), and unshift().
 The push() method adds an element to the end of an array, while the pop() method removes the last element.
 The shift() method removes the first element, while the unshift() method adds an element to the beginning of the array.
 Here is an example of adding and removing elements from an array:
 */
myArray.push("grape"); // Adds "grape" to the end of the array
console.log(myArray); // Output: ["apple", "banana", "orange", "grape"]

myArray.pop(); // Removes the last element, which is "grape"
console.log(myArray); // Output: ["apple", "banana", "orange"]

myArray.shift(); // Removes the first element, which is "apple"
console.log(myArray); // Output: ["banana", "orange"]

myArray.unshift("kiwi"); // Adds "kiwi" to the beginning of the array
console.log(myArray); // Output: ["kiwi", "banana", "orange"]

/**

 We can also loop through an array using a for loop or a forEach() method to perform some operation on each element.
 The for loop allows us to access each element using its index, while the forEach() method provides a more concise syntax.
 Here is an example of looping through an array using a for loop and a forEach() method:
 */
// Using a for loop
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Using a forEach() method
myArray.forEach((element) => {
    console.log(element);
});

/**

 Arrays are an important part of JavaScript and are used extensively in many programs and applications.
 By understanding how to declare, access, and manipulate arrays, we can create more dynamic and flexible code.
 */