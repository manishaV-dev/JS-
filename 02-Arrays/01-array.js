// Arrays = An array is a special variable, which can hold more than one value:

/*

Notes :     1. JavaScript arrays are resizable and can contain a mix of different data types. 
            2. JavaScript arrays are zero-indexed
            3. JavaScript array-copy operations create shallow copies rather than deep copies. (Stack and Heap)
            // https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/#:~:text=shallow%20copying.,into%20how%20JavaScript%20stores%20values.

*/

let myArr = [1,2,3,4,5]
console.log(myArr[4])


/*

Deep Copy -- A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 

Shallow Copy -- A shallow copy means that certain (sub-) values are still connected to the original variable.


*/

// Example of Deep Copy -- ( Primitive data types --  Store in Stack)

const a = 5;
let b = a;

b = 10;

console.log(b); // 10
console.log(a); // 5


// Example of Shallow Copy -- (Composite data types — Objects and Arrays -- Store in Heap)

const x = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola',
    pt: 'Olà'
  }

  let y = x;
  y.pt = 'Oi';

  console.log(y.pt); // oi
  console.log(x.pt); // oi

  //In the example above, we actually made a shallow copy. This is often times problematic, since we expect the old variable
  // to have the original values, not the changed ones.


  // =============================================== make copies of objects to avoid shallow copy ============================================================= 

  /*

  Objects: ----------------------

  There are multiple ways to make copies of objects, especially with the new expanding and improving JavaScript specification.

        1. Spread operator : Introduced with ES2015, this operator is just great, because it is so short and simple.
                             It ‘spreads’ out all of the values into a new object. You can use it as follows:

        2. Object.assign()

        3. Pitfall: Nested Objects

        4. JSON.parse(JSON.stringify()


  */


// 1. Spread Example---------------------------------------------------------------------
    
        const user = {
            name: 'Rohan',
            city: 'Delhi'
          }
          let userNew = {...user}

          userNew.name = 'Mohan';
          console.log(userNew.name); // Mohan
          console.log(user.name); // Rohan

// 2 - Object.assign Example---------------------------------------------------------------------

          const nastu = {
            catagory: 'Rabbit',
            child: 12
          }

          let binku = Object.assign({}, nastu);
          binku.child = 5;

          console.log(binku.child); // 5
          console.log(nastu.child); // 12
          console.log(binku.catagory); // Rabbit

// 3 - Nested Objects Example---------------------------------------------------------------------


const boba = {
    foods : {
        fruits : "Banana",
        dinner : "Pillets"
    }
}

let milk = {foods:{...boba.foods}};
milk.foods.fruits = "Carrot"
console.log(milk.foods.fruits); // Carrot
console.log(boba.foods.fruits); // Banana


// 4 - JSON.parse(JSON.stringify() Example---------------------------------------------------------------------


const Boba = {
    foods : {
        fruits : "Banana",
        dinner : "Pillets"
    }
}

let Milk = JSON.parse(JSON.stringify(Boba))
Milk.foods.fruits = "Cucumber"

console.log(Milk.foods.fruits); // Cucumber
console.log(Boba.foods.fruits); // Banana




  /*

 Arrays -------
    
Copying arrays is just as common as copying objects. A lot of the logic behind it is similar, since arrays are also just 
objects under the hood.

  There are multiple ways to make copies of Arays


        1. Spread operator

        2. Array functions — map, filter, reduce

        3. Array.slice 

        4. JSON.parse(JSON.stringify(someArray)) .


  */

// 1. Spread Example---------------------------------------------------------------------


const arrA = [10,12,53]
let arrB = [...arrA]
arrB[1] = 15;

console.log(arrA); // [10,12,53]
console.log(arrB); // [10,15,53]


// 2. Map Example-----------------------------------------------------------------------

const arr = [1,2,3]
let brr = arr.map(el => el)
brr[1] = 4
console.log(brr[1]) // 4
console.log(arr[1]) // 2

// 3. Slice Example----------------------------------------------------------------------- 

let crr = arr.slice(0)
crr[1] = 50
console.log(crr[1]); // 50
console.log(arr[1]); // 2
console.log(arr, crr); // [1,2,3] [1,50,3]

// 4. JSON.parse Example-----------------------------------------------------------------------

let drr = JSON.parse(JSON.stringify(crr))
drr[0] = 100;
console.log(crr,drr); // [1,50,3] [100,50,3]