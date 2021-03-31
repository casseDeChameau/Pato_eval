window.addEventListener('scroll', () => {
    let currentscroll = scrollY;
    console.log(currentscroll);
    if (currentscroll > 200) {
        $('.header').addClass('on-scroll');
    } else {
        $('.header').removeClass('on-scroll');
    }
});