/*
                 find element
1-document.getElementById()دى المستخدمة اكتر الباقى لا
2-document.getElementsByTagName()
3-document.getElementsByClassName() بترجع html collection زى الlist
اقدر الف علية بفور لووب لكن مقدرش استخدم اى فنكشن من بتووع الاراى معاة
4-document.querySelectorAll(); بديها كلاس او اى دى
5-document.getElementsByName();بترجع الللى الاتربيوت بتاعة نام
6-document.querySelector();بترجع اول ايلمنت يقبلها*/
var t1=document.getElementById('text');
t1.innerHTML="change by js"; //هيغير محتوى الديف
var t2=document.getElementsByTagName('p');
t2.innerHTML="p change by js";// مش هيغير حااجة عشاان عندة كذا يلمينت
t2[0].innerHTML='p1 change by js';//هيغير اول برجراف
console.log(t2.length);
var t3=document.getElementsByClassName('text2');

var t4=document.querySelectorAll('#text');
t4[0].innerHTML="change by querySelectorAll";

var t5=document.querySelectorAll('.text2');
t5[0].innerHTML="change by querySelectorAll";
