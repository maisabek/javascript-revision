//كانوا بيستخدموا الكود دة زمان عشان يعملوا كلاس وياخدة منة اوبجكيت
//Egma script 5(ES5) وكان بيسمى كدة
//oop prototype based
// var User=function(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// User.prototype.test=function(){
//     console.log("test test")
// }
// var user1=new User("mai",54,654);
// user1.test();

//ES6 دا الجديد
//oop class based
class User{
    //كل كلاس فية كونستركتور واحد بس
    constructor(name,age,salary){
        this.name=name;
            this.age=age;
            this.salary=salary;
    }
    getWidth(){
        console.log("getwidth")
    }
}
var user1=new User("mai",54,654);
user1.getWidth();