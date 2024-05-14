/*
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.

    Syntax : array.map(function(currentValue, index, arr), thisValue)

    Return Value : The results of a callback function for each array element.

    *** Since map builds a new array, calling it without using the returned array is an anti-pattern; 
        use forEach or for...of instead.


*/

// Add 10 in all array element
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumbers.map((num) => num + 10);
// console.log(newNum); // [11,12,13,14,15,16,17,18,19,20]
// console.log(myNumbers); // [1,2,3,4,5,6,7,8,9,10]

// ------------------------------------ Using forEach -------------------------------------------
// let newNum = [];
//  myNumbers.forEach((num) => {
//     let result = num + 10
//     newNum.push(result)
// })
// console.log(newNum); // [11,12,13,14,15,16,17,18,19,20]
// console.log(myNumbers); // [1,2,3,4,5,6,7,8,9,10]

// ------------------------------------ Using for-of  -------------------------------------------
// for (const num of myNumbers) {
//     console.log(num + 10);
// }
// console.log(myNumbers); // [11,12,13,14,15,16,17,18,19,20]






//Mapping an array of numbers to an array of square roots
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots); // [1, 2, 3]
// console.log(numbers); // [1, 4, 9]


// Print Full Name
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

// ----------------------------------------- Using Map ------------------------------------------------------
  let fullName = persons.map((item) => {
        return `${item.firstname} ${item.lastname}`
  })
  console.log(fullName); // ['Malcom Reynolds' , ......]



// ----------------------------------------- Using forEach ------------------------------------------------------
//   persons.forEach((name) => {
//         console.log(`${name.firstname} ${name.lastname}`); // Malcom Reynolds ....
//   })


// ----------------------------------------- Using for-of ------------------------------------------------------
//   for (const item of persons) {
//     // console.log(`${item.firstname} ${item.lastname}`); // // Malcom Reynolds ....
//   }






// ===================================================== Chaining ===========================================

let myNum = [1,2,3,4,5,6,7,8,9,10]

let chainingNum = myNum
                    .map((num) => num * 10) // here before num == [1, 2....], after this method  num == [10, 20....]
                    .map((num) => num + 1) // here before num == [10, 20....], after this method  num == [11, 21....]
                    .filter((num) => num >= 60)

console.log(chainingNum); // [61, 71, 81, 91, 101]