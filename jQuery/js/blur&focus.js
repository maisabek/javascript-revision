$(document).ready(function(){
//مجرد ما هقف على الانبت هيظهرة الاسباان وبعدها بشووية هيختفى
// $("input").on("focus",function(){
// $("div span").fadeIn(2000,function(){
//     $("div span").fadeOut(2000);
// })
// })

$("input").on("blur",function(){//مجرد ما ابعد من على الانبت 
    if( $(this).val().length === 10 ){
    $("div span").fadeIn(2000,function(){
        $("div span").fadeOut(2000);
    }).text("you are focusing");
    }
    })
})
