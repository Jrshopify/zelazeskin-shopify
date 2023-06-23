jQuery(document).ready(function(){
  jQuery(".accordion-titel").click(function(){
    jQuery(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    jQuery(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
    jQuery(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
  });
});

jQuery(document).on('click', '.playbtn', function () {
  let vid_id = jQuery(this).data("vidid");
  jQuery('.playbtn').show();
  jQuery(`#${vid_id}`).trigger("play");
  jQuery(`.video`).not(`#${vid_id}`).trigger("pause");
  jQuery(this).hide();
});

jQuery(document).on('click', '.video', function () {
  let play_btn_id = jQuery(this).data("play_btn_id");
  jQuery(this).trigger("pause");
  jQuery(`#${play_btn_id}`).show();
});

jQuery('#clientfeedback').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
jQuery('#videoSlide').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
jQuery('#testimonial').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

/*jQuery(document).on('click', '.playbtn', function () {
let vid_id = jQuery(this).data("vidid");
jQuery('.playbtn').show();
jQuery(`#${vid_id}`).trigger("play");
jQuery(`.video`).not(`#${vid_id}`).trigger("pause");
jQuery(this).hide();
});

jQuery(document).on('click', '.video', function () {
let play_btn_id = jQuery(this).data("play_btn_id");
jQuery(this).trigger("pause");
jQuery(`#${play_btn_id}`).show();
});*/
