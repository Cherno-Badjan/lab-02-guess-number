// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const submitButton = document.getElementById('submit-button');
const playAgainButton = document.getElementById('restart');
const userGuess = document.getElementById('user-guess');
const results = document.getElementById('result');
const numberOfGuesses = document.getElementById('guesses');


// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let correctNumber = randomNumber;
let guessesRemaining = 4;



// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    let userInput = Number(userGuess.value);
    const answer = compareNumbers(userInput, correctNumber);

    //Evaluates answer (by calling compareNumbers function) and gives and display number of guesses remaining

    submitFunction(answer);
});

playAgainButton.addEventListener('click', () => {
    results.textContent = '';
    submitButton.disabled = false;
    userGuess.value = '';
    randomNumber = Math.ceil(Math.random() * 20);
    correctNumber = randomNumber;
    guessesRemaining = 4;
    numberOfGuesses.textContent = '';


});



function submitFunction(answer) {
    if (guessesRemaining > 0 && answer === 1) {

        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Too high!Try again`);
    }
    if (guessesRemaining > 0 && answer === -1) {

        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Too low!Try again`);
    }
    if (guessesRemaining === 0) {
        numberOfGuesses.textContent = (`You have no guesses left. Back to square one`);
        submitButton.disabled = true;
        results.textContent = '';
    } else {
        if (answer === 0) {

            results.textContent = (`You won! Go play the lotto right now. You are super lucky!`);
            submitButton.disabled = true;
            numberOfGuesses.textContent = '';
        }
    }
}

