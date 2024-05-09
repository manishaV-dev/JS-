/*

    1. In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.

                All values are truthy unless they are defined as falsy. That is, all values are truthy except 
                false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

        JavaScript uses type coercion in Boolean contexts.

Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):
    
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

    other truthy val ---    '  '(space in string), 
                            function(){} - empty function, 


The logical AND operator, &&

If the first operand is truthy, the logical AND operator returns the second operand:


*/

console.log(true && "dog");
// returns "dog"

console.log([] && "dog");
// returns "dog"




/*

    2. A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

                JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, 
                such as conditionals and loops.


Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):
    
value           Type            Description

null	        Null	        The keyword null — the absence of any value.
undefined	    Undefined	    undefined — the primitive value.
false	        Boolean	        The keyword false.
NaN	            Number	        NaN — not a number.
0	            Number	        The Number zero, also including 0.0, 0x0, etc.
-0	            Number	        The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	        The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	        Empty string value, also including '' and ``.
document.all	Object	        The only falsy object in JavaScript is the built-in document.all.




The logical AND operator, &&

If the first object is falsy, it returns that object:


*/

console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0




/*

    In JavaScript, a nullish value is the value which is either null or undefined. Nullish values are always falsy.

*/


// Check if an array is empty

const userEmail = [];

if(userEmail.length === 0){
    console.log('Array is empty');
}

// Check if an object is empty

const emptyobj = {};
if(Object.keys(emptyobj).length === 0){ // here Object.keys() returns an array so we can use here an array method like length
    console.log('Object is empty');
}





// ============================================ Nullish coalescing operator (??) ====================================

/*  

        The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when 
        its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.


        syntax --- leftExpr ?? rightExpr


*/

let userName = null;
let text = "missing";
let result = userName ?? text;
console.log(result); // missing

let val1 = 5;
console.log(null ?? val1); // 5
console.log(undefined ?? 20 ?? 60); // 20


// =========================================== Conditional (Ternary) Operator ======================

/*

        The conditional operator assigns a value to a variable based on a condition.

        syntax - (condition) ? true : false

*/


const teaPrice = 100;
teaPrice >=80 ? console.log('Ice Tea'): console.log('Hot Tea'); // ice tea
teaPrice <=80 ? console.log('Ice Tea'): console.log('Hot Tea'); // Hot Tea