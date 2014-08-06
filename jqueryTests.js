$(document).ready(function() {
    
    var $hide = $('.hiding');
    
    $hide.click(function(){
    $hide.hide(10000);
    });
    
    $hide.click(function(){
        $hide.show();
    });
    
    
    $(".banner").click(function() {
       
        $(this).toggleClass("bannerTwo").toggleClass("banner");
       /* $(this).css("background", "linear-gradient(to bottom, #990000, #FFFFFF)")
        $(this).css("background", "-moz-linear-gradient(to bottom, #990000, #FFFFFF)")
        $(this).css("background", "-o-linear-gradient(to bottom, #990000, #FFFFFF)")
        $(this).css("background", "-webkit-linear-gradient(to bottom, #990000, #FFFFFF)");
        $(".sidebar").css("background-color", "#CCCC99");
            */
        
    });

});

