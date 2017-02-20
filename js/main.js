$(document).ready(function() {
    var cocktailImages = ['30.png', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '38.jpg', '37.png'];
    var clienteleImages = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
    var mixologyImages = ['17.png', '0.png', '15.png', '1.jpg', '2.jpg', '24.jpg', '3.jpg', '4.jpg', '5.jpg', '16.jpg', '6.png', '7.jpg', '8.png', '9.png', '10.png', '22.jpg', '11.jpg', '12.png', '13.jpg', '14.jpg', '18.jpg', '19.jpg', '20.png', '21.jpg', '23.jpg'];

    for (var i = 0; i < cocktailImages.length; i++) {
        $('#cocktails').append("<img class=\"owl-lazy img-rounded\" data-src=\"img/cocktails/" + cocktailImages[i] + "\">");
    }
    for (var i = 0; i < clienteleImages.length; i++) {
        $('#clientele').append("<img class=\"owl-lazy img-rounded\" data-src=\"img/clientele/" + clienteleImages[i] + "\">");
    }
    for (var i = 0; i < mixologyImages.length; i++) {
        $('#mixology').append("<img class=\"owl-lazy img-rounded\" data-src=\"img/mix/" + mixologyImages[i] + "\">");
    }
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
                //autoHeight: true
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