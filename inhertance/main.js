import User from './app.js'
class Admin extends User{
    constructor(name,email){
        super(name,email) // parent constructor لل  call بتعمل 
    }
}

let firstAdmin=new Admin("osama","o@nn.sa")
firstAdmin.getInfo()