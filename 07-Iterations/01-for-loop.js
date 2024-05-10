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


for(i = 0; i <= 5; i++){
    console.log(`Outer Loop: ${i}`);
    for(j = 0; j <= 5; j++){
        // console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);

        console.log(`${i}*${j} =  ${i * j}`);
    }
}