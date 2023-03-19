/**

 In JavaScript, there are two types of data: primitive types and objects.
 Primitive types include numbers, strings, booleans, null, and undefined,
 while objects include arrays, functions, and custom objects.
 One important thing to understand is the difference between references to objects and values of primitive types.
 When you create a variable that stores a primitive value, you are actually storing the value itself in memory.
 However, when you create a variable that stores an object, you are actually storing a reference to that object in memory.
 This means that if you assign an object to a new variable, both variables will reference the same object in memory.
 Here's an example to demonstrate this concept:
 */
// Primitive value assignment
let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num1); // Output: 10
console.log(num2); // Output: 5

// Object reference assignment
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]

/**

 In this example, we assign a primitive value (number 5) to the variable num1.
 We then assign the value of num1 to num2, and update num1 to be 10.
 When we output both variables to the console, we see that num1 has been updated to 10, while num2 remains 5.
 Next, we assign an array to the variable arr1.
 We then assign the reference to the array in arr1 to arr2.
 Finally, we push the value 4 onto arr1.
 When we output both arrays to the console, we see that both arr1 and arr2 now reference the same array in memory.
 When dealing with references to objects, it's important to keep in mind that any changes made to the object through
 one reference will affect all references to that object.
 If you want to create a copy of an object that is not tied to the original object in memory,
 you can use various methods such as the spread operator, Object.assign(), or the Array.slice() method.
 Alternatively, you can create a new object using the same properties as the original object
 and assigning new values to those properties.
 Here's an example of creating a new object from an existing object using the spread operator:
 */
// Object copying using spread operator
let obj1 = {name: 'John', age: 25};
let obj2 = {...obj1, age: 30};

console.log(obj1); // Output: {name: 'John', age: 25}
console.log(obj2); // Output: {name: 'John', age: 30}

/**

 In this example, we create an object obj1 with properties for name and age.
 We then create a new object obj2 by using the spread operator to copy all of the properties of obj1 into obj2.
 We also update the age property in obj2 to be 30.
 When we output both objects to the console, we see that obj1 remains unchanged, while obj2 has the updated age property.
 Understanding references, primitive types, and objects is crucial for writing effective and efficient JavaScript code.
 By using the appropriate techniques for dealing with references and objects,
 you can avoid bugs and create more robust applications.
 */




