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


//================================================ (Rest Operator)==============

// without rest operator
const calculateCartAmountNoRest = function(num1){
    return num1
}
console.log(calculateCartAmountNoRest(200,3000,460)); // 200

// with rest operator
const calculateCartAmount = function(...num1){
    return num1
}
console.log(calculateCartAmount(200,3000,460)); // [200, 3000, 460]

const calculateCartAmountWithVal = function(val1, val2, ...num1){
    console.log(val1,val2); // 200,350
    return num1;

}
                                
console.log(calculateCartAmountWithVal(200,350,500,700,460)); // [500,700,460]


///////////////////////////////////////////////// =========================== ///////////////////////////////
// object in function

const users = {
    username : "Manisha",
    coursePrice : 999
}


const handleObject = function(anyObject){
    console.log(`Name is ${anyObject.username} and course price is ${anyObject.coursePrice}`)
}
// handleObject(users); // Name is Manisha and course price is 999

handleObject({
    username: "Ramesh",
    coursePrice: 599
}) // Name is Ramesh and course price is 599



///////////////////////////////////////////////// =========================== ///////////////////////////////
// Array in function

const newArray = [400,600,800,700]

const returnSecond = function(otherArray){
    return otherArray[2]
}
// console.log(returnSecond(newArray)); // 800
console.log(returnSecond([100,200,300,400])); // 300

