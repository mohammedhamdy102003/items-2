var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable:true
    },
    autoplay:{
        delay:2000,
    },
    loop:true,
  });
  var swiper = new Swiper(".sale-sac", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable:true
    },
    slidesPerView:5,
    spaceBetween:30,
    autoplay:{
        delay:2000,
    },
    loop:true,
    breakpoints:{
      1600:{
        slidesPerView:5,

      },
      1200:{
        slidesPerView:4,
        spaceBetween:30,

      },
      800:{
        slidesPerView:3,
        spaceBetween:15,

      },
      700:{
        slidesPerView:3,
        spaceBetween:15,

      },
      0:{
        slidesPerView:2,
        spaceBetween:10,

      },
    }
  });

  var swiper = new Swiper(".product_swip", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable:true
    },
    slidesPerView:4,
    spaceBetween:30,
    autoplay:{
        delay:2000,
    },
    loop:true,
  });