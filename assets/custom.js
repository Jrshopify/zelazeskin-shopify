jQuery(document).ready(function () {
    jQuery('.loading-wrap').hide();

    jQuery(".accordion-titel").click(function () {
        jQuery(this).parent(".accordion-item").find(".accordion-contant").slideToggle(), jQuery(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp(), jQuery(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp()
    })
}), jQuery(document).ready(function () {
    jQuery(".clickable").click(function () {
        jQuery(this).toggleClass("active")
    })
});
jQuery('.playbtn').on('click', function () {
    var videoUrl = jQuery(this).data('url');
    jQuery('#video source').attr('src', videoUrl); // Set the video src
    jQuery('#video')[0].load(); // Play the video
    jQuery(this).hide();
    jQuery('#videoModal').modal('show');
});

jQuery('.close').on('click', function () {
    // Clear the video src when the modal is closed
    jQuery('#video source').attr('src', '');
    jQuery('#video')[0].pause();
    jQuery('.playbtn').show();
});
window.addEventListener("scroll", function () {
    if (window.innerWidth <= 989) {
        var i = document.querySelector(".mobile-shop-now-button");
        window.scrollY >= 200 ? i.classList.add("visible") : i.classList.remove("visible")
    }
});

if(jQuery("#feedback").length != 0){
    jQuery("#feedback").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2,
                margin: 10
            },
            1e3: {
                items: 3
            }
        }
    });
}

if(jQuery("#videoSlide").length != 0){
    jQuery("#videoSlide").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2,
                margin: 10
            },
            1e3: {
                items: 3
            }
        }
    });
} 

if(jQuery("#testimonial").length != 0){
    jQuery("#testimonial").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2,
                margin: 10
            },
            1e3: {
                items: 3
            }
        }
    });
}

if(jQuery("#product-video-silder").length != 0){
    jQuery("#product-video-silder").owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 10
            },
            991: {
                items: 4,
                margin: 10
            },
            1e3: {
                items: 7
            }
        }
    });
}