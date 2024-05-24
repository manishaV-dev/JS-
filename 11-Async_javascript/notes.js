/*
    https://www.freecodecamp.org/news/asynchronism-in-javascript/

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



    how web browsers execute JavaScript code and some of its core components: 
    The call stack, web APIs, the callback queue, and the event loop.



*/

//--------------------------------------------------- What is the Call Stack? ------------------------------------------------------

/*

    A stack is a type of data structure where elements are added and removed following a LIFO (last in, first out) pattern. 
    Browsers use something called the call stack to read and execute each task contained in a Javascript program.

    The way it works is quite simple. When a task is to be executed, it's added to the call stack. When it's finished, 
    it's removed from the call stack. 
    This same action is repeated for each and every task until the program is fully executed.

    ex-     const multiply = (a, b) => a*b
            const square = n => multiply(n, n)
            const printSquare = n => console.log(square(n))
            printSquare(4);

        explanation : 
                    1. Call stack starts off empty at the start of the program.
                    2. printSquare(4) is added to the call stack and executed.
                    3. As printSquare(4) calls the function square(4), square(4) is added to the call stack and executed as well. 
                       Note that as the execution of printSquare(4) isn't finished yet, it's kept on the stack.
                    4. As square(4) calls multiply(4,4), multiply(4,4) is added to the call stack and executed as well.
                    5. multiply(4,4) is removed from the call stack once finished.
                    6. square(4) is removed from the call stack once finished.
                    7. printSquare(4) is removed from the call stack once finished. End of the program.

    In this example we can clearly see the LIFO pattern the call stack uses to add and remove tasks to it.
    The important thing to notice here is that tasks are not removed from the stack until they're finished. 
    This is how synchronous callbacks work.

    When a function calls another function, the callback is added to the stack and executed. 
    Once the execution of the callback is completed, it's removed from the stack and the execution of the main function is completed.

*/


//------------------------------------------ Web APIs, the Callback Queue, and the Event Loop ----------------------------------------

/*

1. What are Web APIs?
    Web APIs are a set of features and functionalities that the browser uses to enable JavaScript to execute. 
    These features include DOM manipulation, AJAX calls, and setTimeout among other things.

    When the call stack detects that the task it's processing is web API-related, it asks the web API 
            "Hey API, I need to get this done", and the web API takes care of it, allowing the call stack to 
    continue with the next task in the stack.


2. What are the callback queue and the event loop?

    The callback queue is a queue that stores the tasks that the web APIs return. Once the web API finishes executing 
    the given task (which in this case was processing the setTimeout) it sends the callback to the callback queue.

    Queues are a type of data structure where elements are added and removed following a FIFO pattern (first in, first out). 


    The event loop is a loop (woah... really?) that constantly checks two things:
        I.  If the call stack is empty
        II. If there's any task present in the callback queue

        If both of these conditions are met, then the task present in the callback queue is sent to the call stack 
        to complete its execution.

*/


/*

    NOTES: 

           -- Asynchronous tasks are processed by web APIs instead of the call stack, which handles only synchronous tasks.

           -- In this way, the call stack can just derive asynchronous tasks to web APIs and carry on executing whatever else 
              is present on the stack. And thanks to the callback queue and the event loop, once the asynchronous task was handled 
              by the web APIs, the callback is reinserted into the call stack.

        
           -- It's important to remember that JavaScript always runs only one task at a time. The "magic" of asynchronism is 
              made possible by the existence of the web APIs, the callback queue, and the event loop, which are responsible 
              for managing asynchronous tasks.

        
            -- There are mainly three ways in which we can code asynchronism in JavaScript: 
                    callback functions, promises, and async-await.
*/

//--------------------------------------- How Callback Functions Work --------------------------------------

/*

    Callbacks are functions that are passed as arguments to other functions. 
    The function that takes the argument is called a "Higher order function", and 
    the function that is passed as an argument is called a "Callback".

    ex:     const callbackFunc = () => console.log('Im the callback')
            const higherOrderFunction = callback => callback()
            higherOrderFunction(callbackFunc)

    the possibility of passing functions as parameters to other functions is one of the features that make functions 
    first class citizens in JavaScript.

example: 

    const arr = [1,2,3]
    console.log('logging...')
    arr.map(e => console.log('sync item', e)) // This is a synchronous callback

    arr.map(e => setTimeout(() => console.log('async item', e), 0)) // This is an asynchronous callback
    console.log('the stuff')


*/


//----------------------------------------- How Promises Work ---------------------------------------------------

/*

    A more modern approach for dealing with asynchronism is by using promises. A promise is a special kind of 
    object in JavaScript that has 3 possible states:

        --- Pending: It's the initial state, and it signifies that the corresponding task is yet to be resolved.
        --- Fulfilled: Means the task has been completed successfully.
        --- Rejected: Means the task has produced some kind of error.

    ex:     const fetchJokeWithPromises = () => {
            console.log('fetching with promises...')
                fetch('https://api.chucknorris.io/jokes/random')
                .then(res => res.json())
                .then(res => console.log('res', res))
                .catch(error => console.error('There was an error!', error))
            }
            fetchJokeWithPromises()


    explanation: 

    1. If we log just the fetch line, like this: 
            console.log('fetch', fetch('https://api.chucknorris.io/jokes/random'))

        We see we get a promise with a pending state:
        fetch > promise(pending)

    2. Then if we execute the first 'then' method and log its result, we get the following:
            fetch('https://api.chucknorris.io/jokes/random')
            .then(res => console.log('res', res))

            res > response

            We see here we no longer have a promise, but the actual response from the endpoint. 
            The then method waits for the promise to complete, and then provides us with the result, 
            which is present as a parameter for the method.

            But to read the actual response body (which in our console we can see its a ReadableStream), 
            we have to call the .json() method on it. This itself returns another promise. 
            That's why we need another .then().

            fetch('https://api.chucknorris.io/jokes/random')
                .then(res => res.json())
                .then(responseBody => console.log('responseBody', responseBody))

            And here, finally we can see the full response and our joke in the value property. ;)

                -- What the catch method does is execute whenever a promise is rejected. 
                    Normally catch is used to handle an error, like showing a certain message to the 
                    user when an API fails to respond.

            fetch('https://asdadsasdasd/')
                .then(res => res.json())
                .then(resp => console.log('resp', resp))
                .catch(error => console.error('There was an error!', error))


    An important thing to notice is in situations like this one, where we have various .then methods chained,
    we only need to use one .catch method. 
    This is because that one .catch will process the errors in all of the promises chained.


    there's an additional method provided by promises which is .finally. This will execute always once the promise has 
    been resolved, either successfully or not.


*/


//------------------------------------------------ How Async-Await Works ------------------------------------------------

/*

    Async-await is the latest way of dealing with asynchronism provided by JavaScript. Basically, 
    it's just syntactic sugar that allow us to deal with promises in a more concise way than using .then methods.

    ex -    const fetchJokeWithAsyncAwait = async () => {
                try {
                    const res = await fetch('https://api.chucknorris.io/jokes/random')
                    const data = await res.json()
                    console.log('async-await data', data)
                    
                } catch (error) {
                    console.error('There was an error!', error)
                }
            }

            fetchJokeWithAsyncAwait()    


    -- we start by using the async keyword when we declare the function. This is a requirement for all functions that use async-await.

    -- Then we enclose our fetch call in a try-catch statement. This is required because with async-await we won't use the 
        .catch method. But we still need to process possible errors.

    -- We achieve this with the use of try-catch. If anything contained in the try statement returns an error, then the catch 
        statement executes, obtaining the error as a parameter.


        async-await is just syntactic sugar. It doesn't do anything differently than .then and .catch methods. 
        It's just easier to write and read.  

        
*/
