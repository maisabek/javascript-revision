// Bom => Browser object model
// بتتعامل مع البروزير والاكشن بيتعامل مع البروزير ملوش علاقة بالصفحة

// const { clearInterval } = require("timers");

// window => default object
document.getElementById('o');
// نفس
window.document.getElementById('o');

window.print(); // كانى بالظبط ضغطت على زرار  البرنت الموجود فى المتصفح

alert("kk"); // بيعمل فوكس على البروزير بينبة الشخص لحاجة معينة موجودة عندى
confirm("vvvvvvvv") // ياما ترو ياما فولس ياما اوك ياما كانسل
prompt("hhhhhhhhh","nnn") // لو عايزة اسال سؤال معين للشخص

// setTimeout(function,millsecond)دى بتنفذ الفنكشن دى بعد عدد الثوانى اللى مديهالوة وبتنفذ مرة واحدة بس وبترجع نمبر او اى دى 
// clearTimeout(Number for setTimeout) لو عايزة اوقف الفنكشن بتاعة السيت تايم اوت
// function writing(){
//     console.log("execute set time out");
// }
// var timeForSetTimeOut=setTimeout(writing,3000);
// clearTimeout(timeForSetTimeOut);

// setInterval(function, millsecond);نفس السيت تايم اوت ولكن بتتنفذ اكتر من مرة
// clearInterval(timeForinterval) بتوقف السيت انترفل
var cancel=document.getElementById('cancel');
var myDiv=document.getElementById('count');
function countDown(){
    // 'use strict';
    if(myDiv.textContent <= 0){
        myDiv.textContent = 'done .. '
        clearInterval(timeForinterval);
        }else{
        myDiv.textContent = myDiv.textContent - 1 ;
    }
}
var timeForinterval=setInterval(countDown,2000);
cancel.onclick=function(){
clearInterval(timeForinterval);
}