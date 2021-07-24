/*
 ؟؟ OPP , procedural الفرق بين ال 

procedural
البرنامج بيتقسم لل فنكشن ومتغيرات
overLoading is not possible
hiding data is not possible
data is separated
_________________
OPP
البرنامج بيتقسم للميثود واوبجكيت
overLoading is  possible
hiding data is  possible
data is in one location
لية بنستخدمة؟؟؟؟
large and complex softwareبيسهل ال
بقدر اعمل اخفاء لجزء من الداتا عن طريق ال
encupsulation

*/
//Defining object

let user = {
    //properties
    fName:"mmm",
    lName:"nmn",
    age:37,
    1:"1",
    "two!":6,
    address:{
       eg:"mm",
       usa:"bn"
    },
    //function
    getFullName:function(){
       return `fullName: ${user.fName} ${user.lName}`;
    },
    getAgeInDays:() => `your age ${user.age}`

}
document.write(user.getFullName());
//access تقدر تعمل 
//على الاوبجكيت بطريقتين
//dot notation
console.log(user.age)
//bracket Notation
console.log(user["age"])
console.log(user["two!"]) //هنا متنفعش بالدوت عشان علامة التعجب
console.log(user["1"]) //مينفعش دوت ولازم بركتس عشان مينفعش فى الدوت يبدء بواحد

//طريقة تانية لتعريف الاوبجكيت
let user2 = new Object();
user2.fName= "nnn";
user2.lName="mmm";
user2["age"]=20;
user2.getFullName=function(){
return `full ${user2.lName}`
}
let user3 = new Object({a:1});

let mainObj={
    hasDiscount:true,
    showMsg:function(){
//this بتعود على الاوبجكيت اللى انا مسكاة يعنى لو عملت اوبجكيت جديد وجات اعدل تبقى بتشاور على الاوبجكيت اللى انا لسة عملاة
    return `you ${this.hasDiscount ? "":"Dont"} Have Discount`
    }
}
console.log(mainObj.showMsg())
//عشان اعمل اوبجكيت جديد واقر اعدل فى الداتا اللى جوة الاوبجكيت
let otherObj = Object.create(mainObj);
otherObj.hasDiscount = false;
console.log(otherObj.showMsg());



































