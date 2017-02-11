$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive:{
        0:{
            dots: false,
            items: 1,
            slideBy: 1
        },
        768:{
            items: 2,
            slideBy: 2
        },
        992:{
            items: 4,
            slideBy: 4
        }
    }
});

$('.owl-prev').text('Prev');
$('.owl-next').text('Next');