/*
document.title
document.images
document.forms
document.body
document.anchors تااج ال اية اللى مش بتودى للينك 
document.links  --> href
*/

var t1=document.getElementById('show');
// t1.innerHTML=document.title;//هيجيب التايتل واحطة فى الديف
// t1.innerHTML=document.images.length;//هتحط عدد الصور
// t1.innerHTML=document.images[1].src;
// for(i=1;i<document.images.length;i++){ //عشاان يعرض السورس بتاع كل الصور
//     document.write(document.images[i].src +"<br>")
// }
// t1.innerHTML=document.forms.length;
// t1.innerHTML=document.forms[0].x2.value;
t1.innerText=document.body.innerHTML; //هتجيب الكود
t1.innerText=document.body.innerText;//هتجيب التكست
if(document.body.innerText.indexOf('hellooo')>-1){//هل الاسترنج دة موجود
    document.write("yes")
}else{
    document.write("no")
}
t1.innerText=document.anchors.length;
//  t1.innerText=document.links.length;


