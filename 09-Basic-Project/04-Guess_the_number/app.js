let randomNumber = parseInt(Math.random() * 100 + 1); // + 1 , so we never get zero

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subInput');
const guessSlot = document.querySelector('.guesses');
const GuessRemaining = document.querySelector('.labelResult');
const lowHi = document.querySelector('.lowHi')
const startOver = document.querySelector('.resultContainer')
// const pContainer = document.querySelector('.label-highscore');
const number = document.querySelector('.number');
let playAgain = document.querySelector('.again')
const p = document.createElement('p')

let prevGuess = [];
let numguess = 1;
let playGame = true;

//Step 1 : check if you are available for play game or not
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guessNum = parseInt(userInput.value);
        number.textContent = guessNum;
        if(guessNum == ' ' || guessNum < 0 || isNaN(guessNum)){
            lowHi.textContent = `Please Enter a valid Number`
        }else{
            console.log(guessNum);
            validateGuess(guessNum);
        }
        
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        lowHi.textContent = `Please Enter a valid Number`
    }else if(guess < 1){
        lowHi.textContent = `Please Enter a Number Greater than 1`
    }else if(guess > 100){
        lowHi.textContent = `Please Enter a Number Smaller than 1`
    }else{
        prevGuess.push(guess);
        // if this is the last attempt
        if(numguess === 11){
            displayGuess(guess);
            displayMessage(`Game Over😁! Number was ${randomNumber}`);
            endGame()
        }
        // if num of guesses is less than 11 then 
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
 }



function checkGuess(guess) { 
    if(guess === randomNumber){
        displayMessage(`YaY 😎! You Guessed it Right!`)
    }else if(guess < randomNumber){
        displayMessage(`Oh 😒! Number is TOO Low!`)
    }else if(guess > randomNumber){
        displayMessage(`Oh 🤨! Number is TOO High!`)
    }
}

// CleanUp function
function displayGuess(guess) {
    userInput.value = '';
    // push the guessed Num
    guessSlot.innerHTML += `${guess},`;
    numguess++;
    GuessRemaining.innerHTML = `${11 - numguess}`
 }

function displayMessage(message) { 
    lowHi.innerHTML = `${message}`
}

function endGame() {
    userInput.value = ' ';
    userInput.setAttribute('disabled', ''); 
    playAgain.style.backgroundColor = "green";
    GuessRemaining.innerHTML = 0
    playGame = false
    newGame()
 }


function newGame() { 
        playAgain.addEventListener('click', function(e){
        randomNumber =  parseInt(Math.random() * 100 + 1);
        number.textContent = '?';
        lowHi.textContent = ''
        prevGuess = [];
        numguess = 1;
        guessSlot.innerHTML = ' ';
        GuessRemaining.innerHTML = `${11 - numguess}`
        userInput.removeAttribute('disabled');
        playGame = true;
    })
    
}


