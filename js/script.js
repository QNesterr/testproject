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
            to: 'con-bottom - 100el = top',
            css: {
                position: 'fixed',
                top: '0px',
                bottom: ''
            }
        },
        {
            from: 'con-bottom - 100el = top',
            css: {
                position: 'absolute',
                top: '',
                bottom: '0px'
            }
        }
        ], $('#main'));

    //---------------------------
    setTimeout(function() {
        $('#color').fadeIn(1200);
    }, 3000);
    $('.note').click(function() {
        $(this).css({ 'background-color': '#fc89ac'});
        $('#color1').fadeIn(1000);
    });
});
