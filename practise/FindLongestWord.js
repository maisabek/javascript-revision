// هيطلع اطول استرنج من الاسترنج
function FindLongestWord(str){
var newStr=str.split(" ")
var arr=[]
for(var i=0;i<newStr.length;i++){
    arr[i]=newStr[i].length
}
var max = Math.max(... arr)
for(var i=0;i<newStr.length;i++){
    if(newStr[i].length == max){
        return newStr[i]
    }
}
}
console.log(FindLongestWord("The quick brown fox jumped over the lazy dog"))

// another solution
function findLongestWord(str){
    return str.split(" ").sort((a,b)=>{return b.length - a.length})[0]
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
