$(document).ready(function() { 
    const el = $('#nav-secondary');
    const s = $('#scroll');

    if ($(window).scrollTop() >= 300) {
        el.addClass('show');
        s.addClass('scroll');
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            el.addClass('show');
            s.addClass('scroll');
        } else {
            el.removeClass('show');
            s.removeClass('scroll');
        }
    });

    s.on('click', function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 1000);
    });
});