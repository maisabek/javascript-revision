$(function(){
// $(".normal").bind("click",function(){
// $(this).hide();
// })

// $(".normal").bind("mouseenter mouseleave",function(){//multi event
//     $(this).hide();
//})

// $(".map").bind({
// click:function(){
//     $(this).text("you have click map"); //لما اضغط هيظهر التكست
// },
// dblclick:function(){
//     $(this).text("you have double click map");//لما اضغط مرتين هيظهر التكست     
// }
// })

// $(".custom").bind("eventName",function(e){
//     $(this).text("hello")
// })

// $("button").click(function(){
// $(".custom").trigger("eventName"); //لما اضغط على الزرار شغلى الايفنت دة
// })

//ممكن احط برامتر جوة الفنكشن واستعملها
// $(".custom").bind("eventName",function(event,myname,m){
//     $(this).text("hello"+" "+myname+" "+m)
//     $(this).height(m)
// })

// $("button").click(function(){
//     $(".custom").trigger("eventName",["mnm" , "200px"]);
//     // لما اضغط على الزرار شغلى الايفنت دة
//     })
})




$(document).ready(function(){
    $(".custom").bind("event",function(e,name){
        $(this).text("name :- "+name)
    })
    $("button").click(function(){
        $(".custom").triggerfor("event","kk")
    })
})