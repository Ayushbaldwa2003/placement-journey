function add(a,b,cb){
    let result=a+b
    cb(result)

    return ()=>console.log(result)
    // return function showanswer(){
    //     console.log(result)
    // }
}

function showresult(result){
    // console.log(result)
}

const answer=add(2,5,showresult)
answer()