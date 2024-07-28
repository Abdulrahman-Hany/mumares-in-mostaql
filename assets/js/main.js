/* =============== toggle mnue ===============  */
let showMenu = (toggleId, navId) =>{
    let toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    })
 }
 showMenu('nav-toggle','nav-menu');

 /* =============== Buttom-whatsapp =============== */
let buttonWhatsapp = document.querySelector(".whatsapp-btn-container");
window.addEventListener("scroll", () => {
    if(window.scrollY >= 520){
        buttonWhatsapp.style.display = "block";
    }else {
        buttonWhatsapp.style.display = "none";
    }
});
/* =============== Buttom-popup =============== */
let openPopup = document.querySelector('.open-popup');
let popupButton = document.querySelector('.popup .button');
openPopup.addEventListener('click', function(){
    document.body.classList.add('active-popup');
})
popupButton.addEventListener('click', function(){
    document.body.classList.remove('active-popup');
})

/* =============== heaber Scroll - background =============== */
window.addEventListener("scroll", function(){
    let heaber = document.querySelector("header");
    heaber.classList.toggle("sticky", window.scrollY > 0);
})
/* =============== Gsap JS =============== */
gsap.from(".logo-imag", {
    opacity:0,
    y:-10,
    delay:1,
    duration:.5
})
gsap.from(".navbar ul li a", {
    opacity:0,
    y:-10,
    delay:1,
    duration:.5,
    stagger:.3
})
gsap.from(".icons a", {
    opacity:0,
    y:-10,
    delay:1,
    duration:.5,
    stagger:.3
})
gsap.from(".home ", {
    opacity:0,
    y:30,
    delay:2,
    duration:.9,
    stagger:.3
})
gsap.from(".mouse-btn ", {
    opacity:0,
    delay:2,
    duration:.9,
    stagger:.3
})
gsap.from(".navbar ul i", {
    opacity:0,
    delay:2,
    duration:.5,
    stagger:.3
})

/*========== slider-Work-Team ==============*/
let carousel = document.querySelector('.carousel');
let arrowBtns = document.querySelectorAll('.wrapper i');
let firstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false;
let startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});
carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("draggable");
    startX = e.pageX - carousel.offsetLeft;  
    startScrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.classList.remove("draggable");
});
carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("draggable");
});
carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; 
    carousel.scrollLeft = startScrollLeft - walk;
});