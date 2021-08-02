document.getElementById('mybtn').onclick=function(){
    window.open('https://www.google.com','_blank'," width=1000,height=1000,left=100",true);
}
//scrollTo(x,y) بتاخد اكس واوى وبتروح عندهم بس مبتتحركش تاانى ماهما اتحرك مبتغيرش
//scrollBy(x,y) كل ما بضغط بتغير الاكس والواى بتاعتها
//stop()عشان اعمل استوب لاى حاجة بتعمل لواد
//close()عشان اقفل الوندوا اللى فتحتها
//focus() عشان اعمل فوكس على الوندوا اللى فتحتها
document.getElementById('close').onclick=function(){
    window.close();
}
//pageXOffset = scrollX  الاسكرول بيبعد عن اكس كام 
//pageYOffset = scrollY  الاسكرول بيبعد عن واى كام
//innerHeight الهايت من جوة كام يعنى لو صغرت الشاشة يجبلى الهايت كام دلوقتى
//outerHeight الهايت الكلى سوء صغرت او كبرت
//innerWidth الودس من جوة لو صغرت الشاشة هيجبلى الودس دلوقتى بعد ما صغرتها
//outerWidth الودس الكلى سوء صغرت او كبرت
var myDiv =document.getElementById('myDiv')
, myDiv1 =document.getElementById('myDiv1'),
myDiv2 =document.getElementById('myDiv2'),
myDiv3 =document.getElementById('myDiv3');
myDiv.textContent=window.outerHeight;
myDiv1.textContent=window.innerWidth;
myDiv2.textContent=window.pageXOffset;
myDiv3.textContent=window.pageYOffset;

//location.href هتجيب اللينك
//location.href='' تعدلى يعنى على اللينك بتاعك
//location.pathname بتجيب اللى بعد الهوست
//location.hostname بتجيب الهوست نام
//location.search بتجيب اللى بعد علامة الاستفهام فى الباص
//location.reload() بتعمل ريلود
////location.reload(false) بتعمل ريلود من الكاش
//location.assign('') بتحولنى للينك اللى مديهولها وبتحفظ اللينك اللى انا فية فى الهستورى
//location.replace('') بتودينى للينك دة ومش بتحفظ اللى انا فية فى الهستورى
//location.hash بتجيب اللى بعد الهاش
//location.protocol بتجيب اسم البرتكول
//history.back()بترجعنى لصفحة اللى قبل دى 
//history.forward() بتودينى لصفحة اللى بعدها
//history.go(-2) لو واخد سالب بتودينى للى قبلها ولو موجب للى بعدها
