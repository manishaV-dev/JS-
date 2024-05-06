/*

1.  The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
                        It returns the modified target object.


*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // true

//===============================================================================================================

/* 

2.  The Object.create() static method creates a new object, using an existing object as the prototype of the
                        newly created object.

*/

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  me.name = 'Manisha'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction(); // "My name is Matthew. Am I human? true"
 console.log(person.isHuman); // false

 //===============================================================================================================

/* 

3.  Object.hasOwn() - static method returns true if the specified object has the indicated property as its own property.

                        syntax - Object.hasOwn(obj, prop)
                        Prop = The String name or Symbol of the property to test.
*/


const example = {};
example.prop = "exists";

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, "prop"); // true
Object.hasOwn(example, "toString"); // false
Object.hasOwn(example, "hasOwnProperty"); // false

 //===============================================================================================================

/* 

4.  The Object.is() static method determines whether two values are the same value.

                        Object.is(value1, value2)
*/

console.log(Object.is('1', 1)); // false