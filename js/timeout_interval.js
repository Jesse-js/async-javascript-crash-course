//Timeouts and intervals
//setTimeout
const greet = (name) => console.log(`Hello ${name}!`);
const timeOutId = setTimeout(greet, 2000, 'Jessé');// the first argument is the function and the second is the delay
clearTimeout(timeOutId);// clears the timeout


//setInterval
const intervalId = setInterval(greet, 2000, 'Jessé');
clearInterval(intervalId);// clears the interval