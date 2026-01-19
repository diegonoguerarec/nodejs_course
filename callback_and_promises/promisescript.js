// Creating a promise method 
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 6000)
});

console.log("Before calling the promise");

myPromise.then((successMessage) => {
    console.log("From callback: " + successMessage);
});

console.log("After calling the promise");