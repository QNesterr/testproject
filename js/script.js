$(document).ready(function() {
    // ДЛЯ ЗАКЛАДОЧЕК -------------------------
    $('.tab').click(function() {
        if ($(this).css('left') == '-160px') {
            $(this).animate({
                left: '-10px'
            }, 800, 'easeInOutCubic');
        } else {
            $(this).animate({
                left: '-160px'
            }, 800, 'easeOutBounce');
        }
    });
    $('.tab').on('swipeleft', function() {
        $(this).animate({
            left: '-160px'
        }, 800, 'easeOutBounce');
    });
     // ------------------------------------
    // ДЛЯ МЕНЮ -------------------------------
    $('.menu-button').click(function() {
        $('.menu').animate({
            left: '0px'
        }, 800, 'easeInOutCubic');
        $('.menu-button').fadeToggle(500, 'swing');
    });
    $('.menu').on('swipeleft', function() {
        $('.menu').animate({
            left: '-230px'
        }, 800, 'easeInOutCubic');
        $('.menu-button').fadeToggle(500, 'swing');
    });
    // ----------------------------------------
});