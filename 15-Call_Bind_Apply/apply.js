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


//=========================================================================================================================
//=========================================================================================================================


/*

    Method Reuse
    With the apply() method, you can write a method that can be used on different objects.

    The apply() method is similar to the call() method


*/


const admin = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const admin1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  console.log(admin.fullName.apply(admin1)); // Mary Doe
  
  

  /*

  The Difference Between call() and apply()
            The difference is:

            1. The call() method takes arguments separately.

            2. The apply() method takes arguments as an array.

    The apply() method is very handy if you want to use an array instead of an argument list.

    The apply() method accepts arguments in an array:


  */


    const builder = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const builder1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      let fromApply = builder.fullName.apply(builder1, ["Oslo", "Norway"]);

      // using call
      let fromCall = builder.fullName.call(builder1, "Delhi", "India");

      console.log(fromApply); // John Doe,Oslo,Norway
      console.log(fromCall); // John Doe,Delhi,India


/*

      Simulate a Max Method on Arrays

      You can find the largest number (in a list of numbers) using the Math.max() method:
      Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

*/

let myArr = [25,85,49,568,587]

console.log(Math.max.apply(null, myArr)); // 587
// The first argument (null) does not matter.

// These examples will give the same result:
console.log(Math.max.apply(Math, myArr)); // 587
console.log(Math.max.apply('', myArr)); // 587
console.log(Math.max.apply(0, myArr)); // 587
console.log(Math.min.apply(0, [5,8,6])); // 5


/*

      Note : 
      In JavaScript strict mode, if the first argument of the apply() method is not an object, 
      it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.

*/
