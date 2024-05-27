## call() :-
- The call method calls a function with a specified this value and arguments provided individually.

        syntax : func.call(thisArg, arg1, arg2, ...)


        function greet(greeting, punctuation) {
            console.log(`${greeting} , ${this.name} ${punctuation}`);
        }
        const person = { name: 'Alice' };
        greet.call(person, 'Hello', '!');
        // In this example, this inside greet refers to person, so the output will be:



## apply() :-
- The apply method calls a function with a specified this value and arguments provided as an array (or an array-like object).

        syntax : func.apply(thisArg, [argsArray])

        function greet(greeting, punctuation) {
            console.log(`${greeting} , ${this.name} ${punctuation}`);
        }

        const person = { name: 'Alice' };
        greet.apply(person, ['Hello', '!']); 
        // In this example, this inside greet refers to person, so the output will be: Hello, Alice !


## bind() :-
- The bind method creates a new function that, when called, has its this value set to the provided value, with a given 
sequence of arguments preceding any provided when the new function is called.

        syntax : func.bind(thisArg, arg1, arg2, ...)

        function greet(greeting, punctuation) {
            console.log(`${greeting} , ${this.name} ${punctuation}`);
        }

        const person = { name: 'Alice' };
        const greetPerson = greet.bind(person);
        greetPerson('Hello', '!'); // Hello , Alice !
        // In this example, this inside greetPerson refers to person, 


## Differences and Use Cases :-

1. call and apply:

        i.      Both are used to invoke functions immediately with a specified this value.
        ii.     call takes arguments individually, while apply takes arguments as an array.
        iii.    Use call when you have a fixed number of arguments.
        iv.     Use apply when you have an array or array-like object of arguments.

2. bind:

        i.      Does not invoke the function immediately.
        ii.     Returns a new function with this value and initial arguments set.
        iii.    Use bind when you need a function to be called later with a specific this value and possibly some pre-set arguments.


## Practical Example of All Three Methods : 

        const person = { name: 'Alice' };

        function introduce(greeting, punctuation) {
            console.log(`${greeting} , ${this.name} ${punctuation}`);
        }

        // Using call
        introduce.call(person, 'Hi', '!'); // Hi, Alice!

        // Using apply
        introduce.apply(person, ['Hello', '?']); // Hello, Alice?

        // Using bind
        const boundIntroduce = introduce.bind(person, 'Hey');
        boundIntroduce('!!!'); // Hey, Alice!!!


## ===============================================================================================================================

<br />

## Functions :-
- The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically,
which can be executed in the global scope.

- As functions are objects in JavaScript, their invocation is controlled by the apply, call, and bind methods.

- To check if a function is a Function object, we can use the code :-

        (function(){}).constructor === Function ? console.log(true) : console.log(false);

        - The global Function object has no methods or properties of its own. However, since it is a function itself, 
        it does inherit some methods and properties through the prototype chain from Function.prototype.

        - The following are the methods in the function prototype chain:

                -- Function.prototype.apply()
                -- Function.prototype.bind()
                -- Function.prototype.call()
                -- Function.prototype.isGenerator()
                -- Function.prototype.toSource()
                -- Object.prototype.toSource
                -- Function.prototype.toString()
                -- Object.prototype.toString

## apply :- 
- The apply() method is an important method of the function prototype and is used to call other functions with a provided 
'this' keyword value and arguments provided in the form of array or an array like object.

        Array-like objects may refer to NodeList or the arguments object inside a function.

- This means that we can call any function and explicitly specify what this should reference in the calling function.

        Return : It returns the result of the function which is invoked by this.

Example: 

        let array = ['a', 'b']
        let elements = [1, 2, 3]
        array.push(element);
        console.log(array); // ['a', 'b', [1, 2, 3]]

    As seen in the given snippet, we see that when we push an array inside another, the whole array is treated as one element and pushed inside the array variable.

        let array = ['a', 'b']
        let elements = [1, 2, 3]
        array.push.apply(array, elements);
        console.log(array); ['a', 'b', 1, 2, 3]

        let num = [1,2,6]
        console.log(Math.max(num)); // NaN
        console.log(Math.max.apply(null, num)); // 6



## call :- 
- The call() method is used to call a function with a given this and arguments provided to it individually.
- This means that we can call any function, explicitly specifying the reference that this should reference in the calling function.

- This is very similar to apply, the only difference being that apply takes arguments in the form of an array or array-like objects, and here the arguments are provided individually.

- Return :- The result of calling the function with the specified this value and arguments.


Example: 

        function Product(name, price){
            this.name = name;
            this.price = price;
        }

        function Pizza(name, price){
            Product.call(this, name, price);
            this.category = "Pizza";
        }

        function Toy(name, price){
            Product.call(this, name, price);
            this.category = "Toy";
        }

        const pizza = new Pizza("Margherita", 599);
        const toy = new Toy('Robot', 450)

        console.log(pizza)
        console.log(toy)


        ------------------------------------------------------------- <br />

        function sleep(){
            let reply = `${this.animal}, typically sleep between, ${this.sleepDuration}`;
            console.log(reply);
        }

        let obj = {
            animal : 'I',
            sleepDuration : '6 and 8 hours'
        }

        sleep.call(obj)
        // output : I, typically sleep between, 6 and 8 hours


## bind :- 
- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

- Return :- Bind returns a copy of the function with the supplied this and the arguments.

- Exampple : 

            let x = 9;
            let module = {
                x : 81,
                getX : function(){
                    return this.x;
                }
            }

            console.log(module.getX()); // 81
            let retrieveX = module.getX
            console.log(retrieveX());

            let boundGetX = retrieveX.bind(module)
            console.log(boundGetX()); // 81