/*
  Class
*/
//static لية علاقة بالكلاس بس ملهاش علاقة بالاوبجكيت
class User {
   // Static Properties
   static counter = 0;

    constructor(name, email, counter) {
      this.name = name;
      this.email = email;
      this.counter = counter;  //ملوش دعوة بالكونتر الستاتك
      User.counter++;
    }
    sayHello(){
      return `Hello ${this.name}`;
    }
    showEmail(){
      return `Your Email Is ${this.email}`;
    }
    // Static Methods بترجع هو عمل كريات لكام اوبجكيت
  static countObjects = function () {
    return `${this.counter} Objects Created.`;
  }
  }
  
  let user1 = new User("Osama","o@nn.sa", 2)
  //  console.log("user1.counter : ",User.counter)
  let user2 = new User("Ahmed")
  let user3 = new User("Osama", "o@nn.sa") //هيطلع ايرور وهيقولى ان الايرور هو ان مفيش كلمة نيو
  let user4 = new User("Ahmed")
  let user5 = new User("Ahmed")


  
  // console.log("user1 : "+typeof(user1));
  console.log(user2);
  console.log(typeof User); // Function بترجع 
  console.log( User === User.prototype.constructor) // true
  // لازم ينادى عليها باسم الكلاس
  console.log(User.countObjects());

  /*
  Class Inheritance
  */

class User2 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello(){
    return `Hello ${this.name}`;
  }
  showEmail(){
    return `Your Email Is ${this.email}`;
  }
  writeMsg(){
    return `Message From Parent Class`;
  }
}

class Admin extends User2{
  constructor(name, email) {
// بينادى على الكونستركتور بتاع البيرنت ويقدر يعمل اكسس على البروبيرتى بتعاة البيرنت
    super(name, email);  
  }
  adminMsg(){
    return `You Are Admin`;
  }
   //ميثود اوفر رايد
  writeMsg(){
    return `Message From Child Class`;
  }
}

let admin1 = new Admin("Osama", "o@nn.sa");
console.log(admin1.sayHello());
console.log(admin1.showEmail());
console.log(admin1.writeMsg());
console.log(admin1.adminMsg());

/*
  JavaScript Accessors
  Getters بتحيب قيمة معينة 
  & Setters بتحط قيمة معينة لمتغير موجود عندى
*/

class User3 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  //دى مبقتش ميثود وبقيت بروبيرتى لما اجى استدعيها محطش اقواس
  get showInfo() { 
    return `Name: ${this.name}, Email" ${this.email}`;
  }
  changeName(newName) {
    this.name = newName;
  }
  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user6 = new User3("Osama", "o@nn.sa");

console.log(user6.name);
console.log(user6.email);
//محطش اقواس عشان بقيت بروبرتى
console.log(user6.showInfo);

user6.changeName("Mahmoud")
console.log(user6.name)
console.log(user6.showInfo)

//غيرت من غير ما احط اقواس الفنكشن لان لما حطيت كلمة سيت قبل الفنكشن حولتها للبروبرتى
user6.changeEmail = "oooo@gmail.com";
console.log(user6.name);
console.log(user6.email);
console.log(user6.showInfo);

/*
  Object Meta Data معلومات عن معلومات
  الديفلت بتاعهم كلهم فولس
  writable
  enumerable
  configurable
  ============
  بضيف بروبرتى جديدة او بتعدل على بروبرتى موجودة فى الاوبجكيت
  Object.defineProperty(obj, prop , descriptor)
*/

const myObject = {
  a: 1,
  b: 2,
};

//عشان نضيف قيمة جديدة
Object.defineProperty(myObject, "c", {
  writable: false, //يعنى القيمة اللى مدياها لل سى قابلة للتغير لو واخدة ترو ولو واخدة فالس غير قابلة للتغير
  enumerable: false,//فية لووب بيحصل مبيضفش  
  configurable: true,//لو بترو نقدر نحذف لو بفولس منقدرش نحذف واقدر اعمل اوفر رايد على الخاصيتين اللى قبلها اقدر اعمل ولا لا
  value: 3,
});

console.log(myObject);
console.log("#".repeat(10));

Object.defineProperty(myObject, "c", {
  writable: true, //عدلت الفالس خليتها ترو فبالتالى قدر يعدل عليها
})

// console.log(delete myObject.c); // Will Not Delete Because configurable is False
myObject.c = 500; // Will Not Change Because writable is False
console.log(myObject);

console.log("#".repeat(10));

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log("#".repeat(10));

// بتجيب اسماء البروبرتى
console.log(Object.getOwnPropertyNames(myObject));

// عشان اعدل على قيمة موجودة  

Object.defineProperty(myObject, "a", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 500,
})

console.log(myObject);

Object.defineProperty(myObject, "c", {
  value: 3,
});

//هو هنا بيضيف عادى بس ملوش اى كنترول عليها
myObject.d = 4;

// اكتر من فاليو يعنى اوبجكيت 
Object.defineProperties(myObject, {
  e: {
    value: 5,
  },
  f: {
    value: 6,
  },
  g: {
    value: 7,
  },
});
console.log("ةةةةة")

//بترجع 3 خصائص هل هما ترو ولا فولس
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyNames(myObject));
 // بترجع الكى 
console.log(Object.keys(myObject));


/*
  Importants Notes And The End
  [1] Arrow Functions Do Not Have a Prototype Property.
 
*/

class User5 {
  constructor(fName, lName, age, email) {
  // [2] You Can Use Objects Inside Constructor Freely
    this.name = {
      first: fName,
      last: lName,
    };
    this.age = age;
    this.email = email;
  }
 // [3] f = function () {} ==== f() {}
  sayHello = function () {
    return `Say Hello`;
  };
  sayHi() {
    return `Say Hi`;
  }
}




  