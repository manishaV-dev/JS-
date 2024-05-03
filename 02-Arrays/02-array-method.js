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

let myArr = [1,2,3,4,5]
myArr.push(20)
console.log(myArr); // [1,2,3,4,5,20]

let myArr2 = [...myArr]
myArr2.push(10)
console.log(myArr2); // [1,2,3,4,5,20,10]


/*
       2. Pop()

*/

myArr2.pop();
console.log(myArr2) ; // [1,2,3,4,5,20]


/*
       3. unshift()

*/

myArr.unshift(100)
console.log(myArr); // [100,1,2,3,4,5,20]

/*
       4. shift()

*/

myArr.shift()
console.log(myArr); // [1,2,3,4,5,20]

/*
       5. includes()

*/

console.log(myArr.includes(10)); // false

/*
       6. indexOf()

*/

console.log(myArr.indexOf(5)); // 4
console.log(myArr.indexOf(10)); // -1 -- if element is not there then give -1.


/*
       7. join()

*/

const newArr = myArr.join();
console.log(myArr); // [1,2,3,4,5,20]
console.log(newArr, typeof newArr); // 1,2,3,4,5,20 -- string


/*
       8. slice()

*/

const myNewArray = [10,20,40,30,80]
console.log("A : ",  myNewArray) // A : [10,20,40,30,80]
let usingSlice = myNewArray.slice(1,4)
console.log(usingSlice); // 20,40,30
console.log("After Using Slice : ", myNewArray) // After Using Slice : [10,20,40,30,80]




/*
       9. splice() -- Manipulate the orignal array

*/

let usingSplice = myNewArray.splice(1,3)
console.log(usingSplice); // [20,40,30]
console.log("After Using Splie : " , myNewArray) ; // [10, 80]


/*

    10. Concatenate
*/

const marvel_heros = ['Thor', 'Ironman', 'Hulk']
const dc_heros = ['Batman', 'Superman', 'Flash']

// i -- by using push( work on existing array)

// marvel_heros.push(dc_heros); // Bad Code practise
// console.log(marvel_heros); // ['Thor', 'Ironman', 'Hulk',['Batman', 'Superman', 'Flash'] ]
// console.log(marvel_heros.length); // 4
// console.log(marvel_heros[3][1]); // Superman

// ii --  concate -- return a new array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) ; // ['Thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash']
// console.log(marvel_heros); // ['Thor', 'Ironman', 'Hulk']

// iii -- spread operator

const all_New_Heros = [...marvel_heros, ...dc_heros];
console.log(all_New_Heros); // ['Thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash']


/*

    11. Flat
*/

const another_Array = [1,2,3,[4,5],8,[6,8, [0,10]]] // here depth is 2
let real_array = another_Array.flat(Infinity)
console.log(real_array); // [1,2,3,4,5,8,6,8,0,10]


/*
    12. Array.isArray
        from()

*/

let findString = "Manisha"
console.log(Array.isArray(findString)); // false

// to convert any data type to Array

console.log(Array.from(findString)); // ['M', 'a', 'n', 'i', 's', 'h', 'a']

let score1 = 100;
let score2 = 200;
let socre3 = 300;

console.log(Array.of(score1,score2,socre3)); // [100,200,300]