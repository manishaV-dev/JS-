// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = "green"
// }

// document.getElementById("red").onclick = function(){
//     document.body.style.backgroundColor = "red"
// }

// here we don't follow the DRY principle, so we need to create a function then reuse it


function handleClick(color){
    document.body.style.backgroundColor = color
}

document.getElementById("green").onclick = handleClick("green")
document.getElementById("red").onclick = handleClick("red")

// here we face issues like, we can not change the color
// so solve this type of issue we should use closure

function handleClick(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("green").onclick = handleClick("green")
document.getElementById("red").onclick = handleClick("red")

/*

What are closures?
Closures are functions that have access to the variables that are present in their scope chain even if the outer function 
ceases to exist.

let buttonProps = (borderRadius) => {
	const createVariantButtonProps = (variant, color) => {
		const newProps = {
			borderRadius,
			variant,
			color
		};
		return newProps;
	}
	return createVariantButtonProps;
}

Explanation :- 

        i. we have a function called buttonProps. This function accepts borderRadius as an argument.

        ii. We have another function that has been defined inside the parent function, that is createVariantButtonProps. 
        This function will accept variant and color as an argument and return an object that constitutes a variable borderRadius 
        that is present outside its scope.

                But a question arises as to how the inner function resolves the variables that are present in the parent scope.

        iii. Well, this is possible via lexical scoping. Using lexical scoping, the JS parser knows how to resolve variables 
        present in its current scope or in fact knows how to resolve variables present in the nested functions.

        iv. createVariantButtonProps will have access to the variables present in its outer function buttonProps.

        v. the inner function createVariantButtonProps is a closure. 


characteristics of closures which are as follows:

        1. Even if the outer function ceases to exist, a closure still has access to its parent variables.
        2. Closures do not have access to their outer function’s args parameter.


*/


let buttonProps = (borderRadius) => {
	const createVariantButtonProps = (variant, color) => {
		const newProps = {
			borderRadius,
			variant,
			color
		};
		return newProps;
	}
	return createVariantButtonProps;
}

let primaryButton = buttonProps("1rem");
const primaryButtonProps = primaryButton("primary", "red");
console.log(primaryButtonProps); // {borderRadius: '1rem', variant: 'primary', color: 'red'}



/*

    How does the primaryButton function have access to the variable borderRadius that was not present inside it?

    The answer is simple: closures do not store static values. Instead, they store references to the variables present inside 
    the scope chain. In this way, even if the outer function dies, the inner function, that is a closure, still has access to 
    its parent variables.


------------------------------------------------------ Advantages of closures ---------------------------------------------------
    Here are some advantages of closures:
            i.   They allow you to attach variables to an execution context.
            ii.  Variables in closures can help you maintain a state that you can use later.
            iii. They provide data encapsulation.
            iv.  They help remove redundant code.
            v.   They help maintain modular code.


---------------------------------------------------- Disadvantages of closures --------------------------------------------------
    There are two main disadvantages of overusing closures:

            i.  The variables declared inside a closure are not garbage collected.
            ii. Too many closures can slow down your application. This is actually caused by duplication of code in the memory.


*/