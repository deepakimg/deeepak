$(".testimonial-slider").owlCarousel({
    autoplay: false,
    dots: true,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 2
      },
      1199: {
        items: 2
      }
    }
  });

  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })

  $(document).ready(function () {
    $('.menu-bar a').on('click', function () {
      $('.header_nav').toggleClass('show-menu');
      $('body').toggleClass('open-menu');
    })
    $('.header_nav li a').on('click', function () {
      $('.header_nav').removeClass('show-menu');
      $('body').removeClass('open-menu');
    })
  });
  