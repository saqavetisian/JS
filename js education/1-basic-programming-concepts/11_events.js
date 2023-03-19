/** DOM events refer to actions or occurrences that take place within a web page and can be detected and used by JavaScript code to trigger specific functions or actions. There are numerous events available in the DOM, including:

 Click: Triggered when a user clicks on an element, such as a button or link.

 Mouseover: Triggered when the mouse pointer moves over an element.

 Keydown: Triggered when a key is pressed down.

 Load: Triggered when a page or an element on a page finishes loading.

 Submit: Triggered when a form is submitted.

 To use DOM events in JavaScript, you first need to select the element that you want to attach the event
 to using document.querySelector or similar methods.
 Once you have selected the element,
 you can attach an event listener to it using the addEventListener method. This method takes two arguments:
 the name of the event you want to listen for, and the function that you want to execute when the event occurs.

 Here is an example of how to attach a click event listener to a button element:

 **/

const myButton = document.querySelector('#my-button');
myButton.addEventListener('click', () => {
    // code to execute when the button is clicked
});

/**
 * Overall, DOM events provide a powerful way to add interactivity to web pages and create dynamic user experiences.
 * By using events and event listeners, you can create responsive,
 * interactive web pages that can respond to user actions in real time.
  */
