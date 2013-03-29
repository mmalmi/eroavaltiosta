$(document).ready(function(e) {
    $("nav a").smoothScroll();

    var offset = -120;
    if($(window).width() < 768)
        offset = 0;

    $(window).scroll(updateNav);
    $(window).resize(updateNav);
    updateNav();
});

function updateNav()
{
    var width = $(window).width();
    var pos = $(window).scrollTop();

    if(width > 767) {

        if(pos > 280) {
            if(width <= 1050)
                $('nav').css({position: "absolute", top: pos + "px"});
            else
                $('nav').css({position: "fixed", top: "0px"});
        } else
            $('nav').css({position: "absolute", top: "280px"});

    } else {
        $('nav').css({position: "relative", top: "0px"});
    }
}