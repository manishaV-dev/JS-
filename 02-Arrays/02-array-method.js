// Array = [a,b.c] == Element

/*
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
Arrays use numbers to access its "elements". ex = person[0]
Objects use names to access its "members". ex= person.firstName

Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

*/


// const myArr = [1,2,3,4,5]
// console.log(myArr)
// console.log(myArr[2])

const indieHero = ["Shaktiman", "Nagraj", "Krishh"] 
const anotherArr = new Array(2,3,4,5)
console.log(anotherArr[2]); // 4

// ========================================= Methods ============================

/*
        1. Push()

*/

const myArr = [1,2,3,4,5]
myArr.push(20)
console.log(myArr); // [1,2,3,4,5,20]

let myArr2 = [...myArr]
myArr2.push(10)
console.log(myArr2); // [1,2,3,4,5,20,10]


