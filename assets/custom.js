jQuery(document).ready(function() {
    jQuery(".accordion-titel").click(function() {
        jQuery(this).parent(".accordion-item").find(".accordion-contant").slideToggle(), jQuery(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp(), jQuery(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp()
    })
}), jQuery(document).ready(function() {
    jQuery(".clickable").click(function() {
        jQuery(this).toggleClass("active")
    })
}),

// jQuery(document).on("click", ".playbtn", function() {
//     let i = jQuery(this).data("vidid");
//     var videoUrl = jQuery(this).data('url');
//     jQuery('#video').attr('src', videoUrl);
//     jQuery(".playbtn").show(), jQuery(`#video${i}`).trigger("play"), jQuery(".close").not(`[data-vidid="${i}"]`).trigger("pause"), jQuery(this).hide()
// }), jQuery(document).on("click", ".close", function() {
//     let i = jQuery(this).closest(".modal-content").find("video").attr("id").replace("video", "");
//     jQuery('#video').attr('src', "");
//     jQuery(this).trigger("pause"), jQuery(`#video${i}`).trigger("pause"), jQuery(`[data-vidid="${i}"]`).show()
// }), 


jQuery('.playbtn').on('click',function() {
    var videoUrl = jQuery(this).data('url');
    jQuery('#video').attr('src', videoUrl); // Set the video src
    jQuery('#video')[0].play(); // Play the video
    jQuery(this).hide();
    jQuery('#videoModal').modal('show');
});

jQuery('.close').on('click', function() {
    // Clear the video src when the modal is closed
    jQuery('#video').attr('src', '');
});
window.addEventListener("scroll", function() {
    if (window.innerWidth <= 989) {
        var i = document.querySelector(".mobile-shop-now-button");
        window.scrollY >= 200 ? i.classList.add("visible") : i.classList.remove("visible")
    }
}), jQuery("#clientfeedback").owlCarousel({
    loop: !1,
    margin: 30,
    nav: !0,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
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
}), jQuery("#videoSlide").owlCarousel({
    loop: !1,
    margin: 30,
    nav: !0,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
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
}), jQuery("#testimonial").owlCarousel({
    loop: !1,
    margin: 30,
    nav: !0,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
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
}), jQuery("#product-video-silder").owlCarousel({
    loop: !1,
    margin: 20,
    nav: !0,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
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