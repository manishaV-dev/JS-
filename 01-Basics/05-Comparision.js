// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// console.log("2" > 1); // true -- here, JS convert the string to a number then compare 
// console.log("02" > 1) // true --

/*========================================================================================================== */

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is that an equality check '==' and comparision '<, >, <=, >=' works differently.
// here, Comparision convert Null to a number, treating as a 0, thats why (4) Null >= 0 = true and (1),(2) are false.

/*========================================================================================================== */
console.log(undefined > 0); // false
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

