// هيدخل استرنج ويكررة عدد من المرات
function RepeatStringNumTimes(str,num){
    s=""
for(var i=0;i<num;i++){
s+=str
}
return s

}
console.log(RepeatStringNumTimes("abc",2))

// another solution
function RepeatStringNum(str,num){
if(num<0) return ""
return str.repeat(num)
}
console.log(RepeatStringNum("abc",2))

// another solution using recurision
function repeatString(str,num){
if(num<0) return ""
if(num == 1) return str
return str+repeatString(str,num-1)
}
console.log(repeatString("abc",3))

