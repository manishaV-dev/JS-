let score = ''
// score = '35rt'
// score = null;
// score = undefined;
// score = true;
// score = 'Manisha'


// when score = '34'
console.log(typeof score); // string
console.log(typeof(score)); // string

// change Score(String to Number)
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Number


// After score = '35rt', here score have both number and text value
console.log(typeof valueInNumber); // Number
console.log(valueInNumber); // NaN

// when score = null
console.log(valueInNumber) // 0

// when score = undefined
console.log(valueInNumber) // NaN

// when score = true
console.log(valueInNumber); // 1 , if False then output will be 0

// when score = 'Manisha'
console.log(valueInNumber); // NaN


/*
when convert in Number value is : 

"33" --> 33 
"33rt" --> NaN  --type = Number
true --> 1, false --> 0
'' --> 0
*/


let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn); // boolean
console.log(booleanLoggedIn); // true