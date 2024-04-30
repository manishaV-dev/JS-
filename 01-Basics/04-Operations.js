console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 8
console.log(2/2); // 1
console.log(3%2); // 1

let str1 = "Hello";
let str2 = ' World'
let str3 = str1 + str2;
console.log(str3)


/*Postfix Increment = If used postfix, with operator after operand (for example, a++), the increment operator 
increments and returns the value before incrementing.*/

let a = 5;
let b = a++
console.log(`a : ${a} and b : ${b}`); // a:6, b:5


/* Prefix Icrement = If used prefix, with operator before operand (for example, ++x), the increment operator 
increments and returns the value after incrementing. */

let x = 5;
let y = ++x;
console.log(`x: ${x} and y: ${y}`); //x =6, y=6