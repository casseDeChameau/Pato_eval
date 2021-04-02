//? scrollspy
window.addEventListener('scroll', () => {
    let currentscroll = scrollY;
    if (currentscroll > 200) {
        $('.header').addClass('on-scroll');
    } else {
        $('.header').removeClass('on-scroll');
    }
});
//? burger panel
$('.burger-menu').click(() => {
    console.log('clic');
    $('.header').addClass('show-panel');
});
$('.cross').click(() => {
    $('.header').removeClass('show-panel')
});
//? logo redirection
$('.logo').click(() => {
    window.location = 'index.html'
});
//? plugin parallax
if (window.location == 'index.html') {
    $('.parallax-banner').parallax({
        naturalWidth: '100%',
        positionX: '0'
    });
}

// ? plugin lightbox 
$('.vid-popup').magnificPopup({
    type: 'iframe'
});

$('.grid').magnificPopup({
    items: [{
            src: '../img/photo-gallery-01.jpg'
        },
        {
            src: '../img/photo-gallery-02.jpg',
        },
        {
            src: '../img/photo-gallery-03.jpg',
        },
        {
            src: '../img/photo-gallery-04.jpg',
        },
        {
            src: '../img/photo-gallery-05.jpg',
        },
        {
            src: '../img/photo-gallery-06.jpg',
        },
        {
            src: '../img/photo-gallery-07.jpg',
        },
        {
            src: '../img/photo-gallery-08.jpg',
        },
        {
            src: '../img/photo-gallery-09.jpg',
        }
    ],
    gallery: {
        enabled: true
    },
    type: 'image'
});