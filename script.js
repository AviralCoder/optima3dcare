const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 100,
glare:true,
"max-glare":1,
});

VanillaTilt.init(document.querySelectorAll(".testimonial"), {
    max: 10,
    speed: 100,
glare:true,
"max-glare":1,
});

const close = document.querySelector(".window__close")
close.addEventListener('click', () => {
    document.querySelector(".window").style.display = 'none'
    document.querySelector(".rakshak").textContent = "Click me to get it back!"
    document.querySelector(".rakshak").style.cursor = 'pointer'
    document.querySelector(".rakshak").addEventListener("click",()=>{
        document.querySelector(".window").style.display = 'block'
        document.querySelector(".rakshak").textContent = "Introducing InsuRakshak"
    })
})