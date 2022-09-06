// BURGER
const nav = document.getElementById('nav');
const navBtn = document.getElementById('burger');
const navBtnImg = document.getElementById('burger-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = 'images/header/btn-close.svg';
    } else {
        navBtnImg.src = 'images/header/burger.svg';
    }
};

// SCROLL-BUTTON
const btn = $('.scroll-btn');

$(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
// scroll-up
btn.click(function() {
    $(window).scrollTop(0);
});