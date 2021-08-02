
// هيدخل اتنان اراى عايز يرجع اراى فيها العناصر اللى مش موجودة فى الاراى الاولى والتانية
function DiffArray(arr1,arr2){
    arr3=[]
    z=0
for(var i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i]) === -1){
      arr3[z++]=arr1[i]
    }
}
for(var i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i]) === -1){
      arr3[z++]=arr2[i]
    }
}
return arr3
}

console.log(DiffArray([1,2,3,4,5,6,7],[11,1,2,3,5,8,10])) // [4,6,7,8,10]

// another solution

function differ(arr1,arr2){
var combo=arr1.concat(arr2)

return combo.filter(function(num){
    if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1){
     return num
    }
})
}
console.log(differ([1,2,3,4,5,6,7],[11,1,2,3,5,8,10])) // [4,6,7,8,10]

