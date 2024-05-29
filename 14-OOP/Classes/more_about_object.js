const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

/*
    Output : 
    {
        value: 3.141592653589793, 
        writable: false, 
        enumerable: false, 
        configurable: false
    }

*/
//=======================================================================================================================

console.log(Math.PI); // 3.14
Math.PI = 4;
console.log(Math.PI); // 3.14 -- can not change the value of PI


//====================================== getOwnPropertyDescriptor() and defineProperty() ======================================

const tea = {
    name : "Tandoori Tea",
    price : 50,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(tea, "name"))
// {value: 'Tandoori Tea', writable: true, enumerable: true, configurable: true}

Object.defineProperty(tea, 'name', {
    writable: false, 
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"))
// {value: 'Tandoori Tea', writable: false, enumerable: false, configurable: true}

tea.name = "Masala Chai"
console.log(tea); // {price: 50, isAvailable: true, name: 'Tandoori Tea'}


//=======================================================================================================================
//======================================================================================================================

/*


Overriding the Math.PI Property (Not Recommended)
For educational purposes, you can technically override the Math.PI property using a setter. However, this is not 
recommended in practice as it modifies a global object and can lead to unexpected behaviors in other
 parts of your code or third-party libraries.

 Object.defineProperty(Math, 'PI', {
    value: 4,
    writable: false, // makes it immutable again
    configurable: true,
    enumerable: true
  });
  
  // Usage
  console.log(Math.PI);  // Outputs: 4

 */


//=======================================================================================================================
//======================================================================================================================


const coffee = {
    name : "Bullet Coffee",
    price : 150,
    isAvailable : true,

    orderCoffee : function(){
        console.log("problem occur when you loop this object");
    }
}

// Loop on Object

// for (const [key, value] of coffee) {
//     console.log(`${key} : ${value}`); // coffee is not iterable
// }

// for (const key in coffee) {
//     // console.log(key); // key
//     // console.log(coffee[key]); // value
// }

// 5 last step : suppose we don't want to get value of name when iterate the coffee obj

// Object.defineProperty(coffee, 'name', {
//     enumerable: false
// })


for (const [key, value] of Object.entries(coffee)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`); 
    }
    
    /* 1
    console.log(`${key} : ${value}`); 
    output : name : Bullet Coffee
             price : 150
             isAvailable : true

   2 After adding Method orderCoffee, output

            name : Bullet Coffee
            price : 150
            isAvailable : true
            orderCoffee : function(){
                console.log("problem occur when you loop this object");
            }

   3 to fix this use conditional statement

      4  After adding condition, output
            name : Bullet Coffee
            price : 150
            isAvailable : true
            

    // last step : after set the enumarable value to false
            price : 150
            isAvailable : true

    */


    
}


