import React from 'react';

function WordDisplay({ word, incorrectGuesses, chosenWord, guessNumber }) {
    // Your existing logic for displaying the word
    return (
        <div>
            <p>Revealed Letters: {word}</p>
            <p>Incorrect Guesses: {incorrectGuesses.join(', ')}</p>
            <p>Chosen Word: {chosenWord}</p>
            <p>Guess Number: {guessNumber}</p>
        </div>
    );
}

export default WordDisplay;

