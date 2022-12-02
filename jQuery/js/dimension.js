// $(document).ready(function(){
// var a=$(document).width();
// console.log(a);
// });
// $(document).ready(function(){
//     $(".dim").click(function(){
//     var a=$(".dim").width();
//     console.log(a);
//     });});
/*
ممكن اكتب كلمة
this
بدل كلمة 
.dem
$(this).click(function(){
$(this).width(300);
*/
// $(document).ready(function(){
// $(".dim").click(function(){
// $(".dim").width(300); //هيذود الوديس 300
// $(this).width("+=" + 50); //هيذود 50 على الحاالى
// $(this).text($(this).width());
// if($(this).width()==500){
// $(this).css("background","red");
// }else{
// $(this).css("background","brown");
// }
// });});

// $(document).ready(function(){
//         $(".dim").click(function(){
//         $(".dim").innerWidth(); //بيجيب الودس من جوة لو فى بردور مش بيجيب الودس بتاعة
//         $(".dim").outerWidth();//بيحسب الودس من جوووة ولو فى اوتر بيحسبة
//         console.log($(".dim").innerWidth());
//         console.log($(".dim").outerWidth());
//         /*
//         لو حطاات 
//         true
//         جوة ال اوتر
//         console.log($(".dim").outerWidth(true));
//         هيحسب ال
//         padding , margin
//         */
//         });});
$(document).ready(function(){
        $(".dim").click(function(){
        $(".dim").height(); 
        console.log($(".dim").height());
        console.log($(".dim").innerHeight());
        console.log($(".dim").outerHeight());
})
})
