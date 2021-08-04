// window.print()

function factorial(num){
    var fact=1;
for(var i=1;i<=num;i++){
  fact*=i
}
return fact
}
var num=document.getElementById("factorialNum")
num.addEventListener("blur",function(){
 document.write(" factorial("+num.value+") = ",factorial(num.value))
console.log(" factorial("+num.value+") = ",factorial(num.value))   
})

// using recurision
function fact(num){
    if(num == 1){
        return 1
    }else{
        return num*fact(num-1)
    }
}

console.log("fact(6) = ",fact(6))

// لو عايزة ارجع عنصر اتحذف فى الاراى
// arr=[2,3,1,5,4,7,9,10,8]
// delete arr[3]

// z=0
// for(var i=1;i<=10;i++){
//     if(arr.indexOf(i) === -1){
//       document.write(i)
//       console.log("i = ",i)
//       break
//     }
// }