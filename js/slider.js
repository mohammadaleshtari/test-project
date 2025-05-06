
  var swiper = new Swiper(".custom-slider", {
    slidesPerView: 5,
    spaceBetween: 25,
    
    loop: true,
    pagination: {
      el: ".custom-slider .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

