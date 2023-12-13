import React from 'react';
import { useDispatch } from 'react-redux';
import { makeGuess, setDifficulty } from '../redux/wordControlSlice';

function GuessForm({ onDifficultySelected }) {
  const dispatch = useDispatch();

  const handleGuess = (e) => {
    e.preventDefault();
    const userGuess = e.target.userGuess.value;
    dispatch(makeGuess(userGuess));
  };

  const handleDifficultyChange = (e) => {
    const newDifficulty = e.target.value;
    dispatch(setDifficulty(newDifficulty));
  };

  return (
    <div>
      <form onSubmit={handleGuess}>
        <h2>Guess a word</h2>
        <input
          type='text'
          name='userGuess'
          maxLength={1}
          required
        />

        <button type="submit">Submit</button>
      </form>
      <select name="difficulty" id="difficulty" onChange={handleDifficultyChange}>
        <option value="easy">Easy</option>
        <option value="normal">Normal</option>
        <option value="unfair">Unfair</option>
      </select>

    </div>
  );
}

export default GuessForm;