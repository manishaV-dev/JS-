const accountId = 123456;
let accountEmail = "manisha@gmail.com"
var accoutPassword = "abs234"
accountCity = "Kolkata" // Prefer not to use
let accoutState; // give 'Undefined' as we not give it any value

// accountId = "23456" -- Give TypeError as we assign it as a Constant so we can't change value

accountEmail = "manisha@google.com"
accoutPassword = "23fght"
accountCity = "Delhi"


/*
Prefer not to use 'var' because of issue in Block Scope and functional Scope

*/

console.table([accountId, accountEmail, accoutPassword, accountCity, accoutState])