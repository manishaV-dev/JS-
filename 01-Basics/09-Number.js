const number = 100;
console.log(number)

const score = new Number(400)
console.log(score);

console.log(score.toString());
console.log(score.toString().length); //3

console.log(score.toFixed(2)); // 400.00

const otherNumber = 23.589
const roundNum =otherNumber.toPrecision(2); // toPrecision returns a string
console.log(roundNum); // 24
console.log(typeof roundNum); // string

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 -- by default gives US-Number System


// ==================================   MATHS =======================================================

console.log(Math)

// Convert Neg to Positive only by abs method

console.log(Math.abs(-10)); //10
console.log(Math.round(9.8)) ; // 10

// round top value
console.log(Math.ceil(4.2)); // 5

// lowest value
console.log(Math.floor(4.9)); // 4

console.log(Math.sqrt(625)); //25

console.log(Math.min(1,5,8,4)); // 1
console.log(Math.max(1,5,8,4)); // 8

// 0-1
console.log(Math.random());

// >=1
console.log((Math.random()*10) + 1)

// lowest round Num 1-10 , + 1 is used to avoid 0
console.log(Math.floor(Math.random()*10) + 1)

let max = 20;
let min = 10
// + 1 is used to avoid 0
console.log(Math.floor(Math.random() * (max-min + 1 )) + min)