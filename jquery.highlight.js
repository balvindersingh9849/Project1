$(document).ready(function() {
    $("#vecta_menu").highlightMenu();
    });
    
(function($){
$.fn.highlightMenu = function() {
return this.each(function() {
var items = $("li a");
items.css('font-family', 'arial, helvetica, sans-serif')
.css('font-weight', 'bold')
.css('text-decoration', 'none')
.css('background-color', '#D3D3D3')
.css('color', '#cc1c0d')
.css('width', '80px');
items.mouseover(function() {
$(this).css('background-color', '#000')
.css('color', '#fff');
});
items.mouseout(function() {
$(this).css('background-color', '#dfe3e6')
.css('color', '#cc1c0d');
});
});
}
})(jQuery);
