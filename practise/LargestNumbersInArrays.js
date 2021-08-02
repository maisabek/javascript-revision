// ويطلع اكبر رقم من كل اراى multidimensial هيدخل جو اراى

function LargestNumbersInArrays(arr){
return Math.max(...arr)
}
// console.log(LargestNumbersInArrays([1,3,55,7,8]))

// another solution
function LargestNumbers(arr){
var max=arr[0]
for(var i=0;i<arr.length;i++){
    if(arr[i] > max){
      max=arr[i]
    }
}
return max
}

// find max in multidimensial array
function larger(arr){
    var arr2=[]
for(var i=0;i<arr.length;i++){
  arr2[i]=Math.max(...arr[i])
}
return arr2
}

console.log(larger([[1,3,44,5,24],[1,20,30,690,10],[1,22,11,55,1234]]))

//another solution

function Largest(arr){
    var max=[]
    for(var i=0;i<arr.length;i++){
        var tempMax=arr[i][0]
        for(var j=0;j<arr[i].length;j++){
        if(arr[i][j] > tempMax){
            tempMax=arr[i][j]
        }
    }
    max.push(tempMax)
}
    return max
    }
    console.log(Largest([[-1,3,44,5,24],[1,20,30,690,10],[1,22,11,55,1234]]))
