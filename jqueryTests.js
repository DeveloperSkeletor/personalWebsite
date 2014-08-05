$(document).ready(function() {
    
    var $hide = $('.hiding');
    $hide.hide(10000);
    
    $hide.mouseover(function(){
        $hide.show();
    });
});