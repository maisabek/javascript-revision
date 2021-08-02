//alert(3+4);
//document.write("");
//mozilla
// var x1=3,x2="ahmad 'moh'",x3=true,x4=["face.com","google.com","youtube"]
//     ,x5={fname:"vv",lname:"bb"},x6='vvv "gggg"',x7="vvvv \"cc\"";
// 	//, x8=prompt("whats your age?");
// document.getElementById("test").innerHTML="hello from js";
// document.getElementById("test").innerHTML=100;
// document.getElementById("test").innerHTML=x1;
// document.getElementById("test").innerHTML=x1+x2;
// if(x3 == x2){ //اكس 3 تسااوى اكس2 ومش شرط فى الداتا التايب 
// document.getElementById("test").innerHTML=x4[0];
// document.getElementById("test").innerHTML=x5.fname;
// document.getElementById("test").innerHTML=x7;
// document.getElementById("test").innerHTML="ooofff"+4+5;
// document.getElementById("test").innerHTML="ooofff"+(4+5);
// document.getElementById("test").innerHTML=x8;
// console.log("good");	
// }else{
// console.log("bad");
// }
// if(x3===x2){//لازم اكس3 تساااوى اكس2 وتسااويها فى الداتا التاايب	
// }
// if(x3!==x2){//يعنى اكس3 لا تساااوى اكس2 فى الداتا تاايب ولاتسااويها فى القيمة لازم شرط فيهم يتحقق مش شرط الاتنين
// }
// function functionname(){
// 	"ggg fff";
// 	alert("hello");
// }
// functionname(); //ممكن انااديها كدة او من اون كللك عند زرار من ال اكتش تى ام ال
// function calc(){
// 	document.getElementById("test").innerHTML=document.getElementById("input").value*4;
// }
// function onmouse(){
// document.write("you hoverd with me");
// }
// var mydiv=document.getElementById("test2")
//      ,myinput=document.getElementById("curr");
// myinput.onchange=function(){
// 	mydiv.innerHTML=myinput.value*4;	
// }
// var myarray=new Array();
// myarray[0]="hh";
// myarray[1]="hh";
// //او
// var myarray=new Array("hh","hd","nn","mm");
// //او
// var myarray=["yy","ff","xx","vv","ddd","www","zzz","qqq"];
// console.log(myarray.length);
// myarray.push("n");      //بتحط فى اخر الارى
// console.log(myarray);
//  myarray.unshift("b"); //بتحط فى اوول الارى
// console.log(myarray);

// // myarray.splice(index,عدد العناصر اللى عاايز يشلها,item1,item2); 
//  myarray.splice(0,2);  //حذف عنصرين

var myArr = ["C", "JavaScript", "Python", "Java", "php"]
myArr.splice(4,0,"Scala") //["C", "JavaScript", "Python", "Java", "Scala", "php"]

// console.log(myarray);
// myarray.splice(0,2,"gg","aa"); //هيضيف العنصرين 
// console.log(myarray); 
//  myarray.pop();  //حذف هخر عنصر
// console.log(myarray);
// var f= myarray.pop()
// console.log(f);	 
//  myarray.shift(); //حذف اوول عنصر
//  myarray.sort(); //هيرتب ابجدى ولو ارقاام من الاعلى للاصغر
//  myarray.reverse(); //بيعكس
//  // myarray.splice(start,end);  لو مكتبتش الايند يبقى من الاترات للاخر 
//  myarray.splice(0,1); 
//   myarray.splice(-4,-3); //هيعد من اخر الارى
//   var array2=["vb","xs","za"];
//   var c=myarray.concat(array2); //ممكن احط اكتر من اراى دى بتدمج الارى
//  console.log(c); 
//  var z=myarray.indexOf("ff"); //هترجع رقم الاندكس
//   var z=myarray.lastIndexOf("ff"); //هيبحث عن رقم الاندكس من الاخر
// console.log(typeof(x2)); 
// console.log(typeof(x1));   
// console.log(x2.length); 
// var v=x1.toString(); 
// console.log(typeof(x2)); 
// var xx=x2.indexOf("ahmad");	 
// var xx=x2.lastIndexOf("ahmad")
//     ,ss=x2.search("ahmad")	//بترجع الاندكس
// 	,as=x2.split("") //بتحوول الاسترنج الى اراى وبتفصل ما بين كل عنصر وتاانى بمساافة وممكن احط يطبع اد اية من الاراى كاام عنصر 
//     ,df=x2.slice(7,9) //بيقطع جزء من الاسترنج ولازم اديلة بداية ونهااية ولو ادتهوة الارقاام بالساال بيبدء عد من الاخر
//     ,dg=x2.substr(3) //هيجيب من اوول الاندكس رقم3 لحد الاخر
// 	,dh=x2.substr(3,7)//هيجيب من الاندكس 3 ويعد 7 حرووف بعدها
//     ,ds=x2.substring(7,17) //لو الاستارت اكبر من الايند بيعملهم اسوواب
//     ,xxx=x2.charAt(2)//بتجيب الحرف اللى بيشاااور عليها الرقم
// 	,ccc=x2.charCodeAt(2)//بتجبلى اليونى كوود
// 	,dd=x2.replace("ahmad","nmbhg")
var message = "this is string is"
console.log("message = ",message.replace("is", "was"))  // message =  thwas is string is
// 	,fg=String.fromCharCode(43,56,78)//بيااخد الارقااام دى ويجيب الحرووف اللى بتساااويها باليوونى كوود
//     ,vv=x2.concat(x6)
//     ,xz=x2.toLowerCase()
// 	 ,cn=x2.toUpperCase()
// 	 ,xa=x2.trim()//بتشيل المساافاات من الاول و الاخر
// 	 ,cr=x2.link("www.google.com");
// 	 var myarr=["v","b","n"];
// for(var i=0;i<myarr.length;++i){
// 	if(i==2) break;
// 	console.log(myarr[i]);
// }

// for…in used to loop into  object  by iterating its keys

var obj = {
  name: "Ahmed",
  age: 19
  }
  var info = ""
  for (var k in obj) {
  info += "My " + k + " is " + obj[k] + ""
  console.log(k) // name age
  }

  // ? operator
  var canFly = true
var bird = canFly ? 'Dove' : 'Penguin'

// var mycar={
// 	color:"white",
// 	type:"sedan",
// 	price:"50.000",
// 	model:"201"
// };
// 	console.log(mycar.color);
// 	console.log(mycar["color"]);
// for(var i in mycar){
// 	if(mycar.hasOwnProperty(i)){
// 	console.log(mycar[i]);
// }}
// function selectoption(start,end){
// 	"use strict";
// 	document.write("<select>");
// 	for(var i=start;i<=end;++i){
// 			document.write("<option>"+ i +"</option>");
// 	}
// 	document.write("</select>");	
	
// }
// selectoption(2010,2020);
// var i=0;
// while(i<=10){
// 		console.log(i);
// if(i==4) continue;
// 	++i;
// }
// var j=0;
// do{
// 		console.log(j);
// 	++j;
// }while(j<=10);

// mainloop:
// for(var i=0;i<10;++i){
// 	childlloop:
// for(var j=0;j<10;++j){
// 	if(j==6) break mainloop;
// }

// console.log(i+" "+j);
// }

// console.log(Math.sqrt(9));

// console.log(Math.Max(9,6));

