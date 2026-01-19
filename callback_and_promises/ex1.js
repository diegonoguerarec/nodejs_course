let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved!");
    }, 6000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second promise resolved!");
    }, 3000);
});

// myPromise1.then((message) => {
//     console.log(message);
//     myPromise2.then((message2) => {
//         console.log(message2);
//     });
// });

myPromise1.then((message) => {
    console.log(message);
});

myPromise2.then((message) => {
    console.log(message);
});