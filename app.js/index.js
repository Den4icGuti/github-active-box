$(function () {
   
    let header = $("#header");

    let intro = $("#intro");

    let scrollPos = $(window).scrollTop();

     let introH;


    $(window).on("scroll load resize", function () {
        scrollPos = $(this).scrollTop();

        introH = intro.innerHeight();
        
        if (scrollPos > introH) {

             header.addClass("fixsed");
            
        } else {
             header.removeClass("fixsed");
        }

        console.log(scrollPos);
    });
    
   

    console.log(scrollPos)

   
});
