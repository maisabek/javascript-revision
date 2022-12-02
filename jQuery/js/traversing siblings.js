$(document).ready(function(){
    //هينفذ على كل الديفاات ماعد الديف المحتووى على جا كويرى
// $("div:contains('jquery')").siblings().css({border:'5px solid red'}); 
// $("div:contains('jquery')").click(function(){
// // هينفذ على كل الديفاات ماعد الديف المحتووى على جا كويرى
// $("div:contains('jquery')").siblings().slideToggle(2000); 
// });
// });

// $(document).ready(function(){
    // $("div:contains('jquery')").click(function(){
    // $("div:contains('jquery')").siblings(".cb").fadeOut(); //هيخفى الكلاس ى بى 
    // });
// });
// $(document).ready(function(){
    // $("div,p").click(function(){
    // $(this).next().fadeOut(2000); //هيخفى الديف اللى بعد الديف تى مباشرة
    // });
// });
// $(document).ready(function(){
//     $("div,p").click(function(){
//     $(this).prev().fadeOut(2000); //هيخفى الديف اللى قبل الديف مباشرة
//     });
// });
// $(document).ready(function(){
//     $("div,p").click(function(){
//     $(this).nextAll().fadeOut(2000); //هيخفى كل الديف اللى بعد الديف مباشرة
//     });
// });
// $(document).ready(function(){
    // $("div,p").click(function(){
    // $(this).nextAll(".cb").fadeOut(2000); //هيخفى الديف سى بى لو ضغت على اى ديف قبلة لو ضغت على اى ديف بعدة مش هيشتغل
    // });
// });
// $(document).ready(function(){
//         $("div,p").click(function(){
//         $(this).prevAll().fadeOut(2000); //هيخفى كل الديفات اللى قبل الديف مباشرة
//         });
//     });
// $(document).ready(function(){
        // $("div,p").click(function(){
        // $(this).nextUntil(".cb").fadeOut(2000); //
        // })
//     })
    // $(document).ready(function(){
        // $("div,p").click(function(){
        // $(this).prevUntil(".cb").fadeOut(2000); //
        // });
    // });
    // $(document).ready(function(){
    // $("div").first().css("border","5px solid red"); //هيرووح لاول ديف وينفذ الخصائص دى
    // $("div").first().next().css("border","5px solid brown"); //هيرووح لتاانى ديف وينفذ الخصائص دى
    // $("div").last().css("border","5px solid blue"); //هيرووح لاخر ديف وينفذ الخصائص دى
    // $("div").eq(2).css("border","5px solid black"); //هيرووح لتالت ديف وينفذ الخصائص دى
    // $("div").eq(3).css("border","5px solid black"); //هيرووح لرابع ديف وينفذ الخصائص دى
    // $("div").eq(-2).css("border","5px solid blue"); //هيبدء عد من الاخر
    // $("div").filter(".cb").css("border","5px solid blue"); //هينفذ على الكلاس سى بى
    $("div").filter(".cb").next().css("border","5px solid brown");//هينفذ على الكلاس اللى بعد ال ى بى
    // $("div").filter($(".cb")).css("border","5px solid red");//هينفذ على ال سى بى
    // $("div").filter(function(x){return x===1 }).css("border","5px solid blue");//اقدر احط جوة الفلتر فنكشن كااملة
    // $("div").not($(".cb")).css("border","5px solid green");//عكس الفلتر يعنى كلة ماعدا ال سى بى
    // $("div").not(function(x){return x===1 }).css("border","5px solid blue");//اقدر احط جوة النوت  فنكشن كااملة
    // $("div").not(":contains('jquery')").css("border","5px solid brown")
    })
