$(document).ready(function(){
// $("input").on("keydown",function(){
// $("div").text("you are going to click keydown");
// });
// $("input").on("keypress",function(){//طوول ماانا ضاغط على الزرار
//     $("div").text("you are going to press");
// });
// $("button").on("click",function(){
//     $("div h2").text($("input").val());
//     $("input").val("");
// });
// $("input").on("keyup",function(){//اوول لما اشيل ايدى من على الزرار
//     $("div h2").text($(this).val());
// });
// $("textarea").on("keyup",function(){//اوول لما اشيل ايدى من على الزرار
//    var t=$(this).val();
//     $("div p").text(t);
// });
// $("input").on("change",function(){ //اكتب فى الانبت ومجرد ما بعد ياخدها جووة الديف
//     $("div h2").text($("input").val());
// });
$("select").on("change",function(){
    $("div").text($(this).val());
});
});