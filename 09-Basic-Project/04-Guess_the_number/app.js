const randomNumber = parseInt(Math.random() * 100 + 1); // + 1 , so we never get zero

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subInput');
const guessSlot = document.querySelector('.guesses');
const GuessRemaining = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowHi')
const resultCon = document.querySelector('.resultContainer')

const p = document.createElement('p')

let prevGuess = [];
let numguess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guessNum =  parseInt(userInput.value);
        console.log(guessNum);
        validateGuess(guessNum);
    })
}

function validateGuess(guess){}



function checkGuess(guess){}


function displayGuess(guess){}

function displayMessage(message){}

function endGame(){}

function newGame(){}


