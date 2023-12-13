import wordControlReducer, {
  setChosenWord,
  makeGuess,
  resetGame,
  setDifficulty
} from '../../redux/wordControlSlice';

const getInitialState = () => ({
  guessNumber: 0,
  chosenWord: '',
  revealedLetters: [],
  incorrectGuesses: [],
  gameWin: false,
  gameLose: false,
  difficulty: 'normal',
});

describe('wordControlSlice', () => {
  test('Should set a new chosen word', () => {
    let state = getInitialState();
    state.chosenWord = 'test';
    state.revealedLetters = ['_', '_', '_', '_'];

    const newState = wordControlReducer(state, makeGuess('t'));
    expect(newState.revealedLetters).toEqual(['t', '_', '_', 't']);
    expect(newState.incorrectGuesses.length).toBe(0);
  });

  test('Should reset the game state', () => {
    let state = getInitialState();
    state.guessNumber = 3;
    state.chosenWord = 'test';
    state.revealedLetters = ['t', '_', '_', 't'];
    state.incorrectGuesses = ['a', 'b', 'c'];
    state.gameWin = true;

    const newState = wordControlReducer(state, resetGame());
    expect(newState).toEqual(getInitialState());
  });

  test('Should change the difficulty', () => {
    const initialState = getInitialState();
    const newState = wordControlReducer(initialState, setDifficulty('unfair'));
    expect(newState.difficulty).toBe('unfair');
  });

});