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
const newStr = gameName.substring(2,6); // substring(from start indexStart, indexEnd (end not include))
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
        // iv - using property access [] == looks like array but they are not

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//======================================== Extracting String Parts =====================================

/*

There are 3 methods for extracting a part of a string:

    i. slice(start, end)
    ii. substring(start, end)
    iii. substr(start, length)

*/

/*

1. slice() extracts a part of a string and returns the extracted part in a new string.(without modifying the original string.)
            The method takes 2 parameters: start position, and end position (end not included).

            slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth character
             through the eighth character (characters indexed 4, 5, 6, and 7):

*/
// const sentence = 'The quick brown fox jumps over the lazy dog.'

console.log(`${sentence.slice(10)}`); // brown fox jumps over the lazy dog.
console.log(`${sentence.slice(4,30)}`); // quick brown fox jumps over
console.log(`${sentence.slice(-20, -6)}`) // s over the laz


/*

2. substring() -- substring() is similar to slice().
                  The difference is that start and end values less than 0 are treated as 0 in substring().

                  The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string 
                  is still returned. The slice() method returns an empty string if this is the case.

*/

console.log(`${sentence.substring(10)}`); // brown fox jumps over the lazy dog.
console.log(`${sentence.substring(4,30)}`); // quick brown fox jumps over

let str = 'Mozilla'
console.log(`${str.substring(5,2)}`); // zil
console.log(`${str.slice(5,2)}`); // empty string


/*

3.  substr() - This feature is no longer recommended. substr() is not part of the main ECMAScript specification

                substr() is similar to slice().
                The difference is that the second parameter specifies the length of the extracted part.

*/

// console.log(`${str.substr(2,4)}`) ; // zill


//======================================== Converting to Upper and Lower Case ===============================================

/*

A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

*/

let text1 = "Hello world"
console.log(`${text1.toUpperCase()}`); // HELLO WORLD
console.log(`${text1.toLowerCase()}`); // hello world

// ======================================= JavaScript String concat() ==============================================

let word = "Hello"
let word2 = "world"

console.log(word.concat(' ' , word2)); // Hello world
// console.log(`${word} ${word2}`)


// Note :   All string methods return a new string. They don't modify the original string.
//          Strings are immutable: Strings cannot be changed, only replaced.


// ======================================= JavaScript String trim() =====================================

// The trim() method removes whitespace from both sides of a string:
// trimStart() -- The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// trimEnd() -- The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let withWhiteSpace = "          Hello  "
console.log(`${withWhiteSpace.trim()}`); // Hello


// ======================================= JavaScript String Padding =====================================

/*

1. padStart() - The padStart() method pads a string from the start.

*/