// Prototype كل ما بعمل فنكشن جديدة فى ديفلت فنكشن بتتنشأ للفنكشن دة اللى هى ال
function sayHello(){
    return 1;
}
//هترجع اوبجكيت فية بروبيرتى اللى هى الكونستركتور والفاليو بتاعتها اللى هى الفنكشن
console.log(sayHello.prototype) 
//الفنكشن دى بتقول مين اللى انشأ الكنستركتور دة 
//كلها Prototype اى اوبجكيت بعملة بيقدر يورث خصائص ال

const arr=[1,2,3,4,5];
console.log(Array.prototype) //هيجبلى اللى جوة الارى

function User(name) {
    this.name = name;
    this.welcome = function () {
      return `Welcome ${this.name}`;
    };
}
  
  let user1 = new User("Osama");
  let user2 = new User("Ahmed");
  console.log("#".repeat(5))
  console.log(User.prototype);
  console.log(user1)

  User.prototype.addTitle = function () { //هيضيف الفنكشن جوة البروتوتايب
    return `Mr. ${this.name}`;
  }

  console.log(Object.prototype)
//كدة ضاف البروبيرتى الزيرو للاوبجكيت فاى اوبجكيت يعملة كريات يقدر يعمل اكسس على البروبيرتى دى
Object.prototype.elzero = "Elzero Web School";

const myObject = { a: 1, b: 2 };
console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.elzero);

console.log(String.prototype) //اى ميثود اتعملت معاة للاسترنج موجوودة هنا

let myString="mm"
//بتحط اصفار قبل الرقم عشان توصل الرقم لودس معين عشان الارقام تبقى اقد بعض
String.prototype.zFill = function (width) {
    //this بتعود على الاسترنج اللى هدهولها
    let theResult = this;
    while (theResult.length < width) { //عشان اتاكد ان الودس بتاع كل الارقام اقل من الودس اللى مديهولى عشان يفضل يضيف اصفار
        theResult = `0${theResult}`;
      }
    
      return theResult.toString();
}
console.log("12".zFill(6));
console.log("516".zFill(6));
console.log("3625".zFill(6));
console.log("25145".zFill(6));
console.log("987654".zFill(6));

String.prototype.sayYouLoveMe = function () {
    return `I Love You ${this}`;
}
console.log("Osama".sayYouLoveMe());