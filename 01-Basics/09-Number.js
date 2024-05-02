// The JavaScript interpreter works from left to right.

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


// ============================================ Numbers ===================================


// 1. JavaScript will try to convert strings to numbers in all numeric operations: (/, *, -)
let a = '100'
let b = '10'
console.log(a/b); // 10 -- type will become Number
console.log(a*b); // 1000 -- type will become Number
console.log(a-b); // 90 -- type will become Number
console.log(a+b); // 10010 -- type still String as + is used to concatenate a string


/*

NaN is a JavaScript reserved word indicating that a number is not a legal number.
        Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
        NaN is a number: typeof NaN returns number:

*/

let x = 100 / "Apple";
console.log(x) ; //NaN

// however if the string is numeric, the result will be a number:

let z = 100 / "10";
console.log(z); // 10


/*

Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
        Division by 0 (zero) also generates Infinity:
        Infinity is a number: typeof Infinity returns number.



        Notes: 
                1.  Never write a number with a leading zero (like 07).
                Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

                2. By default, JavaScript displays numbers as base 10 decimals.

                3. But you can use the toString() method to output numbers from base 2 to base 36.

*/

let myNumber = 32;
console.log(myNumber.toString(32)); // 10
console.log(myNumber.toString(16)); // 20
console.log(myNumber.toString(2)); // 100000


// JavaScript Numbers as Objects -- Normally JavaScript numbers are primitive values created from literals:
//                                  But numbers can also be defined as objects with the keyword new:

let y = new Number(123);
console.log(y);

/*

Do not create Number objects.
The new keyword complicates the code and slows down execution speed.
Number Objects can produce unexpected results:


*/

let x1 = 500;
let y1 = new Number(500);
console.log(x1 == y1); // true
console.log(x1 === y1); // false

let k = new Number(300)
let j = new Number(300)

// Comparing two JavaScript objects always returns false.s
console.log(k == j); // false
console.log(k === j); //false
