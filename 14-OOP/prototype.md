## What do you mean by prototype in JS? <br/>
In JavaScript, a prototype is an object from which other objects inherit properties. It plays a key role in the language's object-oriented inheritance system. Every JavaScript object has a prototype, which serves as a template object that it inherits
methods and properties from. This prototype object itself can have its own prototype, forming a chain known as the prototype chain. 
The prototype chain ends when an object has 'null' as its prototype.

        "Everything is an 'OBJECT" in JS".
        "Every JavaScript object has an internal link to another object called its prototype."

## Key Concepts:

    1. Prototype Property ([[Prototype]]):
        - Every JavaScript object has a hidden, internal property called [[Prototype]] that points to another object.
        - You can access the prototype of an object using Object.getPrototypeOf(obj) or through the __proto__ property 
          (though __proto__ is deprecated and should be avoided in modern code).

    2. Function Prototypes: 
        - In JavaScript, functions are also objects, and they have a prototype property.
        - When you define a function, it automatically gets a prototype property, which is an object 
        containing a constructor property.
        - This prototype property is used when the function is used as a constructor with the new keyword.

    3. Inheritance:
        - Objects can inherit properties from other objects via the prototype chain.
        - When you try to access a property on an object and it doesn't exist on that object, JavaScript looks for 
          it in the object's prototype, and continues up the prototype chain until it finds the property or reaches 'null'.

EXAMPLE:

        function Person(name) {
            this.name = name;
        }

        Person.prototype.sayHello = function() {
            console.log(`Hello, my name is ${this.name}`);
        };

        const alice = new Person('Alice');
        alice.sayHello(); // "Hello, my name is Alice"

        // Accessing the prototype
        console.log(Object.getPrototypeOf(alice) === Person.prototype); // true

        // Prototype chain
        console.log(alice.__proto__); // Person { sayHello: [Function] }
        console.log(alice.__proto__.__proto__); // Object {}
        console.log(alice.__proto__.__proto__.__proto__); // null

In this example:
    - 'Person' is a constructor function.
    - 'Person.prototype' is the prototype object that alice inherits from.
    - The 'sayHello' method is added to 'Person.prototype', so it becomes available to all instances of 'Person'.


## what do you mean by prototypal behavior ? 
The term "prototypal behavior" in JavaScript refers to the way JavaScript objects inherit properties and methods from other objects through a mechanism known as prototype-based inheritance. 

## Key Concepts of Prototypal Behavior:
        
        1. Prototype Chain:
            - Each object in JavaScript has a hidden internal property called [[Prototype]] 
            (accessible via __proto__ in some browsers, or Object.getPrototypeOf).
            - This property points to another object, known as the prototype.
            - When a property or method is accessed on an object, the JavaScript engine first looks for it on the object itself. 
            If it is not found, the engine looks up the prototype chain until it either finds the property/method or reaches 
            the end of the chain (null).

        2. Object Inheritance:
            - Objects can be created to inherit directly from other objects using 'Object.create.'
            - Functions in JavaScript have a prototype property that is used to attach properties and methods that should be 
            inherited by instances created with the new keyword.

        3. Dynamic Behavior:
            - Since prototypes are just objects, they can be modified at runtime. Methods and properties can be added or changed, and these changes will be reflected in all objects that inherit from that prototype.

Example :- 

        // Define a constructor function
        function Animal(name) {
            this.name = name;
        }

        // Add a method to the prototype
        Animal.prototype.speak = function() {
            console.log(`${this.name} makes a noise.`);
        };

        // Create an instance
        const dog = new Animal('Dog');

        dog.speak(); // Output: Dog makes a noise.

        // Checking the prototype chain
        console.log(dog.__proto__ === Animal.prototype); // true
        console.log(Animal.prototype.__proto__ === Object.prototype); // true

        // Creating an object with Object.create
        const cat = Object.create(dog);
        cat.name = 'Cat';
        cat.speak(); // Output: Cat makes a noise.

In this example:

        - The Animal constructor function creates objects with a name property.
        - The speak method is added to Animal.prototype, so all instances of Animal inherit this method.
        - The dog object is an instance of Animal and inherits the speak method from Animal.prototype.
        - The cat object is created using Object.create(dog), which means it directly inherits from dog.

Benefits of Prototypal Behavior or prototypal inheritance?:
        - Memory Efficiency: Methods defined on the prototype are shared among all instances, saving memory.
        - Dynamic Inheritance: Prototypes can be changed at runtime, allowing objects to dynamically gain or change behavior.
        - Flexible Object Creation: Allows for easy creation of objects that inherit properties from other objects without 
        needing class definitions.


            "In JavaScript, every object has a prototype, and objects can be linked to other objects to share 
            behavior (methods and properties)."