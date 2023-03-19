/**

 In JavaScript, arrays are a commonly used data structure that stores a collection of values. The values can be of any data type, including numbers, strings, booleans, objects, or even other arrays.
 JavaScript provides a variety of built-in methods that can be used to manipulate arrays, including adding, removing, and modifying elements.
 Here are some commonly used array methods in JavaScript:
 */
// 1. push()
/**

 The push() method adds one or more elements to the end of an array and returns the new length of the array.
 */
const fruits = ["apple", "banana", "orange"];
fruits.push("pear");
console.log(fruits); // Output: ["apple", "banana", "orange", "pear"]
// 2. pop()
/**

 The pop() method removes the last element from an array and returns that element.
 */
const numbers = [1, 2, 3, 4, 5];
const lastNumber = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(lastNumber); // Output: 5
// 3. shift()
/**

 The shift() method removes the first element from an array and returns that element.
 */
const colors = ["red", "green", "blue"];
const firstColor = colors.shift();
console.log(colors); // Output: ["green", "blue"]
console.log(firstColor); // Output: "red"
// 4. unshift()
/**

 The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
 */
const animals = ["dog", "cat"];
animals.unshift("horse", "rabbit");
console.log(animals); // Output: ["horse", "rabbit", "dog", "cat"]
// 5. splice()
/**

 The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
 The first parameter specifies the starting index, the second parameter specifies the number of elements to remove, and the third parameter (and beyond) specifies the new elements to add.
 */
const months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");
console.log(months); // Output: ["January", "February", "March", "April", "June"]
// 6. slice()
/**

 The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
 The original array will not be modified.
 */
const cars = ["BMW", "Mercedes", "Audi", "Porsche"];
const germanCars = cars.slice(0, 3);
console.log(germanCars); // Output: ["BMW", "Mercedes", "Audi"]
/**

 These are just a few examples of the many array methods available in JavaScript.
 By utilizing these methods, you can easily manipulate arrays and make your code more efficient and effective.
 */