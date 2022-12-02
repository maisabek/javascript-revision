// $(document).ready(function(){
// $(".open").animate({width:'500px'},1000,function(){
//     $("span").fadeIn(1000);  
// });
// });
/*
width:'toggle'
لو ظااهر هيفضل يصغر الودس لحد ما الودس يختفى
والعكس
width:'hide'
هيصغر الودس لحد ما يختفى 
*/

$(document).ready(function(){
    $("button").click(function(){
    $(".open").stop(true,true);  
    //بيوقف الانميشن الاوول ويدخل على التاانى ولو دووست مرة كماان يوقف ويدخل على اللى بعدة
    /*
    $(".open").stop(true);    هتووقف كل الانميشن
    $(".open").stop(true,true);  بيودينى لاخر انميشن عندى
    $(".open").stop(false,true);  مبتكملش الانميشن اللى هى فية وترووح لبعدة
    */
});
$(".open").animate({width:'toggle',left:'100px',height:'600px'},5000);
// $(".open").animate({width:'toggle',left:'100px',height:'600px'},5000);
// $(".open").animate({borderRadius:'100px',left:'100px',height:'600px'},5000);
// $(".open").animate({width:'700px',left:'100px',height:'600px'},5000);
});

