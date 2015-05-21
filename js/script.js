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
    // ----------------------------------------
    // ДЛЯ МЕНЮ -------------------------------
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
                left: '-230px'
            }, 800, 'easeInOutCubic');
            
            $('#menu-panel').fadeToggle(1000, 'swing');
            setTimeout(function() {AnimationIsGoing = false;}, 800);
        }
    });
    // ----------------------------------------
    // ДЛЯ СКРОЛЛ ЭФФЕКТОВ
    $('#menu-panel').scroolly([{
        from: 'doc-top',
        to: 'doc-top + 100el',
        cssFrom: {
            'height': '80px'
        },
        cssTo: {
            'height': '60px'
        }
    }]);
    $('.header-image').scroolly([{
        from: 'doc-top',
        to: 'doc-top + 100el',
        cssFrom: {
            'height': '80px',
            'margin-left': '100px'
        },
        cssTo: {
            'height': '60px',
            'margin-left': '55px'
        }
    }]);
    $('.menu-button').scroolly([{
        from: 'doc-top',
        to: 'doc-top + 100el',
        cssFrom: {
            'height': '60px',
            'width': '60px'
        },
        cssTo: {
            'height': '30px',
            'width': '30px'
        }
    }]);
    $('.menu-button hr').scroolly([{
        from: 'doc-top',
        to: 'doc-top + 100el',
        cssFrom: {
            'margin-top': '12px'
        },
        cssTo: {
            'margin-top': '6px'
        }
    }]);
    // ----------------------------------------
});