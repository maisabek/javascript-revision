// هيدخل اتنان استرنج لازم الاسترنج الاول يكون جواة حروف الاسترنج التانى

function Mutations(s1,s2){  //aliens
    count=0
for(var i=0;i<s1.length;i++){ //lien
for(var j=0;j<s2.length;j++){
if(s1[i].toLowerCase() == s2[j].toLowerCase()){
count++
}
}}

if(count >= s2.length){
    return true
}else{
    return false
}

}
console.log(Mutations("hello","Hello")) // true

// another solution
function mutations(arr){
var firstWord=arr[0].toLowerCase()
var secondWord=arr[1].toLowerCase()
for(var i=0;i<secondWord.length;i++){
if(firstWord.indexOf(secondWord[i]) === -1) return false
}
return true
}
console.log(mutations(["hello","Hello"]))

// another solution
function mut(arr){
    var firstWord=arr[0].toLowerCase()
    var secondWord=arr[1].toLowerCase() 
    for(var letter of secondWord){
        // !firstWord.includes(letter) ممكن بدل الشرط دة احط 
      if(firstWord.indexOf(letter) === -1) return false
    }
     return true
}

console.log(mut(["hello","Hellor"])) // false