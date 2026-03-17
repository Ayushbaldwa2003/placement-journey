// synchronous task are executed in order, one at a time
// asynchronous task are executed in any order, as they complete    
// fetch is a built-in function that allows you to make network requests and returns a promise
// promises are used to handle asynchronous operations in JavaScript


//                   code:--
// let a=10;
// let b=20;
// let result=a+b;
// async function fetchData() {
//     const data=await fetch('https://jsonplaceholder.typicode.com/posts');
//     const fetchdata=await data.json();
//     console.log(fetchdata);
//     const body=document.querySelector('body');
//     const p=document.createElement('p');
//     p.textContent=fetchdata;
//     body.appendChild(p);
// }

// fetchData();
// console.log(result);

// 30 is printed before the data is fetched and logged to the console, because fetchData is an asynchronous function and it does not block the execution of the next line of code.
// .then() is a method that is used to handle the resolved value of a promise. It takes a callback function as an argument, which is executed when the promise is resolved. The callback function receives the resolved value as an argument.




fetch('https://jsonplaceholder.typicode.com/posts')
.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);});

// the .catch() method is used to handle any errors that may occur during the fetch operation. If the fetch operation fails, the error will be caught and logged to the console.
// .finally() is a method that is used to execute a callback function regardless of whether the promise is resolved or rejected. It is often used for cleanup operations or to perform actions that should happen after the promise has been settled, regardless of the outcome.