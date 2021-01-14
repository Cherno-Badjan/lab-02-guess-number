export function compareNumbers(userGuess, correctNumber) {
    if (userGuess === correctNumber)
        return 0;
    if (userGuess > correctNumber)
        return 1;
    else
        return -1;
};