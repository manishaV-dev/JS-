const myFunction = function(){
    console.log('H');
    console.log('E');
    console.log('L');
    console.log('L');
    console.log('O');
}

// myFunction();


function addNum(num1 , num2){
    console.log(num1 + num2);
}
addNum(6, 4); // 10

// Using return keyword -- 

function addTwoNum(num1 , num2){  // function FunctionName(parameter)

    // let addition = num1 + num2;
    // return addition;

    return num1 + num2

    // console.log("This code is not executed because we write it after return keyword")
}

const result = addTwoNum(4,5); // addTwoNum(4,5) === reference(arguments)
console.log(result); //9 


const loggedInUser = function(username){
    return `Welcome Back! ${username} 😊`
}

console.log(loggedInUser('Manisha')); // Welcome Back! Manisha 😊
console.log(loggedInUser('')); // Welcome Back! 😊
console.log(loggedInUser()); // Welcome Back! Undefined 😊


const loggedInUser1 = function(username){
    //  if(username === undefined) ===  if(!username)
    if(!username){
        console.log('Please enter your username 😟');
        return;
    }
    return `Welcome Back! ${username} 😊`
    
}

console.log(loggedInUser1());



const loggedInUser2 = function(username = "Harry"){
    //  if(username === undefined) ===  if(!username)
    if(!username){
        console.log('Please enter your username 😟');
        return;
    }
    return `Welcome Back! ${username} 😊`
    
}

console.log(loggedInUser2()); // // Welcome Back! Harry 😊
