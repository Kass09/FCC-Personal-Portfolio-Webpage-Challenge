$(document).ready(function(){
    var navOffset = 550;
    $(window).scroll(function(){
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > navOffset) {
            $('#navbar').addClass("nav-sticky");
        } else{
            $('#navbar').removeClass("nav-sticky");
        }
    })
});