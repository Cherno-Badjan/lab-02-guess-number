// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const playAgain = document.getElementById('restart');
const numberGuessed = document.getElementById('user-guess');
const results = document.getElementById('result');


// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    guessesRemaining--;
    console.log(guessesRemaining);

})