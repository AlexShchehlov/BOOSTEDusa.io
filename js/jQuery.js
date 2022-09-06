$(document).ready(function() {
    // SLIDER
    const owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items: 7,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    $('.btn-back').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    $('.btn-forward').click(function() {
        owl.trigger('next.owl.carousel');
    })

    // SMOOTH SCROLLING
    $("a.scrollto").click(function() {
        const elementClick = $(this).attr("href")
        const destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});