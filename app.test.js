const upperCase = require("./app").upperCase;

describe('Uppercase function', () => {
    test('uppercase the first letter of every word in a sentence', () => {
        const input = "i really hope this function will work later."

        const output = "I Really Hope This Function Will Work Later."

        expect(upperCase(input)).toEqual(output);
    });

    test('converts every letter after the first of every word to lowercase if the sentence is all in uppercase', () => {
        const input = "I REALLY HOPE THIS FUNCTION WILL WORK LATER."

        const output = "I Really Hope This Function Will Work Later."

        expect(upperCase(input)).toEqual(output)
    });

    test('check sentence for any numerical values and will return an error if so', () => {
        const input = "I R34LLY H0PE TH1S FUNCT10N W1LL W0RK L473R."

        expect(() => {
            upperCase(input).toThrowError("Sentence cannot include numbers.")
        })
    });

    test('check sentence if its empty', () => {
        const input = " "

        expect(() => {
            upperCase(input).toThrowError("Sentence cannot be empty.")
        })
    });
});