/*

The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
The filter() method of Array instances creates a shallow copy of a portion of a given array

        Syntax: array.filter(function(currentValue, index, arr), thisValue)

        Parameter	            Description
        function()	            (Required). A function to run for each array element.
        currentValue	        (Required.)The value of the current element.
        index	                Optional. The index of the current element.
        arr	                    Optional. The array of the current element.
        thisValue	            Optional. Default undefined, A value passed to the function as its this value.

    
    Return Value : A shallow copy of the given array containing just the elements that pass the test. 
    If no elements pass the test, an empty array is returned.
    An array of elements that pass the test.


    The filter() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/


function isBigEnough(value) {
    return value >= 10;
  }
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   console.log(filtered); // [12, 130, 44]
  

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter((num) => num > 4) // Implicit Return -- Give Accurate result

// const newNums = myNums.filter((num) => {
//     num > 4; // [] -- here we start { } scope and without return keyword it returns object []
// })

// const newNums = myNums.filter((num) => {
//     return  num > 4 // Give Accurate result
// })

// console.log(newNums); [5,6,7,8,9,10]



// in forEach Loop

const numNew = [];
myNums.forEach((num) => {
    if(num > 4){
        numNew.push(num)
    }
})
// console.log(numNew); // [5,6,7,8,9,10]
        

const books = [
    {title : 'Book One', genre : 'Science', published: 1990, edition : 2008},
    {title : 'Book Two', genre : 'Fiction', published: 1992, edition : 2002},
    {title : 'Book Three', genre : 'Non-Fiction', published: 1994, edition : 2001},
    {title : 'Book Four', genre : 'History', published: 1996, edition : 2000},
    {title : 'Book Five', genre : 'Drama', published: 1997, edition : 2004},
    {title : 'Book Six', genre : 'Mystery', published: 1980, edition : 2018},
    {title : 'Book Seven', genre : 'Anime', published: 1985, edition : 2024},
    {title : 'Book Eight', genre : 'History', published: 1976, edition : 1990},
]

const userBook = books.filter((book) => {
        return book.genre === 'History'
});
// console.log(userBook);

// const userBook2 = books.filter(({published}) => {
//     return published > 1980
//   });
//   console.log(userBook2);
//   console.log(userBook2.length); //6


let editionBk = books.filter((book) => {
    return book.edition >= 2000 && book.genre === "History" 
})
console.log(editionBk);