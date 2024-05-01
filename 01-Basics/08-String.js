const name = "Manisha";
const repoCount = 29;

// console.log(name + repoCount); ---- outdated way to concatinate

/*  
In modern JS we can use template Literals -- Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

String Interpolation -- Template String provide an easy way to interpolate variables and expressions into strings.The method
                        is called string interpolation.
*/

//The syntax is: ${..}

console.log(`My name is ${name} and my repo count is ${repoCount}`)

// Other way to define a string
// syntax -- new String('..') ---> Object 
const gameName = new String('Witcher');

console.log(gameName);
/*
    Strign('witcher')
    0: w
    1: i
    2: t
    3: c
    4: h
    5: e
    6: r

*/

// Some string Method

console.log(gameName[3]); // c
console.log(gameName.__proto__); // {} -- means object
console.log(gameName.length) // 7
console.log(gameName.charAt(5)) // e
console.log(gameName.charAt(gameName.length -1)) // r -- last character
console.log(gameName.indexOf('h')); //4
 //witcher
const newStr = gameName.substring(2,6); // substring(from start index, index-1)
console.log(newStr) // tche

const anotherStr = gameName.slice(-6, 3)
console.log(anotherStr); //it


const spaceStr = "    yahoo   "
console.log(spaceStr)
console.log(spaceStr.trim())

const url = "https://www.my%20portfolio.com"
console.log(url.replace('%20', '-')); // https://www.my-portfolio.com

console.log(url.includes("www")); //true

const projectName = "My-New-JS-Project"
console.log(projectName.split('-')); // ['my' , 'new', 'js, 'project']

//===================================== Some Important String Methods ====================================================

// Extracting String Characters
        // i - at(position) method
        // ii - charAt(position) method
        // iii - charCodeAt(position) method
        // iv - using property access []

/*
1. String.prototype.at() -- The index (position) of the string character to be returned.
                            The at() method returns an indexed element from a string:
                            This method allows for positive and negative integers. Negative integers count back from 
                            the last string character. (ES2022)
*/
const sentence = 'The quick brown fox jumps over the lazy dog.'
console.log(`${sentence.at(5)}`); // u
console.log(`${sentence.at(-6)}`); // y
console.log(`${sentence.length}`); // 44


/*
2. String.prototype.charAt() -- The charAt() method returns the character at a specified index (position) in a string:
                                at() method allows the use of negative indexes while charAt() do not.
                                Now you can use myString.at(-2) instead of charAt(myString.length-2).
*/

let text = 'Hello world';
console.log(`${text.charAt(1)}`) // e

/*
3. String.prototype.charCodeAt() -- It returns the code of the character at a specified index in a string:
                                    The method returns a UTF-16 code (an integer between 0 and 65535).

*/

console.log(`${text.charCodeAt(2)}`); // 108

/*
4. Property Access [ ] -- Property access on strings:

*/
console.log(`${text[0]}`); // H