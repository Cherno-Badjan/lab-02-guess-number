// import functions and grab DOM elements
import { compareNumbers } from "./utils.js";

const submitButton = document.getElementById('submit-button');
const playAgain = document.getElementById('restart');
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

    if (guessesRemaining > 0 && answer === 0) {

        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Go play the lotto right now. You are super lucky!`);
    }
    if (guessesRemaining > 0 && answer === 1) {

        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Too high!Try again`);
    }
    if (guessesRemaining > 0 && answer === -1) {

        numberOfGuesses.textContent = (`You have ${guessesRemaining} guesses left!`);
        results.textContent = (`Too low!Try again`);
    }
    if (guessesRemaining === 0 || guessesRemaining < 0) {
        numberOfGuesses.textContent = (`You have no guesses left`);
    }



});
