const isEven = (num) => new Promise((resolve, reject) => {
    console.log("Checking the num is even or not");
    if(num % 2 ===0){
        resolve(num+"  is an even number");
    }
    else{
        reject(num+" is an odd number");
    }
})

// isEven(25)
// .then(resp => console.log(resp))
// .catch( err => console.log(err))
// .finally(() => console.log("Checking is completed"))


// nested promises are promises that are returned from another promise. They are used to handle multiple asynchronous operations in a sequential manner. The outer promise is resolved or rejected based on the inner promise's state.

// nested prommises

isEven(20)
.then( resp => {
    console.log(resp);
    return isEven(89);
})
.then(resp => {
    console.log(resp);
    return isEven(60);
})
.catch( err => {
    console.log(err);
})
.finally( () => {console.log("Checking is completed");
})