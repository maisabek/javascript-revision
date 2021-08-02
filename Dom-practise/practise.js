var pp=document.createElement('p');
var pText=document.createTextNode("welcome here")
var appendP=pp.appendChild(pText);
console.log("mm"+appendP)
document.body.appendChild(appendP)
var myDiv=document.getElementById('test')
// ,
//     myDiv2=document.getElementsByClassName(""),
//     myDiv3=document.getElementsByName(),
//     myDiv4=document.getElementsByTagName(""),
//     myDiv5=document.querySelector("")
//     ,myDiv6=document.querySelectorAll("");
 myDiv.innerHTML=document.forms[1].x2.value;

//  myDiv.outerHTML="mmm"   
var myInput=document.getElementById('myInput').value;
console.log("=>"+myInput)
var jj=myInput.split("");
console.log(jj)
var x=[1,5,2,6,3,7,5,3,8,9,10];
var y=x.sort();
var z=0;
for(var i=y.length-1;i>0;i--){
    document.write("=>"+ y[i])
    z++;
    if(z===5){
        break;
    }
}
if(document.body.innerText.indexOf("here")>-1){
    document.write("yes");
}else{
    document.write("no")
}
window.onclick=function(){
// document.getElementById("xxx").innerHTML="";
pp.classList.add("hide")
document.body.appendChild(pp)

console.log(pp)
}


var allDiv=document.getElementsByClassName("test");
for(var i=0;i<allDiv.length;i++){
    allDiv[i].addEventListener('click',function(){
        alert("hello")
    })
}