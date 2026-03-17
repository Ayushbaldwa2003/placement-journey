// function sayHello(){
//     console.log('Hello')
// }


//                Note :- Arrow Function
// const sayHello2 = ()=>{
//     console.log('hello')
// }

//                 Notes :- oneliner function
// const add=(a,b)=> a+b
// // Arrow fuction with parameters
// const add2=(a,b)=>{
//     return a+b
// }

// let answer=add(2,3)
// console.log(answer)


//                    Notes:-
// 1. Arguments keyword is not allowed in arrwo function
// const mul=()=>{
//     console.log(arguments)
// }
// gives error because arguments keyword is not allowed in arrow function
// mul(1,2)

// use spread operator



//              Note:-Hoisting
 
// sayHi()
// function sayHi(){
//     console.log('hi')
// }


// This will through an error you have to call the function
// only after when you defined it
// sayHello()
// const sayHello=()=>{
//     console.log('hi')
// }


//         This Keyword

const myobject={
    value:20,
    myFunction : function(){
        console.log(this.value)
    },
}
myobject.myFunction()