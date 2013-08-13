var contentItems,
    pageHeight,
    prevItem;

$(document).ready(function(e) {
    var offset = -75;
    if($(window).width() < 768)
        offset = 0;
    var ssOptions = {offset: offset}
    $("nav a").smoothScroll(ssOptions);

    $(window).scroll(updateNav);
    $(window).resize(updateNav);
    updateNav();
});

$(window).load(function() {
  calculateOffsets();
    updateNav();
});

function calculateOffsets() {
  // Calculate content offsets
  contentItems = $('.navpage').map(function (i) {
      return $(this).offset().top;
  }).get();
}

function updateNav()
{
    pageHeight = $(window).height();
    var width = $(window).width();
    var pos = $(window).scrollTop();

    if(width > 767) {

        if(pos > 265) {
            if(width <= 1050)
                $('nav').css({position: "absolute", top: pos + "px"});
            else
                $('nav').css({position: "fixed", top: "0px"});
        } else
            $('nav').css({position: "absolute", top: "265px"});
        if(contentItems)
            handleScrollNavigation();

    } else {
        $('nav').css({position: "relative", top: "0px"});
    }
}

function handleScrollNavigation ()
{
    var scroll = $(window).scrollTop() + 1,
        progress = 0,
        percent = 0,
        activeItem;

    // Determine current content
    for (var n = 0; n < contentItems.length - 1 && scroll > contentItems[n]; n++);

    // Update navigation according to visible content
    if (contentItems[n] + pageHeight / 2 < scroll + pageHeight) {
        activeItem = n;
    } else {
        activeItem = n - 1;
    }

    if (activeItem != prevItem) {
        $('nav a').removeClass('active');
        $('nav a:eq(' + activeItem + ')').addClass('active');
        prevItem = activeItem;
    }
}