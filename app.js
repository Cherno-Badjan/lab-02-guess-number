// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const playAgain = document.getElementById('restart');
const userGuess = document.getElementById('user-guess');
const results = document.getElementById('result');
const numberOfGuesses = document.getElementById('guesses');


// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;

    numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
    if (guessesRemaining === 0) {
        numberOfGuesses.textContent = (`No guesses left`);
    }


})