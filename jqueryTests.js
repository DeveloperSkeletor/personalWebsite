$(document).ready(function() {
        
    $('.hiding').click(function(){
        $('.hiding').hide(2000);
        $('#unhide').show(2000);
    });
    
    
    $("#show").click(function() {
    
        $(".hiding").show(2000);
    
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

