//==========================================================================================================================
//==========================================================================================================================

/*
        2. apply() : The apply method calls a function with a specified this value and arguments provided as
        an array (or an array-like object).

        syntax : func.apply(thisArg, [argsArray])
*/

function greet(greeting, punctuation) {
    console.log(`${greeting} , ${this.name} ${punctuation}`);
}

const person = { name: 'Alice' };
greet.apply(person, ['Hello', '!']); 

// In this example, this inside greet refers to person, so the output will be: Hello, Alice !
