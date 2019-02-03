// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';
// * --- IMPORTING OTHER JS FILES --- * \\
const $ = require('jquery');

// MAKING BACKGORUND OF THE HEADER DARKER ON SCROLL | SETUP \\
$(document).ready(function() {
    $(window).scroll(function() {
        $('.header').css("opacity", 1 - $(window).
            scrollTop() / 850)
    });
});