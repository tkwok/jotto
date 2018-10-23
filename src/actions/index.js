export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
};

/**
 * REturns Redux Thunk function that dispatches GUESS_WORD action
 *  and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guesed word
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {

  };
};