

/* clicco e aggiungo la classe avtive all hamburger menus */
$(function(){
    $('.header-right > a').click(function(){
        $('.hamburger-menu').addClass('active');
    });

    /* clicco su close  */
    $('.close').click(function(){
        /* tolgo la classe active dall'hamburger menu */
        $('.hamburger-menu').removeClass('active');
    });
});






