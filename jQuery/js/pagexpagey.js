$(document).ready(function(){
$("html").mousemove(function (e) {
$("span").text("x-axis "+ e.pageX + "y-axis "+ e.pageY );//هتجيب الاحدثياات 
$(".circle").show().offset({left:e.pageX,top:e.pageY});//هتحرك الديف مع المووس
});
});