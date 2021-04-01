window.addEventListener('scroll', () => {
    let currentscroll = scrollY;
    if (currentscroll > 200) {
        $('.header').addClass('on-scroll');
    } else {
        $('.header').removeClass('on-scroll');
    }
});

$('.burger-menu').click(() => {
    console.log('click on burger');
    $('.header').addClass('show-panel');
});
$('.cross').click(() => {
    console.log('click on cross');
    $('.header').removeClass('show-panel')
})
$('.logo').click(()=> {window.location = 'index.html'})