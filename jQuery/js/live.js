$(function(){
// $("button").click(function(){
// $("<p>this is p</p>").insertAfter($(this));//هينشا برجراف بعد الباتوون
// });
/*
اى حااجة انا عملها بالجا كويرى عشاان اعمل ايفنت عليها بال 
live()
لكن مش هنشتغل بيها
عشاان شغالة على فرجن قديم
او 
Delgay()
وبردة مش هنشتغل بيها
او 
on()
ودى اللى هنشتغل بيها
*/
// $("p").live("click",function(){
// $(this).hide();
// });

// $(".inputfile span").click(function(){
//     $("<br><input type='file'> <span>+</span><br>").insertAfter($(this));
// });
$(".inputfile span").live(function(){
    $("<br><input type='file'> <span>+</span><br>").insertAfter($(this));
})

// $(".normal").delegate("","click",function(){
// })

})