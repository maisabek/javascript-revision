class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    getInfo() {
      console.log(`Hello ${this.name} Your Email is ${this.email}`);
    }
  }
  

  export default user; // parent