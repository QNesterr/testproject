$(document).ready(function() {
//-----------------------------------------------------------------------------
//        ОСНОВНОЕ МЕНЮ
    var AnimationIsGoing = false;
    $('.menu-button').click(function() {
        if (AnimationIsGoing == false) {
            AnimationIsGoing = true;

            $('#side-bar').animate({
                left: '0px'
            }, 800, 'easeInOutCubic');
            
            $('#menu-panel').fadeToggle(400, 'swing');
            setTimeout(function() {AnimationIsGoing = false;}, 800);
        }
    });
    $('#side-bar').on('swipeleft', function() {
        if (AnimationIsGoing == false) {
            AnimationIsGoing = true;

            $('#side-bar').animate({
                left: '-260px'
            }, 800, 'easeInOutCubic');
            
            $('#menu-panel').fadeToggle(1000, 'swing');
            setTimeout(function() {AnimationIsGoing = false;}, 800);
        }
    });

//-----------------------------------------------------------------------------
//        ЗАКЛАДОЧКИ
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

//-----------------------------------------------------------------------------
//        СКРОЛЛ ЭФФЕКТ ДЛЯ ВЕРХНЕЙ ПАНЕЛИ
    $('#menu-panel').scroolly([
                {
                    from: 'doc-top + 100el',
                    to: 'doc-bottom',
                    direction: 1,
                    css: {
                        //'-transition': 'all 0.5s',
                        top: '-50px'
                    }
                },
                {
                    from: 'doc-top',
                    to: 'doc-bottom',
                    direction: -1,
                    css: {
                        //'-transition': 'all 0.5s',
                        top: '0px'
                    }
                }
            ]);
});
