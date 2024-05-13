$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $("header").addClass("lightheader");
    } else {
        $("header").removeClass("lightheader");
    }
});
$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
    $('.navbar-collapse').click(function (event) {event.stopPropagation();});
  });    



$("form :input").each(function(){
    let fieldValue= $(this).val();
    if(fieldValue!=''){
       $(this).addClass('active');
    }else{
       $(this).removeClass('active');
    }
 });




  $('.owl-feature').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
       480:{
          items:1.5
        },
       576:{
          items:2
        },
        768:{
            items:2.5
        },
       1199:{
            items:3
        }
    }
})


