const src1={
    prop1:"value1",
    prop2:"value2",
    method1:function(){
        return 'method 1';
    }
}

const src2={
    prop3:"value3",
    prop4:"value4",
    method2:function(){
        return 'method 2';
    }
}

const target={
    prop5:"value5"
}
//بينسخ كل اللى الموجود فى 
//src1
//وتحطة فى تارجيت
Object.assign(target,src1);
console.log("Object.assign(target,src1) : ",target)

//وممكن اكتر من اوبجكيت انسخة فى اوبجكيت
Object.assign(target,src1,src2);
console.log(target);

//وممكن نضيف خاصية جديدة
Object.assign(target,src1,src2, { prop6: "value5"});
console.log(target);

//ممكن انسخ الاوبجكيت تارجت فى الاوبجكيت الفاضى
const myObj= Object.assign({}, target);
console.log("myObj",myObj);

const user={
    name:"mmm"
}
console.log(user.name)
//delete property not object
console.log(delete user["name"]); 
console.log(user.name);
console.log("#".repeat(15)); //هتكرر الهاش 15 مرة

//اى حاجة 
//const,let,var
//مقدر اعملها دليت

//اوبجكيت مقدرش اضيف عليه حاجات مقدرش اعمل دليت
const freezObj=Object.freeze({age:37});
console.log(freezObj);
console.log(freezObj.age)
console.log(delete freezObj.age) //مش هيحذف عشان دة فريز اوبجكيت
console.log(freezObj);
console.log(freezObj.age);

const eobj={}
//defineProperty(اسم الاوبجكيت,"key",{value:1,configurable:false})بعمل تعريف للبوبرتى
//configurable:falseيعنى مقدرش احذف البوربرتى دى 
Object.defineProperty(eobj,"a",{value:1,configurable:true})
console.log(eobj)
console.log(eobj.a)

console.log(delete eobj.a);

console.log(eobj);
console.log(eobj.a);


/*
  For ... In Loop
  Loop Through The Properties Of The Objects
*/

const user1 = {
    name: "Osama",
    country: "Egypt",
    age: 37,
  };
  
  let finalData = "";

//   info=key
  for (let info in user1) {
    // console.log(`The ${info} Is => ${user[info]}`);
    finalData += `<div>The ${info} Is => ${user1[info]}</div>`;
  }
  
  // console.log(user.country);
  // console.log(user["country"]);
  
  console.log(finalData);
  
  document.getElementById("info").innerHTML = finalData;

  /*
  Constructor Function
*/

function MyPhone(serial, color, price) {
    this.serial = 1;
    this.color = 2;
    this.price = 3;
  }
  
  let myphone = new MyPhone(123, "Red", 500);
  console.log(myphone.serial) //هيطبع واحد ومش هيعدل

function Phone(serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price - 100;
  }
  
  let phone1 = new Phone(123, "Red", 500);
  let phone2 = new Phone(159, "Black", 500);
  let phone3 = new Phone(167, "Silver", 500);
  
  console.log(phone1.serial);
  console.log(phone2.color);
  console.log(phone3.price);

function phone(serial){
    //الاوبجكيت اللى احنا بنعملة من الكنسركتور فنكشن
    console.log(this);
    this.serial=`#${serial}`; //عايز يحط قبل السريل هاش
}
let phon1=new phone(22333);
let phon2=new phone(543321);
let phon3= phone(987651);
console.log(phon1.serial);
console.log(phon2.serial);
// console.log(phon3.serial);هتطلع ايرور الصح بتاعها
console.log(window.serial);

console.log(phon1 instanceof phone); //هل فون1 نسخة من فون بترجع ترو او فالس
console.log(phon2 instanceof phone);
console.log(phon3 instanceof phone);

//instanceof نفس ال
console.log(phone1.constructor === Phone);
console.log(phone2.constructor === Phone);
// console.log(phone3.constructor === Phone); // Error

function Users(fName, lName, age, country) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.country = country;
    this.fullName = function () {
      return `Full Name: ${this.fName} ${this.lName}`;
    };
}
let users1 = new Users("Osama", "Elzero", 37, "Egypt");
console.log(users1.fullName());


let num1 =new Number(1) //دا كونستركتر هما اللى عملينة عشان يعملى رقم
let str=new String("mmm")
let str3="mkkk" //هو بيعمل استرنج كونستركتر زى اللى فوق














































