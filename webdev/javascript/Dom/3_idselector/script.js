const body = document.body;
body.style.backgroundColor = "grey";
body.style.color = "white";
const username = document.getElementById("username");
username.innerText="Ayush Baldwa!!"
username.classList.add("red-color");
username.classList.add("underline");
username.style.color="blue";



const blocks = document.getElementsByClassName("block");
for(let block of blocks){
    block.remove();
}
