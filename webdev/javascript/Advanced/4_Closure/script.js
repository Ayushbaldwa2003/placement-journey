function adder(x) {
    function add(y) {
        console.log(x + y);
    }
    return add;
}

const add5=adder(5)
add5(10) // 15
add5(20) // 25