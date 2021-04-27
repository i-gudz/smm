$(document).ready(function () {
    $(".btn").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

let check = 1;
let target = $('.counter');
let targetPos = target.offset().top;
let winHeight = $(window).height();
let scrollToElem = targetPos - winHeight;

$(window).scroll(function () {
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem && check) {
        $('.count').each(function () {
            $(this).prop('Counter', -1).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        check = 0;
    }
});

$(document).ready(function () {
    let headerHeight = $('.head').outerHeight();
    $('.slide_section').click(function (e) {
        let linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);
        e.preventDefault();
    });
});

let swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function openbox() {
    display = document.getElementById('check').style.display;

    if (display == 'block') {
        document.getElementById('check').style.display = 'none';
    } else {
        document.getElementById('check').style.display = 'block';
    }
}

function openbox1() {
    display = document.getElementById('check1').style.display;

    if (display == 'block') {
        document.getElementById('check1').style.display = 'none';
    } else {
        document.getElementById('check1').style.display = 'block';
    }
}

function openbox2() {
    display = document.getElementById('check2').style.display;

    if (display == 'block') {
        document.getElementById('check2').style.display = 'none';
    } else {
        document.getElementById('check2').style.display = 'block';
    }
}