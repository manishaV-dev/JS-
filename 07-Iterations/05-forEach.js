/*

    The forEach() array method loops through any array, executing a provided function once for each array element in 
    ascending index order. This function is referred to as a callback function.

        Note: Arrays are collections of elements that can be of any datatype.

    The forEach() method calls a function (a callback function) once for each array element.

    array.forEach(callbackFunction);
    array.forEach(callbackFunction, thisValue);

    The callback function can accept up to three different arguments, though not all of them are required. 

                        function myFunction(value, index, array){}

                        https://www.freecodecamp.org/news/javascript-foreach-js-array-for-each-example/

    // Using all parameters with thisValue (value of this in the callback) 
            array.forEach((currentElement, index, array) => {  ... }, thisValue)
            array.forEach(function(currentElement, index, array) { ... }, thisValue)

    
    callbackFunction: The callback function is a function that is executed only once for each element and can accept 
                        the following arguments to be used within the callback function:

        1. currentElement: The current element, as the name implies, is the element in the array that is
                    being processed at the time the loop occurs. It is the only necessary argument.

        2. index: index is an optional argument that carries the index of the currentElement.

        3. array: The array is an optional argument that returns the array that was passed to the forEach() method.

        4. thisValue: This is an optional parameter that specifies the value that will be used in the callback function.

    In summary, the forEach() array iteration method accepts a callback function that holds arguments that can be used 
    within the callback function for each array item, such as the array item, the index of the item, and the entire array.



*/


const coding = ['JavaScript', 'Ruby', 'Java', 'Python', 'CPP']

// coding.forEach(function(item){
//     console.log(item);
// })

// arrow Function

coding.forEach((item) => {
    console.log(item);
})







/*

        Difference between For and forEach Loop

        
    Break out and continue in a Loop
        When looping through an array, we may want to either break out or continue the loop when a certain condition is met 
        (meaning we skip). This is possible with the break and continue instruction, but it does not work with the forEach()
        method

        This will throw a syntax error of  Illegal Break/continue statement: no surrounding iteration statement.



    Array with Missing elements
            Another important comparison to make is in a situation whereby the array we are iterating over has some 
            missing values/array items 

        const studentsScores = [70, , 12, 55, , 70, 47];

This could be due to a developer error or something else, but these two methods take two different approaches to looping 
through these types of arrays. The for loop returns undefined where there are missing values, 
whereas the forEach() method skips them.

                     for (i = 0; i < studentsScores.length; i++) {
                            console.log(studentsScores[i]);
                        }

                        output : 
                        70
                        undefined
                        12
                        55
                        undefined
                        70
                        47


        studentsScores.forEach((stundentScore) => {
            console.log(stundentScore);
            });

70
12
55
70
47

*/


const studentsScores = [70, , 12, 55, , 70, 47];

// for(let i=0; i<studentsScores.length; i++){
//     console.log(studentsScores[i]);
// }

studentsScores.forEach((stundentScore) => {
    // console.log(stundentScore);
  });
            
            