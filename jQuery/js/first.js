/*
$("p").hide() //اى برجراف هيخفية
window.onload=function(){
// الصفحة كلها لازم تحمل بالصور وبعدان الفنكشن دى تتنفذ
}
$(document).ready(function(){
//بتنفذ الفنكشن مبااشرة بمجرد ما الصفحة تحمل بدوون انتظاار الصور
})
//فى طريقة تاانية بدل دى
$(function(){

});
//example
$(document).ready(function(){
    $("p").hide()
});
$(document).ready(function(){
$("P").css("color","red");
});
//download jquer1
*/
// $(document).ready(function(){
// $("button").click(function(){ //اوول لما اضغط على الزرار الكلام يختفى
//     $("p").hide();
// })
// });
// $(document).ready(function(){
//     $("button").mouseenter(function(){ //لما اقف بالمووس
//     $("p").css("color","red");
// })
// $("button").mouseleave(function(){ //لما بخرخ من المووس
//     $("p").css("color","blue");
// })
// $("button").dblclick(function(){
//         $(this).hide();  //يقصد بزيز الباتوون نفسة
//     })
// });
// // $(document).ready(function(){
// //     $("button").hover(function(){
// //         $("p").css("color","green"); 
// //     })
// // });
//  //اقدر فى الهوفر استخدم اتنان فنكشن مش فنكشن واحدة
// $(document).ready(function(){
//     $("button").hover(function(){
//         $("p").css("color","brown");
//     }
//     ,
//     function(){
//         $("p").css("color","blue");
//     }
//     );
// });
// $(document).ready(function(){
// $("button").click(function(){
//     $("p").show();
// })
// });
// $(document).ready(function(){
//     $("button").click(function(){
//بيشووف لو النص مخفى يظهرة ولو ظاهر يخفية بيظهر ويخفى كل اما اضغط
//         $("p").toggle(); 
//     })
// });
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide(1000);  //الزرار بيختفى فى الالف ملى سيكند او احط ياما اسلو ياما فاست
//     })
// })
//slow  او fast
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide("fast");  
// });});
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide("slow",function(){
//             $("span").show();
//         });  
// });});
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide("slow",alert("paragraph i hidden"));
//         });  
// });
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle("slow",function(){
//             $("span").toggle();
//         });  
// });});
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").fadeIn();   //show بتظهر العنصر زى ال 
// })});
//عشاان اظهر البراجراف وبعدها الاسباان ولازم اكوون خفيهم فى السى اس اس
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").fadeIn(2000,function(){
//       $("span").fadeIn(2000);
//       });
//     });
// });
//عشاان اخفى البرجراف والسباان ولازم يكونوا ظهرين 
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").fadeOut(2000,function(){
//       $("span").fadeOut(2000);
//       });
//     });
// });
//لو ظاهر يخفى ولو مخفى يظهر
$(document).ready(function(){
    $("button").click(function(){
      $("p").fadeToggle(2000,function(){
      $("span").fadeToggle(2000);
      });
    });
});
//انا اللى بحدد يظهر فى ووقت اد اية وباوبستى اد اية 
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").fadeTo(2000,0.4,function(){
//       $("span").fadeOut(2000);
//       });
//     });
// });












































































