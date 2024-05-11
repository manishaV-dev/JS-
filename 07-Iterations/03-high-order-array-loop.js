/*

    1. for...of statement : It creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and 
                            so on)

            Syntax:     for (variable of iterable) {
                            // code block to be executed
                        }

        i.      variable - For every iteration the value of the next property is assigned to the variable. 
                Variable can be declared with const, let, or var.

        ii.     iterable - An object that has iterable properties.


    Notes : for...in iterates over property names, for...of iterates over property values:

*/


let myArr = [1,5,4,8]
for (const num of myArr) {
    // console.log(num); // 1 5 4 8
    // console.log(num *2); // 2 10 8 6 
    // console.log(typeof num); // number
}

let greetings = "Hello World"

// here space is also print
// for (const greet of greetings) {
//     console.log(`Each Char is ${greet}`)
// }

// if we want to print without space using Continue statement, Solution 1
// for (const greet of greetings) {
//     if(greet == ' ') continue;
//     console.log(`Each Char is ${greet}`)
// }

// if we want to print without space , Solution 2

for (const greet of greetings) {
        if(greet !== ' '){
            // console.log(`Each Char is ${greet}`)
        }
    }



// ============================================  MAP =======================================

/*

    A Map holds key-value pairs where the keys can be any datatype.

    Have only unique Value


*/

const CountryCode = new Map();
CountryCode.set("IN",  "India")
CountryCode.set("USA",  "United State of America")
CountryCode.set("FR",  "France")

// for (const country of CountryCode) {
//     console.log(country);
//     // [IN",  "India"]
//     // ["USA",  "United State of America"]
//     // ["FR",  "France"]
// }

// print key and value using destructure

for(const [key,value] of CountryCode){
    console.log(`${key} :- ${value}`);
    
//     IN",  "India"
//     "USA",  "United State of America"
//     "FR",  "France"
}
