// Mobile hamburger menu icon js
var burger = document.querySelector('.burger__menu');
var menu = document.querySelector('.mobile__menu');
var navBar = document.querySelector('header')
let menuOn = false;
burger.addEventListener('click', ()=>{
    if (menuOn == false) {
        burger.classList.add('open');
        menu.classList.add('open');
        navBar.style.backgroundColor = 'white';
        menuOn = true;
    }else{
        burger.classList.remove('open');
        menu.classList.remove('open');
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.787)';
        menuOn = false;
    }
})

//------------- Image Slider -------------//
const sliderContainer = document.querySelector('.image_slider .slide_container');
const sliders = document.querySelectorAll('.image_slider .img_box');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
