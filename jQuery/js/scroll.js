$(document).ready(function(){
$(window).on("scroll",function(){
var scroll=$(window).scrollTop(); //القيمة اللى فووق السكروول
console.log(scroll);
if(scroll>1000){
    $("div").fadeIn()
}else{
    $("div").fadeOut()
}
});
});