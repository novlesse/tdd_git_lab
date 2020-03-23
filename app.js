const upperCase = (string) => {
    // throw an error if sentence has numbers
    // checks input with regex
    if (/\d/.test(string))
        throw Error("Sentence cannot include numbers.");
    if (!string.length)
        throw Error("Sentence cannot be empty."); {
        // convert input into an array
        let sentence = string.toLowerCase().split(' ');
        // loop through the array
        for (let i = 0; i < sentence.length; i++) {
            // starting at index 0 of each element in the array
            // uppercase the first character
            // add this character to the extracted substring starting at index 1
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1);
        }
        // combine or join the array back together into a "sentence"
        return sentence.join(' ');
    }
};

module.exports = {
    upperCase
};