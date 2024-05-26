/*
     "Everything is an 'OBJECT" in JS".
    "Every JavaScript object has an internal link to another object called its prototype."

*/

function multiplyBy4(num){
    return num * 4;
}

multiplyBy4.power = 2;

console.log(multiplyBy4(5)) // 20
console.log(multiplyBy4.power) // 2
console.log(multiplyBy4.prototype) // {} object


function createGame(gameName, score){
    this.gameName = gameName;
    this.score = score;
}

createGame.prototype.printMe = function(){
    // this means current context 
    console.log(`Scroe is : ${this.score}`);
}


const gameOne = new createGame("Witcher", 850)
const gameTwo = new createGame("God of War", 569)

gameOne.printMe(); // Scroe is : 850



/*
    Here's what happens behind the scene when the new keyword is used: 

    A New object is created : The new keyword initiates the creation of a new JS object.

    A prototype is linked: The newly created gets linked to the prototype property of the 
    constructor function. This means that it has access to prototype and methods defined
    on the constructor's prototype.

    The constructor is called: The constructor function is called with the specified arguments
    and this is bound to the newly created object. If np explicit return value is specified from
    constructor. Javascript assumes this, the newly created object, to be the intended return value.

    The new object return : After the constructor function has been called, if it doesn't return a
    non-primitive value (Object, array, function etc), the newly created object is returned.


*/
