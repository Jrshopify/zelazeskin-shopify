jQuery(document).ready(function(){
  jQuery(".accordion-titel").click(function(){
    jQuery(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    jQuery(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
    jQuery(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
  });
});