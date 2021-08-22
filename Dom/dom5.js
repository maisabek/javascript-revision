                    // 1- find Element
/*
1-var t1=document.getElementbyId('id');
2-var t2=document.getElementsByClassName('classname')
3-var t3=document.getElementsByTagName('tagname')
4-var t4=document.getElementsByName('name attribute')
5-var t5=document.querySelector('class name or id name')
6-var t6=document.querySelectorAll('class name or id name')
7-
*/
                   //2- change attribute value by js
var e2=document.getElementById('image').src="images/11.jpg";
var p1=document.querySelector('.para');
p1.addEventListener('click',function(){ //بتاخد عنصر واحدة

})
// او 
function test(){
   // alert("nn")
}
p1.addEventListener('click',test);
//لو عندى فنكشن بديها برمتر يبقى مينفعش دى يبقى لازم دى
var p1=document.querySelector('.para');
p1.addEventListener('click',function(){
    welcome('bb')
})
function welcome(username){
    alert("welcome"+username)
}
// عشان اخلية لما يضغط على كذا عنصر يطلع اليرت
var allElement=document.getElementsByClassName('para');
for(var i=0;i<allElement.length;i++){
allElement[i].onclick=function(){
   // alert('ggggg');
}}
// او
for(var i=0;i<allElement.length;i++){
allElement[i].addEventListener('click',function(){
    alert("ffff")
})}
// eشيلة كل حااجة انا محتاجها فى الايفنت دة  
var t=document.getElementById('text2');
t.addEventListener('mousemove',function(e){
    console.log(e.pageX); //الموس مكانة فين فى الاكس اكسيس
})
