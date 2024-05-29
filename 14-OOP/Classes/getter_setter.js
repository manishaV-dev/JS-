// Class based getter setter
class User {
    constructor(username, password){
        this.username = username
        this.password = password
    }

    get password(){
        return `${this._password.toUpperCase()}`
    }

    set password(value){
       this._password = value
    }
}

const manisha = new User('Manisha', 'mani#@')
console.log(manisha);
console.log(manisha.password); // MANI#@


//=============================================== OLD CODE PRACTISE =================================================
// function Based or Property Based getter setter

function Admin(email, password){
        this._email = email
        this._password = password

        Object.defineProperty(this, "email", {

           get: function(){
            return this._email.toUpperCase()
           },

           set: function(value){
            this._email = value
           }

        })


        Object.defineProperty(this, "password", {

            get: function(){
             return this._password.toUpperCase()
            },
 
            set: function(value){
             this._password = value
            }
            
         })
}
const radha = new Admin("radha@io.com", "radh98uj")
console.log(radha.email); // RADHA@IO.COM
console.log(radha.password); // RADH98UJ


// Object Based getter setter

const gamer = {
    _email : "game@gamer.com",
    _password : "gamer65",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

console.log(gamer.email); // GAME@GAMER.COM

const witcher = Object.create(gamer)
console.log(witcher.email); // GAME@GAMER.COM