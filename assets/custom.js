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