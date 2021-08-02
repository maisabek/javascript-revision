// عايز يحذف الحاجة المتكررة
function SeekAndDestory(arr,...elem){ //[1,2,3,1,2,3],2,3  
    newArr=[]
    z=0
for(var i=0;i<arr.length;i++){
    count=0
for(var j=0;j<elem.length;j++){
    if(arr[i] == elem[j]){
        count++
       }
   }
   if(count == 0){
       newArr[z++]=arr[i]
   }
   }
   return newArr
}
console.log(SeekAndDestory([1,2,3,1,2,3],2,3)) //[1,1]

// another solution
function destroyer(arr){
var args=Array.from(arguments)
args.splice(0,1)
var targets=args
var result=[]

for(var num of arr){
if(targets.indexOf(num) === -1){
result.push(num)
}
}
return result
}

console.log(destroyer([1,2,3,1,2,3],2,3)) //[1,1]

// another solution
function destroyerFn(arr){
    var args=Array.from(arguments)
    args.splice(0,1)
    var targets=args
    return arr.filter(function(num){
        //!targets.includes(num) ممكن شرط تانى 
        return targets.indexOf(num) === -1
    })
}
console.log(destroyerFn([1,2,3,1,2,3],2,3)) //[1,1]

