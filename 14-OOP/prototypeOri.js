let myName = "Manisha    ";
console.log(myName.length); // 11
console.log(myName.trim().length); // 7

//=========================================================================================================================
//=========================================================================================================================

let myHero = ["Thor", "Spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// create own method --- here we create method on Object so it is accessible to Array,string, function and so on
Object.prototype.myMethod = function () {
  console.log(`My own method is created by using Object.Prototype`);
};
// object has this method by default
heroPower.myMethod(); // My own method is created by using Object.Prototype

// also array has this method by default
myHero.myMethod(); // My own method is created by using Object.Prototype

// also string has this method by default
myName.myMethod(); // My own method is created by using Object.Prototype

//=========================================================================================================================
//=========================================================================================================================

// Create method on Array -- so it only accessible to Array neither Object nor other data type
Array.prototype.sayHello = function(){
    console.log(`Hello Everyone!`);
}
myHero.sayHello(); // Hello Everyone!
// heroPower.sayHello(); // TypeError: heroPower.sayHello is not a function

//=========================================================================================================================
//=============================================   INHERITANCE   ===========================================================


const User = {
    username : "Manisha",
    email : "mani@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : true,
    fulltime : false,
    // 1st approach : prototypal Inheritance --- OLD Method
    __proto__ : TeachingSupport
}

//2nd approach : prototypal Inheritance --- OLD Method
Teacher.__proto__ = User

// Modern Syntax for Prototypal Inheritance

Object.setPrototypeOf(TeachingSupport, Teacher)


//=========================================================================================================================
//=========================================================================================================================

// here we want to create our own customize method. 
// like we there is space in string it should be removed without using predefined method

let anotheruserName = "Simran"
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

anotheruserName.trueLength(); 
// here value of this is : String {'Simran'} ... this === current context
// True length is 6

let strWithSpace = "Radha    "
strWithSpace.trueLength(); 
// String {'Radha    '}
// True length is 5

"iceTea".trueLength(); // // True length is 5