// Control Flow or Logic Flow

// 1. if statement

const isLoggedIn = true; 
if(isLoggedIn){ // if(true)
    console.log('Hello');
}


// ------------------------------------------- Operators -----------------------------------------
/*
        <, >, <=, >=, ==, !=, ===(strict equal), !==, 

*/

if(2 == '2'){
    console.log("Executed"); // executed
}

if(2 === '2'){
    console.log("Executed"); // not executed
}

// console.log(2 === '2'); False


const temperature = 48;
if(temperature < 45){
    console.log('Temperature is less than 45');
}else{
    console.log('Temperature is greater than 45');
}


const score = 200;
if(score > 100){
    const power = "Invisible";
    console.log(`Power is : ${power}`); // Executed
}

// console.log(`Power is : ${power}`); 

/*power is not define : getting error because here power is out of its Scope 
and we define it with Const keyword, if we declare power with var, this will run successfully, that cause many bugs so always
use const or let for define a variable */


//================================= Short hand Notation ======================
// Short Hand Notation : if statement without curly braces and mainly use for one line code but you can add multiple line with ,
// but this code is not readable and not recommended

const balance = 500;
if(balance > 400) console.log('Short Hand Notation');
// if(balance > 300) console.log('Short Hand Notation'), console.log('Short Hand Notation2')


const bankBalance = 500;

if(bankBalance < 300){
    console.log('less than 1000');
}else if(bankBalance < 450){
    console.log('less than 450');
}else{
    console.log('more than 450');
}

/*
        Logical Operators

    1. && - (and) -- both have to true

    2. || - (OR) -- One have to true

    3. ! - (NOT)

*/

const isUserLoggedIn = true;
const haveDabitCard = true;
const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;

if(isLoggedIn && haveDabitCard){
    console.log('Yay! you can buy course'); 
}

if(isLoggedInFromGoogle || isLoggedInFromEmail){
    console.log('You are logged in');
}