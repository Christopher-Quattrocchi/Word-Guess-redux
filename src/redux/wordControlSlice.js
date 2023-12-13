import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guessNumber: 0,
  chosenWord: '',
  revealedLetters: [],
  incorrectGuesses: [],
  gameWin: false,
  gameLose: false,
  difficulty: 'normal',
};

const wordList = {
  easy: ["apple", "beach", "bread", "chair", "dance"],
  normal: ["chord", "weird", "fairy", "queue", "cadre"],
  unfair: ["quoll", "bumph", "zebec", "nixie", "quern", "xysti", "fjord", "nerpa", "nymph"],
};

const getRandomWord = (difficulty) => {
  return wordList[difficulty][Math.floor(Math.random() * wordList[difficulty].length)];
}

export const wordControlSlice = createSlice({
  name: 'wordControl',
  initialState,
  reducers: {
    setChosenWord: (state) => {
      const newWord = getRandomWord(state.difficulty);
      state.chosenWord = newWord;
      state.revealedLetters = Array(newWord.length).fill('_');
      state.guessNumber = 0;
      state.incorrectGuesses = [];
      state.gameWin = false;
      state.gameLose = false;
    },
    makeGuess: (state, action) => {
      const guess = action.payload;
      if (state.chosenWord.includes(guess)) {
        state.revealedLetters = state.revealedLetters.map((letter, index) =>
          state.chosenWord[index] === guess ? guess : letter
        );

        state.gameWin = !state.revealedLetters.includes('_');

      } else {
        if (!state.incorrectGuesses.includes(guess)) {
          state.incorrectGuesses.push(guess);
          state.guessNumber++
        }
      }

      if (state.guessNumber > 8 && !state.gameWin) {
        state.gameLose = true;
      }
    },
    resetGame: (state) => {
      state.guessNumber = 0;
      state.chosenWord = '';
      state.revealedLetters = [];
      state.incorrectGuesses = [];
      state.gameWin = false;
      state.gameLose = false;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      //Reset game when difficulty changed
      const newWord = getRandomWord(state.difficulty);
      state.chosenWord = newWord;
      state.revealedLetters = Array(newWord.length).fill('_');
      state.guessNumber = 0;
      state.incorrectGuesses = [];
      state.gameWin = false;
      state.gameLose = false;
    },
  },
});

export const { setChosenWord, makeGuess, resetGame, setDifficulty } = wordControlSlice.actions;
export default wordControlSlice.reducer;