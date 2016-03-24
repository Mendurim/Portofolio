$(document).ready(function(){
$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.home-overlay-bg').css("opacity", 1 - scrollVar/800);
});

}); 