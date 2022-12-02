$(document).ready(function(){

    $(window).on("resize",function(){
        $("section").height($(window).height());
        var wid=$(window).width(),
        hei=$(window).height();
        console.log(wid,hei);
    })
    
})