// Callbacks

/*
 - Any function that is passed to another functions is called
 a callback function.
 - The functions which accepts a callback function as an argument
 or returns a function are called higher order functions
 */

// Synchronous vs. Asynchronous Callbacks

// Synchronous callbacks

const greet = (name) => console.log(`Hello ${name}!`);
const greetWorld = (greet) => {
    const name = 'World';
    greet(name);
}

greetWorld(greet);

// Asynchronous callbacks
const greetAsync = (name) => {
    setTimeout(() => {
        console.log(`Hello ${name}!`);
    }, 2000);
}
greetAsync('Jessé');