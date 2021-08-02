// احرك الصورة مع الموس
//var myimg=document.getElementById('image');
document.addEventListener('mousemove',function(e){
   // myimg.style.left=e.pageX
   // myimg.style.top=e.pageY
})
        //target بتشيل العنصر اللى تم علية الايفنت 
          // mydiv.style.display="block";مش هتنفع عشان كلمة امبورتنتن اللى عند الدسبلى
         // mydiv.classList.contains("show"); //بترجع ترو وفلوس بتشوف الكلاس دة موجود ولا لا
var allimage=document.getElementsByTagName('img');
var div1=document.getElementById('lighter');
var div2=document.getElementById('lighter-item');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var wclose=document.getElementById('wclose');
var myarr=[];
var myindex=0;
for(var i=0;i<allimage.length;i++){
   myarr.push(allimage[i]);
allimage[i].addEventListener('click',function(e){
div1.classList.add("show");
var imgsrc=e.target.src;
div2.style.backgroundImage="url("+imgsrc+")";
myindex=myarr.indexOf(e.target);
})
}
next.addEventListener('click',function(){
   moveRight()
})
function moveRight(){
   myindex++;
   if(myindex==myarr.length-1){myindex=0}
   div2.style.backgroundImage="url("+myarr[myindex].src+")";
}
prev.addEventListener('click',function(){
   moveLeft()
   })
   function moveLeft(){
      myindex--;
      if(myindex<0){myindex=myarr.length-1}
      div2.style.backgroundImage="url("+myarr[myindex].src+")";
   }
   wclose.addEventListener('click',function(){
      div1.classList.remove("show");
   })
   //لما اضغط على زرار معين فى الكي بورد يعمل حااجة
   document.addEventListener("keydown",function(e){
      if(e.keyCode==27){ //لما يدوس على الزرار اللى اسمة escواللى رقمة 27 يخفى الكلاس
         div1.classList.remove("show"); 
      }else if(e.keyCode==39){
         moveRight();
      }else if(e.keyCode==37){
         moveLeft();
      }
   })
   // div1.addEventListener("click",function(e){
   //    if(e.target==div1){
   //       div1.classList.remove("show");
   //    }
   // })
   div1.onclick=function(){
      div1.classList.remove("show");
      }