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
    console.log('click on burger');
    $('.header').addClass('show-panel');
});
$('.cross').click(() => {
        console.log('click on cross');
        $('.header').removeClass('show-panel')
    })
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
//? init
$(document).ready(function() {
    $('.image-link').magnificPopup({
        type: 'image'
    });
});

// ? plugin hp popup
$('.vid-popup').magnificPopup({
    type: 'iframe'
});
$('.grid').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
        // other options
});
$('.grid').magnificPopup({
    items: [{
            src: '../img/photo-gallery-01.jpg'
        },
        {
            src: '../img/photo-gallery-02.jpg',
        },
        {
            src: '../img/photo-gallery-03.jpg', // Dynamically created element
        },
        {
            src: '../img/photo-gallery-04.jpg',
        },
        {
            src: '../img/photo-gallery-05.jpg',
        },
        {
            src: '../img/photo-gallery-06.jpg', // Dynamically created element
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
    type: 'image' // this is default type
});

// ? plugin isotope
$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});