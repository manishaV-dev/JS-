class User {
    constructor(username){
        this.username = username
    }

    callMe(){
        console.log(`Username is : ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const hima = new User("Hima")
// without using static -- have access
// console.log(hima.createID()); // 123
// after using static -- haven't access
// console.log(hima.createID()); // hima.createID is not a function

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const sam = new Teacher("Sam", "sam@io.com", 2568)
sam.callMe(); // Username is : Sam
console.log(sam.createID()); // sam.createID is not a function


