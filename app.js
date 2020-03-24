const upperCase = (string) => {
    // check input with regex for integers
    if (/\d/.test(string))
        throw Error("Sentence cannot include numbers.");
    // check if input is empty
    if (!string.length)
        throw Error("Sentence cannot be empty."); {
        // convert input into an array
        let sentence = string.toLowerCase().split(' ');
        // loop through the array
        for (let i = 0; i < sentence.length; i++) {
            // starting at index 0 of each element in the array
            // uppercase the first character
            // add this character to the extracted substring starting at index 1
            sentence[i] = sentence[i].charAt(0).toUpperCase();
        }
        // combine or join the array back together into a "sentence"
        return sentence.join(' ');
    }
};

module.exports = {
    upperCase
};