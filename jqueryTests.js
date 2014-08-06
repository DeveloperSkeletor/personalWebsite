$(document).ready(function() {
    
    var $hide = $('.hiding');
    $hide.hide(10000);
    
    $hide.mouseover(function(){
        $hide.show();
    });
    
    
    
    var $originalColor = true;
    
    if ($originalColor == true){
        $("#banner").click(function() {
            $(this).css("background", "linear-gradient(to bottom, #990000, #FFFFFF)")
            $(this).css("background", "-moz-linear-gradient(to bottom, #990000, #FFFFFF)")
            $(this).css("background", "-o-linear-gradient(to bottom, #990000, #FFFFFF)")
            $(this).css("background", "-webkit-linear-gradient(to bottom, #990000, #FFFFFF)");
            $originalColor = false;
        });
    }else if ($originalColor == false){
        $("#banner").click(function() {
            $(this).css("background", "linear-gradient(to bottom, #336699, #FFFFFF)")
            $(this).css("background", "-moz-linear-gradient(to bottom, #336699, #FFFFFF)")
            $(this).css("background", "-o-linear-gradient(to bottom, #336699, #FFFFFF)")
            $(this).css("background", "-webkit-linear-gradient(to bottom, #336699, #FFFFFF)");
            $originalColor = true;
        });
    }
});

