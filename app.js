$(function () {

    
    

     let header = $("#header");
     let intro = $("#intro");
     let introH = intro.innerHeight();
     let scrollPos = $(window).scrollTop();

    
     checkScroll(scrollPos,introH);
    
     
    $(window).on("scroll  resize", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
         checkScroll(scrollPos,introH);
      
    });
     
     function checkScroll(scrollPos,introH) {

          if (scrollPos > introH) {
             header.addClass("fixed");
        } else {
             header.removeClass("fixed");
        }
          
     };

     
     /*smooth scroll*/

     $("[data-scroll]").on("click", function (event) {
          
          event.preventDefault();

          let elementid = $(this).data('scroll');

          let elementOffset = $(elementid).offset().top;


          nav.removeClass("show");

          console.log(elementOffset);
          
          $("html, body").animate({
            scrollTop:elementOffset - 100
          },700);
     });



     /*Nav toggle*/
     
     let nav = $("#nav");


     let navToggle = $("#navToggle");

     navToggle.on("click", function (event) {
          
          event.preventDefault();


          nav.toggleClass("show");
     });


     /* tetimonialls__slider: <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> */

     let slider = $("#testimonials__slider");

     slider.slick({

          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
      
          fade: true,
          arrows: false,
          dots:true
        
  });
   

});





