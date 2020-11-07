$(function() {

  let header = $("#header1");
   let intro = $("#intro");
   let introH;
       let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resaize",function() {
       scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();

        if(scrollPos > introH) {
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }

    });
    /* Reviews  https://kenwheeler.github.io/slick/*/
    let slider = $("#reviewsSlide");

        slider.slick({
  slidesToShow: 1,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 5000,
            arrows:false,

});
});
