//عندى ديف مخفى وعاايزة اظهرة لما اضغط على ديف تاانى ويظهر بطريقة مرنة
// $(document).ready(function(){
// $(".open").click(function(){
// $(".box").slideDown(2000)
//     });
// });
//ديف ظااهر وعاايزة اخفية
// $(document).ready(function(){
//     $(".open").click(function(){
//     $(".box").slideUp(2000)
//     });
//  });
//بيبدل ما بين ال اب وال دوون
// $(document).ready(function(){
//         $(".open").click(function(){
//         $(".box").slideToggle(2000)
//     });
// });
$(document).ready(function(){
 var div=$(".open");
 div.animate({width:'500px'}).slideUp(2000).slideDown(2000).
 fadeOut(2000).fadeIn(2000).hide(1000).show(1000);
});