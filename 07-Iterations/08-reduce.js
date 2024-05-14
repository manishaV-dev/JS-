/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.

Notes: 
        At the first callback, there is no return value from the previous callback.
        Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
        If an initial value is supplied, this is used, and the iteration starts from array element 0.


Syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

        i.  function()	 --     Required. A function to be run for each element in the array.
        ii. total	     --     Required. The initialValue, or the previously returned value of the function.
        iii.currentValue --	    Required. The value of the current element. 
        iv. currentIndex -- 	Optional. The index of the current element.
        v. arr	         --     Optional. The array the current element belongs to.
        vi.initialValue	 --     Optional.  A value to be passed to the function as the initial value.


Return Value : The accumulated result from the last call of the callback function.


*/


const myNums = [1,2,3]
const total = myNums.reduce((accumulator, currentValue) => {
        // console.log(`Accumulator is ${accumulator} and current value is ${currentValue}`);
        return accumulator + currentValue
}, 0); // initial value

// console.log(total); // 6


/*
console.log(`Accumulator is ${accumulator} and current value is ${currentValue}`);

here Acc value is 0 bcoz Initial Val -- 0  
Accumulator is 0 and current value is 1
Accumulator is 1 and current value is 2
Accumulator is 3 and current value is 3
*/

const myTotal = myNums.reduce(function(acc, currVal) {
    return acc + currVal
},0)
console.log(myTotal); // 6


// ----------------------------------------- Using For Loop -----------------------------------------------------------
// let tot = 0
// for (let index = 0; index < myNums.length; index++) {
//      tot += myNums[index] 
// }
// console.log(tot); // 6


// ----------------------------------------- Using While Loop -----------------------------------------------------------
// let tot = 0;
// let index = 0;
// while (index < myNums.length) {
//     tot += myNums[index]
//     index++;
// }
// console.log(tot); // 6

// ----------------------------------------- Using Do-While  -----------------------------------------------------------

// let tot = 0;
// let index = 0;

// do {
//     tot += myNums[index];
//     index++
// } while (index < myNums.length);
// console.log(tot); // 6

// ----------------------------------------- Using For-of Loop  -----------------------------------------------------------

// let tot = 0;
// for (const num of myNums) {
//     tot += num
// }
// console.log(tot); // 6


// ----------------------------------------- Using forEach  -----------------------------------------------------------
// let tot = 0
// myNums.forEach((num) => {
//     tot+= num
// })
// console.log(tot); // 6

// ----------------------------------------- Using Map  -----------------------------------------------------------

// let tot = 0;
// myNums.map((num) => tot += num)
// console.log(tot); // 6