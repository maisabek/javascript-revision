// فيها عناصر multidimensial عايز يقسم الاراى ل اراى 

function ChunkyMonkey(arr,num){
    var arr2 = new Array();
     x=0
 for(var i=0;i<arr.length;i+=num){//0 3
    arr2[i]=new Array()
     for(var j=0;j<num;j++){ // 0 1
         arr2[i][j]=arr[x++]
         if(arr.length == x) break
        // console.log("arr.length-1 = ",arr.length-1+" / x = "+x)
     }
    
 }
 return arr2
}
console.log(ChunkyMonkey([0,1,2,3,4,5,6],3))


//another solution

function chunky(arr,num){
  var groups=[]
  while(arr.length > 0){
      groups.push(arr.slice(num))
      arr=arr.slice(num)
  }
  return groups
}
console.log(chunky([0,1,2,3,4,5,6],3))