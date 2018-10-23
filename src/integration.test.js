import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guseeWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words here', () => {
        let store;
        const initialState = { secretWord };

        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates stage correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates stage correctly for successful guess', () => {

        });
    })
});

describe('some guessed words', () => {
    describe('no guessed words here', () => {
        test('updates stage correctly for unsuccessful guess', () => {

        });
        test('updates stage correctly for successful guess', () => {

        });
    })
});