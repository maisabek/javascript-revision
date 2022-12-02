// $(document).ready(function(){
// هتضيف على الديف البرجراف دة او اى حااجة غير البرجراف 
// $("div").append("<p>hello append</p>");
// $("div").prepend("<span>hello pre</span>");//هيضيف السباان قبل عنااصر الموجودة جوة الديف
// $("div").before("<span>hello before</span>");//هيضيف قبل الديف
// $("div").after("<span>hello after</span>");//هيضيف بعد الديف 
// $("span.add").click(function(){
// $("input").after("<br> <input type='file'>")
// $("<p>text</p>").appendTo("div"); //هيضيف البرجراف لى الديف
// $("<p></p>",{text:"welcome tp JQuery",class:"osama"}).appendTo("div");
// // })
// })

// $(document).ready(function(){
// $("button").click(function(){
// $("div").hide();  // اوول لما اضغط على الزرار يخفى الديف 
// });
// })

// $(document).ready(function(){
//     $(".remove1").click(function(){
//     $(".open1").remove();  //اوول لما اضغط على الزرار بيحذف الديف 
//     });
//     });

// $(document).ready(function(){
//     $(".remove2").click(function(){
//     $("div").remove(".open2");  //اوول لما اضغط على الزرار بيحذف الديف  اللى الكلاس بتااعة سى سى
//         });
//         });
// $(document).ready(function(){
//     $(".remove3").click(function(){
//     $("div").empty();    //اوول لما اضغط على الزرار بيفضى الديف
//     });    });
    $(document).ready(function(){
        $(".remove4").click(function(){
        $("p").remove(":contains('this')");  //اوول لما اضغط على الزر يحذف البرجراف اللى جواة كلمة زيز
    });});

    