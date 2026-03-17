const button = document.getElementById('btn');
button.addEventListener('click', function() {
    const inputValue = document.getElementById('input').value;
    document.getElementById('input').value = '';
    const username = document.getElementById('username');
    username.innerText = inputValue;
    username.style.color = 'red';
});
// console.log(document.querySelector('body').children);
const childrens =document.querySelector('body').children;
for(let i = 0; i < childrens.length; i++) {
    childrens[i].addEventListener('click', function() {
        childrens[i].remove();
    });
};