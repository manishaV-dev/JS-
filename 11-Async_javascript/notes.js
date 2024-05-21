/*

    Any computer program is nothing but a series of tasks we require the computer to execute.
    In JavaScript, tasks can be classified into synchronous and asynchronous types.


    -- Synchronous - Synchronous tasks are the ones that execute sequentially, one after the other, and while they're being executed 
                     nothing else is being done. At each line of the program, the browser waits for the task to finish before jumping 
                     to the next one.
                     We say this kind of tasks are "blocking", because while they execute they block the execution thread ,
                     preventing it from doing anything else.

    -- asynchronous - Asynchronous tasks, on the other hand, are the ones that, while they execute, they don't block the execution 
                      thread. So the program can still perform other tasks while the asynchronous task is being executed.
                      This is why we say this kind of tasks are "non blocking". This technique comes in handy specially for tasks 
                      that take long time to execute, as by not blocking the execution thread the program is able to execute more 
                      efficiently.

    Notes: JavaScript is a single threaded language.
           "Single threaded" means it has a single thread of execution. 
           This means that JavaScript programs can only execute a single task at a time.







*/