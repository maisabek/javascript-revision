$(document).ready(function(){
   var x1=$(document).width() // بتجيب الودس
   var x2=$(document).height() // بتجيب الهايت
   var x3=$(document).innerWidth() // بتجيب الودس من جو ولو فى بردر او بادنج مش بتحسبة
   var x4=$(document).outerWidth() // لو اخدت ترو بتحسب البردر والبادنج
   //  بتجيب الودس من جو ولو فى وتر  بتحسبة 
   console.log(" x :- ",x1)
   console.log(" x :- ",x2)
   console.log(" x :- ",x3)
   console.log(" x :- ",x4)

})