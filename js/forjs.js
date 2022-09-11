// JavaScript Document

// $(window).resize(function(){
// });
$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {




    } else {


    }
});

$(window).resize(function() {

    $(document).ready(function() {
        if ($(window).width() < 767) {

        } else {

        }
    });

});


$(document).ready(function() {
    if ($(window).width() < 767) {


    } else {


    }
});

function togglepagemenu() {
    $(".nav-menu").toggleClass("nav-menu-is-open");
    $(".for-back-menu").toggleClass("for-back-menu-block");
    $("body").toggleClass("body-scroll");
    $(".btn-span-menu").toggleClass("btn-span-menu-close");

};

function menusmall() {
    $(".all-menu-small").toggleClass("all-menu-small-block");
};



$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $(".nav-menu , .for-back-menu , .btn-span-menu").removeClass("nav-menu-is-open , for-back-menu-block , btn-span-menu-close");
    }
});
$(function() {
    $(".stuts").click(function() {
        $(".stuts").removeClass("stuts-active");
        $(this).addClass("stuts-active");
    });
});


/////motion go to section in the page
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {});
            }
        }
    });





/////////////fa-go-up
$(function() {
    // Amount of scrolling before button is shown/hidden.
    var offset = 100;

    // Fade duration
    var duration = 500;

    // Toggle view of button when scrolling.
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#fa-go-up').fadeIn(duration);
        } else {
            $('#fa-go-up').fadeOut(duration);
        }
    });

    // Scroll to top when button is clicked.
    $('#fa-go-up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
});