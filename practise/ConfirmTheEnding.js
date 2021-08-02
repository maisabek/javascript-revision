// هيدخل اتنان استرنج ويشوف هل الاسترنج دة بينتهى بنفس الاسترنج التانى
function ConfirmTheEnding(str,target){
var s1=str.slice(str.length-1)
console.log(s1)
if(s1 == target){
return true
}else{
    return false
}
}
console.log(ConfirmTheEnding("button","n"))


// another solution
function confirmEnding(str,target){
    // if(str.endsWith(target)){
    //     return true
    // }
    // return false

    return str.endsWith(target)
}
console.log(confirmEnding("button","n"))

// another solution
function confirmEnd(str,target){
// if(str.substr(-target.length) === target){
//   return true
// }
// return false
return str.substr(-target.length) === target
}
console.log(confirmEnd("button","n"))

