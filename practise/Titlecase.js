// هيدخل استرنج ويرجع الاسترنج اول حرف من كل كلمة كابتل
title=""
function titleCase(str){
newStr=str.split(" ")
for(var i=0;i<newStr.length;i++){
    s=newStr[i].slice(0,1).toUpperCase()
    title+=(s+newStr[i].slice(1)+" ")
}
return title
}
document.write("<br>")
document.write("<br>")

document.write(titleCase("I'm a little tea pot"))