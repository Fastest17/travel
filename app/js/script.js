$(document).ready(function(){

    //slider 1
    $('.slider_1').slick({
        arrows: true,
        prevArrow: $('#btn-prev'),
        nextArrow: $('#btn-next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    //slider 2
    $('.slider_2').slick({
        arrows: true,
        prevArrow: $('#btn-prev2'),
        nextArrow: $('#btn-next2'),
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    //back to up
    let $btnTop = $('.btn-top');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 500) {
            $btnTop.fadeIn();
        } else {
            $btnTop.fadeOut();
        }
    });
    
    $btnTop.on('click', function(){
        $('html, body').animate({scrollTop: 0}, 900);
    });

    //mob-menu
    var menuBtn = $('#menu');
    var menu = $('.main_menu');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('main_menu_responsive');
    });

    //animations
    $(".form").animated("bounceIn");
    $(".best_sellers_desc").animated("fadeInLeft");
    $(".video_desc").animated("fadeInRight");
    $(".service_item").animated("flipInX");
    $(".world_desc").animated("fadeInLeft");
    
});

