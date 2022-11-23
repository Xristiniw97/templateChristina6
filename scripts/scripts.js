// MENU
var menu = document.querySelector(".nav_wrap");
menu.style.visibility = "hidden";
menu.style.opacity = "0";
menu.style.display = "none";
var burgerBtn = document.querySelector(".burger_nav");
burgerBtn.addEventListener("click", activateMenu);

function activateMenu() {
  if (burgerBtn.className.indexOf("open") > -1) {
    burgerBtn.classList.remove("open");
    burgerBtn.classList.add("close");
    document.body.classList.remove("lock-scroll");
    console.log("menu-close");
  } else {
    burgerBtn.classList.remove("close");
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.display = "flex";
    burgerBtn.classList.add("open");
    document.body.classList.add("lock-scroll");
    console.log("menu-open");
  }
}
// MENU

//FOR HEADER AND SCROLL TO TOP BUTTON
window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  let el_header = document.querySelector("header");
  if (scroll > 50) {
    el_header.classList.add("headerBg");
  } else {
    el_header.classList.remove("headerBg");
  }
});

//FOR HEADER AND SCROLL TO TOP BUTTON

// SWIPER CAROUSELS
var swiper1 = new Swiper(".leftSwiper", {
  speed:1500,
  loop: true,
  pagination: {
    el: ".leftSwiper .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiper2 = new Swiper(".rightSwiper", {
  speed:1500,
  loop: true,
  pagination: {
    el: ".rightSwiper .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiper3 = new Swiper(".roomsSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".roomsSwiper .swiper-button-next",
    prevEl: ".roomsSwiper .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    waitForTransition: true    
  },
  speed:1500,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});

var swiper4 = new Swiper(".offersSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".offersSwiper .swiper-button-next",
    prevEl: ".offersSwiper .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    waitForTransition: true    
  },
  speed:1500,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper5 = new Swiper(".reviewsSwiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed:500,
  loop: true,
  navigation: {
    nextEl: ".reviewsSwiper .swiper-button-next",
    prevEl: ".reviewsSwiper .swiper-button-prev",
  }
});

var swiper6 = new Swiper(".awardsSwiper .swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".awardsSwiper .swiper-button-next",
    prevEl: ".awardsSwiper .swiper-button-prev",
  },
  autoplay: {
      delay: 5000,
      waitForTransition: true    
  },
  speed:1500,
  loop: true,
  breakpoints: {
      576: {
      slidesPerView: 3,
      spaceBetween: 20,
      },
      1199: {
      slidesPerView: 5,
      spaceBetween: 20,
      },
  },
});
// SWIPER CAROUSELS


