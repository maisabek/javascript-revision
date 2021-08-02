// falsyValue ويرجع اراى من غير ال falsyValue هيدخل اراى عايز يطلع منها ال 

function FalsyBouncer(arr){ // [7,"ate","",false,9]
var falsyValue=[false,null,"",0,"undefined","NaN"]
newArr=[]
z=0
for(var i=0;i<arr.length;i++){
    count=0
    for(var j=0;j<falsyValue.length;j++){

    if(arr[i] == falsyValue[j]){
     count++
    }
}
if(count == 0){
    newArr[z++]=arr[i]
}
}
return newArr
}
console.log(FalsyBouncer([7,"ate","",null,"",9,"NaN",undefined,20,"he"]))

// another solution

function bouncer(arr){
var truthies=[]
for(var elem of arr){
    if(elem) truthies.push(elem)
}
return truthies
}
console.log(bouncer([7,"ate","",null,"",9,"NaN",undefined,20,"he"]))

// another solution

function bouncerFn(arr){
return arr.filter(function(elem){
    return elem
})
}
console.log(bouncerFn([7,"ate","",null,"",9,"NaN",undefined,20,"he"]))
