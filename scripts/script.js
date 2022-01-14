var $ = jQuery;
// Scroll effect front page
//-----------------------------------------

$(document).ready(function () {

    $thumbnailWidth = $("footer .wrapper-social li").width();
    $("footer .wrapper-social li").css("height", $thumbnailWidth + "px");

    $(".to-top-icon").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    $(".to-bottom-icon").click(function () {
        $("html, body").animate({
            scrollTop: $(
                'html, body').get(0).scrollHeight
        }, 'fast');
    });


    $(window).scroll(function (e) {
        e.preventDefault();

        // Scroll Icon

        let $window = $(window);
        let $panel = $(".change-icon");

        let $sectionHeight = ($(".hero").height());

        let scroll = $window.scrollTop() + ($window.height() / 1.5);

        if ($(this).scrollTop() > $sectionHeight) {
            $(".to-bottom-icon").css("display", "none");
            if ($(window).width() >= 1200) {
                $(".navbar .wrapper-icon.menu-open").css("top", "-50px");
            }
        }

        if ($(this).scrollTop() < $sectionHeight) {
            $(".to-bottom-icon").css("display", "block");
            if ($(window).width() < 1200) {
                $(".navbar .wrapper-icon.menu-open").css("top", "0px");
            }
        }

        if ($(window).width() > 1200) {
            $panel.each(function () {
                let $this = $(this);

                if ($this.position().top <= scroll) {
                    $(".to-top-icon").css("display", "block");

                } else {
                    $(".to-top-icon").css("display", "none");
                }
            });
        }



        // HERO --------------------------------------------------------------
        $('.change-bg').css('opacity', 1 - $(window).scrollTop() / 1000);

        // let $logoUp = $('.logo').offset().top;
        // if ($(window).scrollTop() > logoUp) {
        //     $('.logo').addClass('scroll');
        //     $('.the-hero, .bouncer').css('opacity', 1 - $(window).scrollTop() / 1000);
        //   } else {
        //     $('.logo').removeClass('scroll');
        //     $('.the-hero, .bouncer').css('opacity', 1);
        //   }


        // CTA Button right bottom sticky
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $('.sticky-bottom').css('bottom', '130px');

        } else {
            $('.sticky-bottom').css('bottom', '60px');

        }

    }).scroll();
});



$(document).ready(function () {

    // Menu
    $(".menu-open").on("click", function () {
        $(".menu-toggle").addClass("open");
        $("div.nav").animate({ top: 0 });
        $(".nav .wrapper-icon.menu-toggle").css("display", "block");
        // $(".nav").css("display", "block");
        $("body").css("ovrflow-x", "hidden");
    });
    $(".nav .menu-toggle").on("click", function () {
        console.log("click");
        $(".menu-toggle").removeClass("open");
        $("div.nav").animate({ top: "-100%" });
        $(".nav .wrapper-icon.menu-toggle").css("display", "none");
        // $(".nav").css("display", "none");
        $("body").css("ovrflow-x", "visible");
    });

    // CTA
    let click = false;
    $("#choose").on("click", function () {

        if (click == false) {
            $(".wrapper-choose").css("display", "block");
            $(".cta-bottom .wrapper-icon p").html("CLOSE SELECTION");
            click = true;
        } else {
            $(".wrapper-choose").css("display", "none");
            $(".cta-bottom .wrapper-icon p").html("CHOOSE CATEGORY");
            click = false;
        }

    });

    // Give animations class to slide up when they are in view
    var $animation_elements = $('.animate-up');
    var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = window_top_position + window_height;
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = element_top_position + element_height;

            if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
                $element.removeClass('exit-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
});


