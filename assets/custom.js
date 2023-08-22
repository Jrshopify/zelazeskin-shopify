jQuery(document).ready(function(){

  jQuery(".accordion-titel").click(function(){
    jQuery(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    jQuery(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
    jQuery(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
  });
});

jQuery(document).ready(function(){
  jQuery('.clickable').click(function() {
    jQuery(this).toggleClass("active");
  }); 
});




jQuery(document).on('click', '.playbtn', function () {
  let vid_id = jQuery(this).data("vidid");
  jQuery('.playbtn').show();
  jQuery(`#video${vid_id}`).trigger("play");
  jQuery(`.close`).not(`[data-vidid="${vid_id}"]`).trigger("pause");
  jQuery(this).hide();
});

jQuery(document).on('click', '.close', function () {
  let vid_id = jQuery(this).closest('.modal-content').find('video').attr('id').replace('video', '');
  jQuery(this).trigger("pause");
  jQuery(`#video${vid_id}`).trigger("pause");
  jQuery(`[data-vidid="${vid_id}"]`).show();
});




// Shop now button

window.addEventListener('scroll', function() {
  if (window.innerWidth <= 989) {    

    var showDiv = document.querySelector('.mobile-shop-now-button');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {
        showDiv.classList.add('visible');
    } else {
        showDiv.classList.remove('visible');
    }
  }
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
          items:1,
          margin:0,
      },
      600:{
          items:2,
          margin:10,
      },
      1000:{
          items:3
      }
  }
});
jQuery('#videoSlide').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1,
      margin:0,
  },
  600:{
      items:2,
      margin:10,
  },
      1000:{
          items:3
      }
  }
});
jQuery('#testimonial').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1,
      margin:0,
  },
  600:{
      items:2,
      margin:10,
  },
      1000:{
          items:3
      }
  }
});

jQuery('#product-video-silder').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{      
    0:{
      items:2,
      margin:10,
  },
  991:{
      items:4,
      margin:10,
  },

      1000:{
          items:7
      }
  }
})

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
