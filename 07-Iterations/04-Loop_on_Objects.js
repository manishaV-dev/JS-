
/*

    For-In Loops : The JavaScript for in statement loops through the properties of an Object:

            Syntax: for (variable in object)
                    statement

    Do not use for in over an Array if the index order is important.
    It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

    It is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in 
    statement iterates over user-defined properties in addition to the array elements(the numeric indexes.)


*/


const myObject = {
    js: "javascript",
    py: "Python",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(key); -- print the key
    // console.log(`${myObject[key]}`); -- print the value
    // console.log(`${key} is shortcut for ${myObject[key]}`); // js is shortcut for javascript and so on...
}


const programming = ['JavaScript', 'Ruby', 'Java', 'Python']
for (const key in programming) {
    // console.log(key); 0 1 2 3 ---- It print array Index 
    // console.log(programming[key]); // javaScript and so on ......
}

// for (const lang of programming) {
//     console.log((lang)); // javaScript and so on ......
// }


// ======================================= For-in loop on Map

const CountryCode = new Map();
CountryCode.set("IN",  "India")
CountryCode.set("USA",  "United State of America")
CountryCode.set("FR",  "France")

// for (const key in CountryCode) {
//     console.log(CountryCode[key]); // here Map is not iterable
// }

// for (const [cCode, cName] of CountryCode) {
//     console.log(`${cCode} : ${cName}`);
// }