// reverse الاسترنج بيكون نفسة لما يعملة
//   ولازم يلغى المسافات والرموز
function Palindrome(str){
    var reg=/[\W_]/g  // Any Non-alphanumeric character
    var reversedString=""
    str=str.toLowerCase().replace(reg,"") // remove Any Non-alphanumeric character
    for(var i=str.length-1;i>=0;i--){
      reversedString+=str[i]
    }
    if(str == reversedString){
        return true
    }else{
        return false
    }
}
document.write("<br>")
document.write("Palindrome(racar) ",Palindrome("ra car(/"))