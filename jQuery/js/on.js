$(document).ready(function(){
    //single event
$(".normal").on("dblclick",function(){
 $(this).hide();
});
//multi event
$(".normal").on("mouseenter mouseleave",function(){
    $(this).toggleClass("color");
   });
//custom event
// $(".custom").on("mycustom",function(event){
//     $(this).hide()
// })

//هعرف ماى كستووم
// $("button").click(function(){
// $(".custom").trigger("mycustom");
// })

// $(".custom").on("mycustom",function(event,height,back){
//     $(this).height(height);
//     $(this).css("background-color",back);
// })

// $("button").click(function(){
//     $(".custom").trigger("mycustom",["200px",'red']);
//     })

//event map with on
$(".map").on({
click:function(){$(this).text("you have click me");},
dblclick:function(){$(this).text("you have dblclick me");},
mouseenter:function(){$(this).text("you have mouse me");},
mouseleave:function(){$(this).text("the mouse has gone me");},
})
//الحاااجة اللى انا لسة مكريتها بالجاكويرى لازم اعملها كدة
// $("button").on("click",function(){
// $("<p>this is created p</p>").insertAfter($(this));
// });
// $("body").on("click","p",function(){
// $(this).fadeOut(1000);
// });

//عشاان الايفنت تتنفذ مرة واحدة بس اما الاون بتتنفذ اكتر من مرة
$("p").one("click",function(){
    $(this).animate({fontSize:'+=100px'});
    });

    
});