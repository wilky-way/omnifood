$(document).ready(function () {

    /* For The Sticky Nav*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            /* When user scrolls down, it switches nav*/
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        //scrolls with a speed of one second to the plans section
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        //scrolls with a speed of one second to the plans section
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000)
    })

    /* Navigation Scroll*/
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});