$(document).ready(function(){
// $("p").parent().css({border:'1px solid green',padding:'30px'})//هيعمل لاب واحد بس
// $("p").parents().css({border:'1px solid blue'})//هيعمل لكل االابهااات
// $("p").parents(".top").css({border:'1px solid brown'})//هيعمل للاب اللى انا مححداة
$("span").parentsUntil(".top").css({border:'1px solid blue'})//هيبدء ينفذ من عند الاب بتااع السبان ويوقف عند الكلاس تووب
});

 $(document).ready(function(){
    // هيعمل العنصر المبااشر اللى تحتية
//  $("section").children().css({border:'1px solid green',padding:'30px'});
//  $("section").find("span").css({border:'1px solid blue'}); //هيبحث عن الاسبان
//  $("section").find("*").css({border:'1px solid blue'}); //هينفذ على كل
//  هينفذ على البرجراف المحتووى على كلمة ايز
//  $("section").find($("p:contains('is')")).css({border:'1px solid brown'});
 })


