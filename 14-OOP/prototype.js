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
console.log(multiplyBy4.prototype) // object

