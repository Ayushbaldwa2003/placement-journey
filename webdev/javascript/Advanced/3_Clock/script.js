// Settimeout() is used to call a function after a specified delay, while setInterval() is used to call a function repeatedly at specified intervals. In this example, we will use setInterval() to create a clock that updates every second.
function showTime() {
    var date = new Date();
    var h=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.getElementById("time").innerHTML = h;
}

setInterval(showTime, 1000);
