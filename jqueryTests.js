$(document).ready(function() {
    
    var $hide = $('.hiding');
    
    $hide.click(function(){
    $hide.hide(10000);
    });
    
    $hide.click(function(){
        $hide.show();
    });
    
    
    $(".banner").click(function() {
       
        $(this).toggleClass("bannerTwo");
        $(".sidebar").toggleClass("sidebarTwo");
        
    });
    
    $(".bannerTwo").click(function() {
    
        $(this).toggleClass("banner");
        $(".sidebarTwo").toggleClass("sidebar");
        
    });

});

