// function Declaration - can be Access before declaration

console.log(addOne(4)); // 5
function addOne(num){
    return ++num; // num + 1
}
console.log(addOne(5)); // 6


// Function Expression -- only Access after Declaration


// console.log(addTwo(6)); // 8 -- cannot access here, before initilization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6)); // 8