let answer=add2(1,2,3,4,5,5,6)
console.log(answer)

// ... spread operators
function add(... number){
    let sum=0
    for(let num of number){
        sum+=num
    }
    return sum
}


function add2(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}