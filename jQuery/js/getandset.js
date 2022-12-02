$(document).ready(function(){
    // لو عاايزة اعرض التكست اللى جووة الديف جووة اليرت 
alert($("div").text());    


var div=$("div").html();
// يحط فى السبااان التكست المووجود فى الديف بنفس الخصائص المووجودة فى ال سى اس اس
$("p").html(div)

//هيعرض محتووى ال اتش تى ام ال كا تكست  يعنى الاوامر اللى جووة الديف
// var div=$("div").html()
//  $("p").text(div);
// يحط فى السبااان التكست المووجود فى الديف ولكن مش بنفس الخصائص
 var div=$("div").text(); 
 $("p").text(div)

// $(document).ready(function(){
$("button").click(function(){
// $("input").val($("div").text())  //هيحط فى الانبت التكست المووجود فى الديف
$(".result").text("you wrote "+ $("input").val());
})
// })

// $(document).ready(function(){
// $(".show").click(function(){
// $("input").val($("a").attr("href")); // هيجيب قيمة الاتربيووت ويحطها فى الانبت
// });
// });
// $(document).ready(function(){
//     $(".show").click(function(){
//         $("a").attr("class","bb") 
// //لما يضغط على الزرار هيفير اسم الكلاس فى الاية الى بي بي وومكن اغير اكتر من حااجة بس افصل بكمة
// });
// });

//    $(document).ready(function(){

//    })
});
var myInput=document.getElementById('myInput')
var myDiv=document.getElementById('result')
function getData(){
myDiv.innerHTML=myInput.value
}