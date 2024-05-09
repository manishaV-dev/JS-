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