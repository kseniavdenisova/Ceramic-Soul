import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import JustValidate from 'just-validate';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css';

import '/src/sass/style.scss';

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});

try {
    // init Swiper:
    new Swiper('.works__slider', {
        // configure Swiper to use modules
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            // when window width is >= 1920px
            1920: {
                slidesPerView: 3,
                spaceBetween: 35,
            }
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "block";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
} catch (e) { }

// Обратите внимание, что значение block (в двух местах) можно спокойно поменять на flex, если вам это необходимо

try {
    const gitValidator = new JustValidate('.git form');

    gitValidator
        .addField('#git__name', [
            {
                rule: 'required',
                errorMessage: 'Please, enter your name',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Min 2 char!',
            },
        ])
        .addField('#git__email', [
            {
                rule: 'required',
                errorMessage: 'Please, enter your email',
            },
            {
                rule: 'email',
                errorMessage: 'Enter a valid email (example@gmail.com)',
            },
        ])
        .addField('#git__question', [
            {
                rule: 'required',
                errorMessage: 'Please, enter your question',
            },
            {
                rule: 'minLength',
                value: 5,
                errorMessage: 'Min char 5!',
            },
        ], {
            errorsContainer: document.querySelector('#git__question').parentElement.querySelector('.error-message'),
        })
        .addField('#git__checkbox', [
            {
                rule: 'required',
                errorMessage: 'Please, check the box',
            },
        ], {
            errorsContainer: document.querySelector('#git__question').parentElement.parentElement.querySelector('.checkbox-error-message'),
        })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(data => {
                console.log('Success', data);
                form.reset();
            });
        });
} catch (e) { }

try {
    const footerValidator = new JustValidate('.footer form');

    footerValidator
        .addField('#footer__email', [
            {
                rule: 'required',
                errorMessage: 'Enter a valid email (example@gmail.com)',
            },
            {
                rule: 'email',
            },
        ], {
            errorsContainer: document.querySelector('#footer__email').parentElement.querySelector('.error-message'),
        })
        .addField('#footer__checkbox', [
            {
                rule: 'required',
                errorMessage: 'Please, check the box',
            },
        ], {
            errorsContainer: document.querySelector('#footer__checkbox').parentElement.parentElement.querySelector('.checkbox-error-message'),
        })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(data => {
                console.log('Success', data);
                form.reset();
            });
        });
} catch (e) { }