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

// ========================================= Methods =====================================================================

/*
        1. Push() - The push() method adds a new element to an array (at the end) and returns the new length of the array.
                    The push() method appends values to an array.

                     syntax --     push()
                                   push(element1)
                                   push(element1, element2)
                                   push(element1, element2, ..... elementN)

*/

let myArr = [1,2,3,4,5]
myArr.push(20)
console.log(myArr); // [1,2,3,4,5,20]

let myArr2 = [...myArr]
myArr2.push(10)
console.log(myArr2); // [1,2,3,4,5,20,10]


/*
       2. Pop() - The pop() method removes the last element from an array and returns the new length of the array.

                            synatx : pop()

*/

myArr2.pop();
console.log(myArr2) ; // [1,2,3,4,5,20]


/*
       3. unshift() : The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
                      and returns the new length of the array.

                     syntax --     push()
                                   push(element1)
                                   push(element1, element2)
                                   push(element1, element2, ..... elementN)

*/

myArr.unshift(100)
console.log(myArr); // [100,1,2,3,4,5,20]

/*
       4. shift() : The shift() method removes the first array element and "shifts" all other elements to a lower index.
                     and returns the new length of the array.

                     syntax - shift()

*/

myArr.shift()
console.log(myArr); // [1,2,3,4,5,20]

/*
       5. includes() : The includes() method of Array instances determines whether an array includes a 
                            certain value among its entries, returning true or false as appropriate.

                     This allows us to check if an element is present in an array (including NaN, unlike indexOf).

*/

console.log(myArr.includes(10)); // false

/*
       6. indexOf() : The indexOf() method searches an array for an element value and returns its position.


       syntax :      indexOf(searchElement)
                     indexOf(searchElement, fromIndex)


       lastIndexOf() : Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the 
                            last occurrence of the specified element.

*/
//let myArr = [1,2,3,4,5]
console.log(myArr.indexOf(5)); // 4
console.log(myArr.indexOf(10)); // -1 -- if element is not there then give -1.


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // 1

// Start from index 2
console.log(beasts.indexOf('bison', 2)); // 4

console.log("Last Index of", beasts.lastIndexOf('bison')); // 4




/*
       JavaScript Array toString()

       7.     i- join() - The join() method also joins all array elements into a string. ( returns a new string)
                            It behaves just like toString(), but in addition you can specify the separator:

                            syntax -      join()
                                          join(separator)

              ii. toString() - toString() converts an array to a string of (comma separated) array values.

*/

const newArr = myArr.join();
console.log(myArr); // [1,2,3,4,5,20]
console.log(newArr, typeof newArr); // 1,2,3,4,5,20 -- string


const array1 = [1, 2, "a", "1a"];
console.log("Using toSting",array1.toString(), typeof array1); // "1,2,a,1a", object


/*
       8. slice() : The slice() method slices out a piece of an array into a new array:

*/

const myNewArray = [10,20,40,30,80]
console.log("A : ",  myNewArray) // A : [10,20,40,30,80]
let usingSlice = myNewArray.slice(1,4)
console.log(usingSlice); // 20,40,30
console.log("After Using Slice : ", myNewArray) // After Using Slice : [10,20,40,30,80]




/*
       9. splice() -- The splice() method of Array instances changes the contents of an array by removing or replacing 
                     existing elements and/or adding new elements in place.

                     returns an array with the deleted elements (if any)

       syntax --     splice(start)
                     splice(start, deleteCount)
                     splice(start, deleteCount, item1)
                     splice(start, deleteCount, item1, item2, ... , itemN)

       Notes -- deleteCount - An integer indicating the number of elements in the array to remove from start.
                Return Value - An array containing the deleted elements.

*/

//const myNewArray = [10,20,40,30,80]
// Remove 3 elements, starting from index 1
let usingSplice = myNewArray.splice(1,3)
console.log(usingSplice); // [20,40,30]
console.log("After Using Splice : " , myNewArray) ; // [10, 80]

// Remove 0 (zero) elements before index 2, and insert "drum"

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

console.log("myFish is", myFish); // ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed); // [] no elements removed


// Remove 0 (zero) elements at last index, and insert "sturgeon"
// splice(array.length, 0, ...elements) inserts elements at the end of the array like push().

const myFish1 = ["angel", "clown", "mandarin"];
const removed1 = myFish.splice(myFish.length, 0, "sturgeon");
console.log(myFish1); // ["angel", "clown", "mandarin", "sturgeon"]
console.log(removed1); // []


/*

       toSpliced() : The toSpliced() method, like splice(), does multiple things at once: 
                     it removes the given number of elements from the array, starting at a given index, and then 
                     inserts the given elements at the same index. 
                            However, it returns a new array instead of modifying the original array. 
                            The deleted elements therefore are not returned from this method.

              syntax --     toSpliced(start)
                     toSpliced(start, deleteCount)
                     toSpliced(start, deleteCount, item1)
                     toSpliced(start, deleteCount, item1, item2, ... , itemN)

*/

// Deleting, adding, and replacing elements


// const months = ["Jan", "Mar", "Apr", "May"];

// // Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log('Insert by using toSpliced' , months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// // Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// // Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// // Original array is not modified
// console.log(months); // ["Jan", "Mar", "Apr", "May"]

/*

// EXAMPLE OF SLICE, SPLICE, toSPLICED


/*
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus); // ["Orange", "Lemon"];
console.log(fruits); // // ["Banana", "Orange", "Lemon", "Apple", "Mango"];


const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const spliceUse = fruits1.splice(1,3);

console.log(spliceUse); // ["Orange", "Lemon", "Apple"];
console.log(fruits1); // ["Banana", "Mango"];



const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const tospliceUse = fruits2.toSpliced(1,3);

console.log(tospliceUse); // ["Banana", "Mango"]
console.log(fruits2); //  ["Banana", "Orange", "Lemon", "Apple", "Mango"]

*/


/*
    10. Merging two arrays (Push, Concate, spread Operator)
*/

const marvel_heros = ['Thor', 'Ironman', 'Hulk']
const dc_heros = ['Batman', 'Superman', 'Flash']

// i -- by using push( work on existing array)

// marvel_heros.push(dc_heros); // Bad Code practise
// console.log(marvel_heros); // ['Thor', 'Ironman', 'Hulk',['Batman', 'Superman', 'Flash'] ]
// console.log(marvel_heros.length); // 4
// console.log(marvel_heros[3][1]); // Superman


              marvel_heros.push(...dc_heros);
              console.log("Push Method using Spread", marvel_heros); // ['Thor', 'Ironman', 'Hulk',['Batman', 'Superman', 'Flash'] ]


/*
       The concat() method creates a new array by merging (concatenating) existing arrays:
       The concat() method of Array instances is used to merge two or more arrays. This method does not change 
       the existing arrays, but instead returns a new array.

              syntax -      concat()
                            concat(value1)
                            concat(value1, value2)
                            concat(value1, value2, ... valueN)

       The concat() method can also take strings as arguments:

              const arr1 = ["Emil", "Tobias", "Linus"];
              const myChildren = arr1.concat("Peter"); 
              console.log(myChildren); // ["Emil", "Tobias", "Linus", "Peter"];
      

*/


// ii --  concate -- return a new array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) ; // ['Thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash']
// console.log(marvel_heros); // ['Thor', 'Ironman', 'Hulk']



// iii -- spread operator

const all_New_Heros = [...marvel_heros, ...dc_heros];
console.log(all_New_Heros); // ['Thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash']


/*

       Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

       11. Flat : flat() method creates a new array with sub-array elements concatenated to a specified depth.


*/

const another_Array = [1,2,3,[4,5],8,[6,8, [0,10]]] // here depth is 2
let real_array = another_Array.flat(Infinity)
console.log(real_array); // [1,2,3,4,5,8,6,8,0,10]


/*
    12. Array.isArray : The Array.isArray() static method determines whether the passed value is an Array.


        from() : The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.


        The Array.of() static method creates a new Array instance from a variable number of arguments, 
        regardless of number or type of the arguments.

*/

let findString = "Manisha"
console.log(Array.isArray(findString)); // false

// to convert any data type to Array

console.log(Array.from(findString)); // ['M', 'a', 'n', 'i', 's', 'h', 'a']

let score1 = 100;
let score2 = 200;
let socre3 = 300;

console.log(Array.of(score1,score2,socre3)); // [100,200,300]


console.log(Array.of('foo', 2, 'bar', true)); // Array ["foo", 2, "bar", true]

console.log(Array.of()); // Array []