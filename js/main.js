$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        lazyLoad: true,
        navText: ['Prev', 'Next'],
        responsive: {
            0:{
                dots: false,
                items: 1,
                slideBy: 1,
                autoHeight: true
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
});