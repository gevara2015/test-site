;
$(function(){
    $('.main-menu a').on('click', function() {
        event.preventDefault();

        $('html,body').animate({scrollTop:$(this.hash).offset().top - 75}, 700, 'linear');
        return false;
    });

    $('.logotype a').on('click', function() {
        event.preventDefault();
        $('.main').slideToggle();
        return false;
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('header').addClass('sticky');
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll - 20) {
                    $('.main-menu a.active').removeClass('active');
                    $('.main-menu a').eq(i).addClass('active');
                }
            });

        } else {

            $('header').removeClass('sticky');
            $('.main-menu a.active').removeClass('active');
            $('.main-menu a:first').addClass('active');
        }

    }).scroll();

    $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
        event.preventDefault(); // Prevent the default action from occurring
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'easeInSine'); // Animate the scroll to this link's href value
    });

    $('.explore').on('click', function(){
        $('.pieces').toggleClass("logo");
    });

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.articles').slick({
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.testimonials-list').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });


    var wHeight = $(window).height();

    //$('.main').height(wHeight);
    //$('#start').height(wHeight);

});