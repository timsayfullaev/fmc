$(document).ready(function(){
    $('.intro__slider').slick({
        prevArrow: '<button type="button" class="intro__arrow intro__arrow_left"><img src="icons/rounded_rectangle_1_copy_2_197.png" alt="rounded_rectangle_1_copy_2_197"></button>',
        nextArrow: '<button type="button" class="intro__arrow intro__arrow_right"><img src="icons/rounded_rectangle_1_copy_196.png" alt="rounded_rectangle_1_copy_196"></button>',
        appendArrows: $('.intro__wrapper'),
        dots: true,
        dotsClass: 'intro__dots',
        appendDots: $('.intro__wrapper'),
        fade: true
    });

    $('.solution__navigation').slick({
        slidesToShow: 6,
        asNavFor: '.solution__slider',
        focusOnSelect: true
    });
    $('.solution__slider').slick({
        prevArrow: '<button type="button" class="solution__arrow solution__arrow_left"><img src="icons/rounded_rectangle_7_copy_3_285.png" alt="rounded_rectangle_7_copy_3_285"></button>',
        nextArrow: '<button type="button" class="solution__arrow solution__arrow_right"><img src="icons/rounded_rectangle_7_copy_284.png" alt="rounded_rectangle_7_copy_284"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true,
                dotsClass: 'intro__dots',
            }
            }
        ]
    });
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.nav'),
    menuClose = document.querySelector('.nav__close'),
    menuLink = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('nav_active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('nav_active');
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
});