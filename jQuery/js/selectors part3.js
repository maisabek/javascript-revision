$(document).ready(function(){
// $("p:only-child").css({border:'4px solid red'});//هيجيب برجراف لية اتشيلد واحد بس
//هيجيب برجراف لية اب ويكوون برجراف واحد بس وممكن الاب يكوون فية حاجات تاانية غير البرجراف عاادى
// $("p:only-of-type").css({border:'4px solid blue'});
// $("div > p").css({border:'4px solid brown'}); // برجراف هيقبلك جوة الديف مباشرة مش جواة حااجة
// $("div + p").css({border:'4px solid green'}); //يكوون ديف وبعدة علطول برجراف فبينفذ على البرجراف
// $("p ~ div").css({border:'4px solid red'}); //اكتر من برجراف جوة الديف
// $("div p:eq(1)").css({border:'4px solid red'});//بيعد البرجراف جووة الديف
// $("div p:gt(0)").css({border:'4px solid red'});//اكبر من الواحد
// $("div p:lt(1)").css({border:'4px solid green'});//اقل من
$("div p:not(:contains('3'))").css({border:'4px solid green'});//البرجراف اللى مش بيحتوى على 3
})