/* 
    1. while Loop : A while statement executes its statements as long as a specified condition evaluates to true

        syntax:     while (condition) {
                        Statement // code block to be executed
                    }

        If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

*/

let index = 2;
while(index <= 10){
    // console.log(`Value of index is : ${index}`); // 2 4 6 8 10
    index += 2;
}


let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
    // console.log(n, x);
}

/*
            x = x+n
    n=1 , x=1 
    n=2 , x=3 1+2
    n=3 , x=6 3+3

*/


// =======================================================================

let myHero = ['Superman', 'Batman', 'Flash'];
let arr = 0;
while (arr < myHero.length) {
    // console.log(`List of Heros : ${myHero[arr]}`)
    arr++;
}

// ======================================================= DO-While ============================================
/*

    The do...while statement repeats until a specified condition evaluates to false.

        Syntax:     do
                        statement
                    while (condition);


    statement is always executed once before the condition is checked. 
    (To execute multiple statements, use a block statement ({ }) to group those statements.)

    
    Execute atleast 1 times because it check the condition at last.

*/

let score = 1;

do {
    // console.log(`Score is : ${score}`); // 1-9
    score++; // score += 1
    console.log(`Score is : ${score}`); // 2-10
} while (score < 10);


let i = 0;
do {
    console.log(i); // 0-4
  i++; // i += 1
//   console.log(i); // 1-5
} while (i < 5);


// Here condition is false still it run and print the value
let num = 11;
do {
    console.log(`Number is : ${num}`); // Number is 11
    num++;
} while (num < 10);