// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}xyz`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const manisha = new User("Manisha", "mani@fb.com", 123)
// console.log(manisha); // {username: 'Manisha', email: 'mani@fb.com', password: 123}
// console.log(manisha.encryptPassword()); // 123xyz
// console.log(manisha.changeUsername()); // MANISHA


// without using Class - Constructor ==================================================================================

function User(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const manisha = new User("Manisha", "mani@fb.com", 123)
console.log(manisha); // {username: 'Manisha', email: 'mani@fb.com', password: 123}
console.log(manisha.encryptPassword()); // 123xyz
console.log(manisha.changeUsername()); // MANISHA