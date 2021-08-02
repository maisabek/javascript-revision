var s="hello"
var reversedString=""

for(var i=s.length-1;i>=0;i--){
    reversedString+=s[i]
}
document.write(" reversedString ("+ s +") = ",reversedString)
console.log(" reversedString = ",reversedString)



// another solution

function reverseString(str){
   var strArr=str.split("") // حول الاراى الى استرنج
   var reverseStrArray=strArr.reverse() // عمل ريفرس للاراى
   var reverseString=reverseStrArray.join("") // رجع الارى دى لاسترنج بعد ما عملها ريفرس
   return reverseString
   /*
   another solution
   return str.split("").reverse().join("")
   */
}
document.write("<br>");
document.write(" reversedString ("+ s +") = ",reverseString(s))

console.log(reverseString(s))

document.write("<br>")