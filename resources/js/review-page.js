// MAKING BACKGORUND OF THE HEADER DARKER ON SCROLL | SETUP \\
$(document).ready(function() {
    $(window).scroll(function() {
        $('.header').css("opacity", 1 - $(window).
            scrollTop() / 850)
    });
});

// RATING PROGRESS BAR | SETUP \\
$(function() {
    $('.rating').easyPieChart ({
        // OPTION
    });
});

// GALLERY | SETUP \\
$(document).ready(function() {

    // SCREENSHOT SLIDER - CIRCLE 1
    $(".menu__shot--1").click(function() {
        $(".menu ul li:nth-child(2)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(3)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(4)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(5)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(6)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(1)").css('box-shadow', '0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(231, 76, 60, 1)');

        setTimeout(function() {
            showImage(1);
        }, 6);

        slideMove();

    });


    // SCREENSHOT SLIDER - CIRCLE 2
    $(".menu__shot--2").click(function() {
        $(".menu ul li:nth-child(1)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(3)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(4)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(5)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(6)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(2)").css('box-shadow', '0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(231, 76, 60, 1)');

        setTimeout(function() {
            showImage(2);
        }, 6);

        slideMove();

    });

    // SCREENSHOT SLIDER - CIRCLE 3
    $(".menu__shot--3").click(function() {
        $(".menu ul li:nth-child(1)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(2)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(4)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(5)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(6)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(3)").css('box-shadow', '0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(231, 76, 60, 1)');

        setTimeout(function() {
            showImage(3);
        }, 6);

        slideMove();

    });

    // SCREENSHOT SLIDER - CIRCLE 4
    $(".menu__shot--4").click(function() {
        $(".menu ul li:nth-child(1)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(2)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(3)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(5)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(6)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(4)").css('box-shadow', '0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(231, 76, 60, 1)');

        setTimeout(function() {
            showImage(4);
        }, 6);

        slideMove();

    });

    // SCREENSHOT SLIDER - CIRCLE 5
    $(".menu__shot--5").click(function() {
        $(".menu ul li:nth-child(1)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(2)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(3)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(4)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(6)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(5)").css('box-shadow', '0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(231, 76, 60, 1)');

        setTimeout(function() {
            showImage(5);
        }, 6);

        slideMove();

    });

    // SCREENSHOT SLIDER - CIRCLE 6
    $(".menu__shot--6").click(function() {
        $(".menu ul li:nth-child(1)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(2)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(3)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(4)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(5)").css('box-shadow', 'none');
        $(".menu ul li:nth-child(6)").css('box-shadow', '0 0 0 3px rgba(0,0,0,1), 0 0 0 5px rgba(231, 76, 60, 1)');

        setTimeout(function() {
            showImage(6);
        }, 6);

        slideMove();

    });
    
    // Function That Changes Images on Click
    function showImage($n) {
        $(".section-gallery__image").attr('src', 'resources/images/shot-' +$n+ '.jpg');
    }

   /* function slideMove() {
        $(".black-layer").animate({left: '-150%'}, 1300, 'swing', function() {
            $(".black-layer").css('left', '100%');
        });

        $(".red-layer").animate({left: '-170%'}, 1400, 'swing', function() {
            $(".red-layer").css('left', '100%');
        });
    } */

});