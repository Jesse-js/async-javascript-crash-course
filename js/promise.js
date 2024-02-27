const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise rejected!');
    }, 2000);

    // setTimeout(() => {
    //     resolve('Promise resolved!');
    // }, 2000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
//A promise can be chained as you can see above

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved!');
    }, 500);
});

//Promise static methods
//Promise.all([promise, promise2]).then(result => console.log(result));
//Promise.allSettled([promise, promise2]).then(result => console.log(result));
//Promise.race([promise, promise2]).then(result => console.log(result));
