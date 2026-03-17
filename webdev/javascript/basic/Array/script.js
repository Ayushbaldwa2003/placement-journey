// In Javascript arrays are heterogeneous
const students=['Ayush','Piyush','John','Dell']
students[2]='Alice'

// students=['aaa'] 
// This will give an error

students.push('John')
students.push(2)
students.push({name:'Ayush Baldwa'})
// console.log(students.indexOf('John'))
students.pop()
// console.log(students)

function print(name){
    console.log(name)
}
// students.forEach(function(val){
//     console.log(val)
// })

// students.forEach(print)

// students.forEach((val)=>{console.log(val)})
// students.map((val)=>{console.log(val)})


//   Note:-
// For each does not return anything but map returns an array

// Q.)Double each value of an array

const marks=[1,2,3,4,5,6]
// let newarray=marks.map(double)
// function double(val){
//     return val*2
// }
// console.log(newarray)


let ans=marks.find((num)=> num==4)
let ans2=marks.findIndex((num)=>num==1)
console.log(ans)
console.log(ans2)


// let newarray=marks.filter(function(num){
//     return  num%2==0
// })
// let newarray=marks.filter(num=>num%2==0)
// console.log(newarray)

let newarray=marks.slice(0,4)
console.log(newarray)

let newarray2=marks.splice(1,4)
console.log(newarray2)
console.log(marks)

//        Note:- 
// slice does not modify the array but splice modifies the array