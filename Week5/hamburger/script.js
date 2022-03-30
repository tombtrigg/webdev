const btn=document.getElementById('button');
const nav=document.getElementById('nav');

btn.addEventListener('click',()=>{
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});