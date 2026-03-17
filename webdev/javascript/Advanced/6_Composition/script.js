function add(a,b){
    return a + b;
}
function square(x){
    return x * x;
}
function multiply(a,b){
    return a * b;
}

function compose(...functions) {
    return function (...args) {
        let result = functions[functions.length - 1](...args);

        for (let i = functions.length - 2; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    }
}


// Modern JavaScript implementation of compose function
// const compose = (...functions) => (...args) =>
//   functions.reduceRight(
//     (result, fn) => [fn(...result)],
//     args
//   )[0];

const multiplyThenSquare = compose(square, multiply);
console.log(multiplyThenSquare(2,3)); // Output: 36
// function composetwo(f,g){
//     return function(a,b){
//         return f(g(a,b));
//     }
// }
// const addThenSquare = composetwo(square, add);
// const addThenMultiply = composetwo(multiply, add);
// console.log(addThenMultiply(2,3)); // Output: 36
// console.log(addThenSquare(2,3)); // Output: 25