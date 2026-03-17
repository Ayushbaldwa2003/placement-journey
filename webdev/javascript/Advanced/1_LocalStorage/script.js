const button = document.getElementById('btn');
const nameInput = document.getElementById('input');
const body=document.querySelector('body');

button.addEventListener('click', () => {
    const name = nameInput.value;
    localStorage.setItem('name', name);
    location.reload();
});

window.addEventListener('load', () => {
    const name = localStorage.getItem('name');
    const el=document.createElement('h1');
    if(name){
        el.textContent=`Welcome ${name}`;
        body.appendChild(el);
    }
});