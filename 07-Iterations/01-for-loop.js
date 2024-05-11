/*
    A loop is a sequence of instructions that is repeated until a certain condition is met. 
    Loops are one way to execute a statement for a variable number of times. 

    There are many different kinds of loops, but they all essentially do the same thing: 
    they repeat an action some number of times. (Note that it's possible that number could be zero!)

*/


/*
        1. for statement : A for loop repeats until a specified condition evaluates to false. 
                            The JavaScript for loop is similar to the Java and C for loop.

                            for - loops through a block of code a number of times


            Syntax:     for (initialization; condition; afterthought)
                            statement

                    initialization : The initializing expression initialization, if any, is executed.
                                        is executed (one time) before the execution of the code block.

                    condition : The condition expression is evaluated. If the value of condition is true, the loop 
                                statements execute. Otherwise, the for loop terminates.
                                defines the condition for executing the code block.

                    statement: The statement executes. To execute multiple statements, use a block statement ({ }) 
                                to group those statements. If present, the update expression afterthought is executed.

                    afterthought: is executed (every time) after the code block has been executed.
*/

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element); // 0-9
}

for(let i = 0; i <= 10; i++){
    const value = i;
    if(value === 5){
        // console.log('We are reached at 5');
    }
    // console.log(value); // 0-4 We are reached at 5 6-10
}


for(i = 1; i <= 5; i++){
    // console.log(`Outer Loop: ${i}`);
    for(j = 1; j <= 5; j++){
        // console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);

        // console.log(`${i}*${j} =  ${i * j}`);
    }
}

let table = 2;
for (let i = 1; i <=10 ; i++) {
    const result = `${table * i}`
    // console.log(result);
}

let myArray = ['Superman', 'Batman', 'Flash']
// console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//============================================= BREAK ====================================

/*

    Break : Use the break statement to terminate a loop.
            The break statement "jumps out" of a loop.


            When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch 
            immediately and transfers control to the following statement.

            When you use break with a label, it terminates the specified labeled statement.


            Syntax:     break;
                        break label;

                1. The first form of the syntax terminates the innermost enclosing loop or switch.
                2. The second form of the syntax terminates the specified enclosing labeled statement.

    The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

            The break statement, without a label reference, can only be used to jump out of a loop or a switch.
            With a label reference, the break statement can be used to jump out of any code block:


*/


// Example: Print 1-20 number but when the loop reached to 5 it has to be stopped

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`Loop reached at ${index}`); // 
        break;
    }
   console.log(index); // 1-20 without using condition and break
}


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
// console.log(text); BMW Volvo



// ========================================================= Continue ==============================================

/*

    Continue:   The continue statement can be used to restart a while, do-while, for, or label statement.
                The continue statement "jumps over" one iteration in the loop.

                syntax:     continue;
                            continue label;


        1.  When you use continue without a label, it terminates the current iteration of the innermost enclosing 
            while, do-while, or for statement and continues execution of the loop with the next iteration.
    
        2.  when you use continue with a label, it applies to the looping statement identified with that label.

        The continue statement (with or without a label reference) can only be used to skip one loop iteration.



*/

for (let i = 1; i <= 10; i++) {
    if(i === 5){
        console.log(`Loop reached at ${i}`); // 
        continue;
    }
   console.log(i); // 1-4 'Loop reached at 5'  6-10
}
