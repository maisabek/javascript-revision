var allimg=document.getElementsByTagName('img');
var alldiv=document.getElementsByClassName('img1');
var mydiv=document.getElementById('allimg');
var myarr=[];

var prev=document.getElementById('prev');
var currentindex=0;
for(var i=0;i<allimg.length;i++){
    myarr.push(allimg[i]);
}
prev.addEventListener('click',function(){
    console.log(currentindex)
alldiv[currentindex].classList.add("show");
alldiv[currentindex].style.backgroundImage="url("+myarr[currentindex].src+")";
currentindex++;
if(currentindex == myarr.length-1){currentindex=0}
})