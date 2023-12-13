import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GuessForm from './GuessForm.jsx';
import WordDisplay from './WordDisplay.jsx';
import { setChosenWord, resetGame, setDifficulty } from '../redux/wordControlSlice.js';
import { useDispatch, useSelector } from 'react-redux';


const WordControl = () => {
  const dispatch = useDispatch();
  const { revealedLetters, incorrectGuesses, gameWin, gameLose, chosenWord, guessNumber } = useSelector((state) => state.wordControl);

  useEffect(() => {
    dispatch(setChosenWord());
  }, [dispatch]);

  const handleDifficulty = (selectedDifficulty) => {
    dispatch(setDifficulty(selectedDifficulty));
  }
  return (

    <React.Fragment>
      {gameLose ? (
        <h1>YOU LOSE</h1>
      ) : gameWin ? (
        <h1>YOU WIN</h1>
      ) : (
        <>
          <WordDisplay
            word={revealedLetters.join(' ')}
            chosenWord={chosenWord}
            incorrectGuesses={incorrectGuesses}
            guessNumber={guessNumber} />
          <GuessForm onDifficultySelected={handleDifficulty}/>
        </>
      )}
    </React.Fragment>
  );
};

export default WordControl;

