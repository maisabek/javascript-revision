//هيدخل استرنج ويرجع من اول الاندكس اللى انا مديهولوة

function Slasher(arr,num){ //[1,2,3,4]
    arr2=[]
    x=0
    for(var i=num;i<arr.length;i++){
     arr2[x++]=arr[i]
    }
    return arr2
}
console.log(Slasher(["burgers","fries","shake"],1))

function Slashe(arr,num){ //[1,2,3,4]
    arr.splice(0,num)
    return arr
}
console.log(Slashe(["burgers","fries","shake"],1)) // ["fries","shake"]