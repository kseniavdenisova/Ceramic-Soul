import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '/src/sass/style.scss';

try {
    // init Swiper:
    new Swiper('.works__slider', {
        // configure Swiper to use modules
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
                spaceBetween: 35,
            }
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }
