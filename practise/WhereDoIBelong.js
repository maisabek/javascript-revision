// هيدخل عنصر فى الاراى عايز يعرف الاندكس بتاعة
function belonger(arr,elem){
sortedArr=arr.sort() // [10,20,40,50,70]
for(var i=0;i<sortedArr.length;i++){
if(elem <= sortedArr[i] ) {
    return i;
}
}
return sortedArr.length
}
console.log(belonger([40,50,10,20,70],80))
