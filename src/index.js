// import 'normalize.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.slider-teacher', {
    // configure Swiper to use modules
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      500: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

    },
  });

  // Accordion

var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   }
 });
}

