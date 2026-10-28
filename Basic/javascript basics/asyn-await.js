const isEven = (num) => new Promise((resolve, reject) => {
    console.log("Checking the num is even or not");
    if(num % 2 ===0){
        resolve(num+"  is an even number");
    }
    else{
        reject(num+" is an odd number");
    }
})

async function promiseChaining(){
    try
    {  
        const resp1 = await isEven(6);
        console.log(resp1);
        const resp2 = await isEven(89);
        console.log(resp2);
        const resp3 = await isEven(60);
        console.log(resp3);    
    }
    catch (exception){
    console.log("Something went wrong");
    
    }
}
//async function is used to handle the promise chaining and await is used to wait for the promise to resolve or reject before moving to the next line of code. The try-catch block is used to handle any errors that may occur during the execution of the promises.
// exception is a variable that will hold the error message if any error occurs during the execution of the promises.