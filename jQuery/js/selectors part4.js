$(document).ready(function(){
// $(":header").css("color","blue");//هيجيب كل الهيدر وينفذ عليهم 
// $("div").animate({width:'500px'},2000);//هيعمل انميشن على الديف
// $("div").animate({height:'500px'},2000);//هيعمل انميشن على الديف
// $(":animated").css("color","blue");//هينفذ على اى حااجة معمول ليها انميشن
// $("h1").click(function(){
// اوول لما يضغط على اتش واحد هينفذ الانيمشن دة
// $(":animated").css({background:'green'});
// });
// $("input").focus();//اوول لما افتح الديف السهم هيقف عليها 
// $(":focus").css("padding","20px");//الحااجة اللى معمولها فوكس
// $("div:contains('php')").animate({height:'100px'},2000).css({background:'green'});
// $("div:has('span')").css("color","red");//هينفذعلى الديف اللى جواة اسبان
// $("div:has('h2')").css("background-color","green");
// $(":empty").css("background-color","brown");//على اى عنصر فااضى
// $(":parent").css("border","1px solid black");//هيطبق على الاب
// $(":child").css("border","1px solid red");//هيطبق على الاتشيلد
$("button").click(function(){
// $(":hidden").fadeIn(2000);//هينطبق على العناصر اللى مطبق عليها خاصية الديسبلاى نن اما الفيزبيلتى لا
// $(":hidden").remove();//هيحذفهم
// $(":visible").css({border:'1px solid green'});//هينفذ على اى حااجة ظهرة
$("div:visible").slideToggle(1000);//لو هما ظهرين اخفيهم
$("div:hidden").slideToggle(1000);//لومخفين اظهرهم
// $(":root").css("background-color","brown");//بيجيب اوول عنصر فى الديكومنت
$("p:lang('en')").css("color","blue");
})
});