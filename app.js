$(function () {
    let header = $("#header");

    let intro = $("#intro");
    
    let introH;
  

    let scrollPos = $(window).scrollTop();

    
    
    $(window).on("scroll load resize", function () {
          let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
             header.addClass("fixed");
        } else {
             header.removeClass("fixed");
        }
      
    });

    header.addClass("fixsed");


});