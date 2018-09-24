
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