class User {
    constructor(username){
        this.username = username
    }

    callMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course added by ${this.username}`);
    }
}

const sia = new Teacher("Sia", "sia@x.com", 2546)
sia.addCourse(); // New course added by Sia
sia.callMe(); // Username is : Sia

const ria = new User("Ria")
ria.callMe(); // Username is : Ria
// ria.addCourse(); // ria.addCourse is not a function

console.log(sia instanceof Teacher); // true
console.log(sia instanceof User); // true
