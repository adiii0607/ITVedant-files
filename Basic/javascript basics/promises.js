//promise is a fuction that takes a callback function as an argument and returns a promise object. The promise object has three states: pending, fulfilled, and rejected. The callback function takes two arguments: resolve and reject. The resolve function is called when the promise is fulfilled, and the reject function is called when the promise is rejected.

const egg = new Promise((resolve, reject) => {
    console.log("its an egg");
    resolve("its a chick");
    reject("it,s a broken egg");
});

egg
.then(resp=> console.log(resp))
.catch(err => console.log(err))
.finally(() => console.log("Finally is executed"));
    