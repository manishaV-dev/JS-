//==========================================================================================================================
//==========================================================================================================================

/*
        3. bind() : The bind method creates a new function that, when called, has its this value set to the provided value, 
        with a given sequence of arguments preceding any provided when the new function is called.

        syntax : func.bind(thisArg, arg1, arg2, ...)

*/

function greet(greeting, punctuation) {
    console.log(`${greeting} , ${this.name} ${punctuation}`);
}

const person = { name: 'Alice' };
const greetPerson = greet.bind(person);
greetPerson('Hello', '!'); // Hello , Alice !

// In this example, this inside greetPerson refers to person


