function getData() {
    for (let i = 0; i < 1000000000; i++) {

    }
    let data=[1,2,3,4,5,6,7,8,9,10];
    return data;
}

//synchronous function is a function that will block the execution of the code until it is completed, it will not run in the background and it will wait for the function to complete before moving to the next line of code

console.log("requesting data");
let response = getData();
console.log("got the response" );
console.log(response);

//setTimeout is a asynchronous function, it will not block the execution of the code, it will run in the background and after the specified time it will execute the callback function
//callback function is a function that is passed as a parameter to another function and it will be executed after the specified time or after a specified task is completed
// setinterval is a asynchronous function, it will not block the execution of the code, it will run in the background and after the specified time it will execute the callback function repeatedly until clearInterval is called

// console.log("Starting 5s delay");
// setTimeout(() => console.log("done with th delay"),5000
// );
// console.log("Asynchronous behaviour");

// let id= setInterval(() => console.log("done with th delay"),1000);
// setTimeout(() => clearInterval(id), 10000);
