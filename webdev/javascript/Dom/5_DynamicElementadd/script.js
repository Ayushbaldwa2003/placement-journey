const div=document.getElementById('output');
const button=document.getElementById('btn');
button.addEventListener('click',()=>{
    const p=document.createElement('p');
    p.textContent='This is a new paragraph.';
    div.appendChild(p);
})