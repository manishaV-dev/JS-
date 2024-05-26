const user = {
    username : "Manisha",
    logInCount : 22,
    signIn : true,
    
    userDetails : function(){
        return (`Hey ${this.username}, Welcome Back!`);
    }
}

console.log(user.username);
console.log(user.userDetails());



function users(username, loginCount, isLoggedIn){
    this.username = username
    this.logInCount = loginCount
    this.isLoggedIn = isLoggedIn
    // no need to return it implicilty return, but write return is good practise
    return(this)
}

// const userOne = users("Manisha", 11, true)
// // console.log(userOne); username: Manisha ......
// const userTwo = users("radha", 16, false)
// console.log(userOne); // ; username: radha ...... here UserOne values are overwrite

// But when we use 'new' keyword it give us the intance of the users so here value is not overwritten
const userOne = new users("Manisha", 11, true)
const userTwo = new users("radha", 16, false)
console.log(userOne); //users {username: 'Manisha', logInCount: 11, isLoggedIn: true}
console.log(userTwo); // users {username: 'radha', logInCount: 16, isLoggedIn: false}

console.log(userOne instanceof users); // true
