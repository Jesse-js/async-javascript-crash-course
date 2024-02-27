// Async and Await
/**
 * The async await keywords allow us
 * to write completely synchronous
 * looking code while performing asynchronous
 *  tasks behind the scenes
 */

const greet = async (name) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}!`);
    }, 1000);
  });

  console.log("Before greeting");

  let result = await promise;

  console.log(result);
};

const farewell = async (name) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Goodbye ${name}!`);
    }, 2000);
  });

  console.log("Before farewell");

  let result = await promise;

  console.log(result);
};

console.log("Hello, welcome!");
farewell("Jessé");
greet("Jessé");
console.log("Executing...");

//Sequential, concurrent and parallel
//1 - Sequential

function resolveHello(type, name, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${type} - Hello ${name}!`);
    }, time);
  });
}

function resolveFarewell(type, name, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${type} - Goodbye ${name}!`);
    }, time);
  });
}

async function sequentialStart() {
  let greeting = await resolveHello("Sequential execution", "Jessé", 1000);
  console.log(greeting);
  let farewell = await resolveFarewell("Sequential execution", "Jessé", 1000);
  console.log(farewell);
}

sequentialStart();

//2 - Concurrent

async function concurrentStart() {
  let greeting = resolveHello("Concurrent execution", "Jessé", 5000);
  let farewell = resolveFarewell("Concurrent execution", "Jessé", 500);
  console.log(await greeting);
  console.log(await farewell);
}

concurrentStart();

//3 - Parallel

async function parallelStart() {
  let greeting = resolveHello("Parallel execution", "Jessé", 2000);
  let farewell = resolveFarewell("Parallel execution", "Jessé", 1000);
  Promise.all([
    (async () => console.log(await greeting))(),
    (async () => console.log(await farewell))(),
  ]);
}

parallelStart();
