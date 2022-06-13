
// document.addEventListener('DOMContentLoaded', function() {
new Swiper('.gallery__slider', {
  navigation: {
      nextEl: '.gallery__arrow_next',
      prevEl: '.gallery__arrow_prev',
    },

  loop: false,
  slidesPerView: 1,
  spaceBetween: 34,
  slidesPerGroup: 1,
  allowTouchMove: true,



  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    420: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      allowTouchMove: false,
    },

    1240: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});

new Swiper('.events__slider', {


  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.events__arrow_next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // type: 'fraction',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {

    720: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    // 740: {
    //   slidesPerView: 1,
    //   spaceBetween: 27,
    //   slidesPerGroup: 1,
    // },

    940: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1240: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

  new Swiper('.projects__swiper', {
    navigation: {
        nextEl: '.project__arrow_next',
        prevEl: '.project__arrow_prev',
      },

    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,



    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {

      440: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 1,
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 1,
      },



      1440: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });
    // });

// const slider = document.querySelector('.gallery__box-swiper');

// const swiper = new Swiper(slider, {
//   loop: true,
//   spaceBetween: 50,
//   slidesPerView: 3,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     type: 'fraction',

//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

























  // const sliders = document.querySelectorAll('.swiper');

  // sliders.forEach((el) => {
  //   let mySwiper = new Swiper(el, {
  //     slidesPerView: 3,
  //     spaceBetween: 50,

  //     pagination: {
  //       el: el.querySelector('.swiper-pagination'),
  //       clickable: true,
  //       type: 'fraction',
  //     },

  //     navigation: {
  //       nextEl: el.querySelector('.swiper-button-next'),
  //       prevEl: el.querySelector('.swiper-button-prev'),
  //     },

  //   loop: true,

  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  //   })
  // })


            // breakpoints: {
        //   320: {
        //     slidesPerView: 1,
        //   },
        //   1800: {
        //     slidesPerView: 2,
        //   }
        // },
