const countChar = function(word, char) {

    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) {
            counter++;
        }
    }

    return counter;

};

const countBs = function(word) {
    return countChar(word, 'B');
};

console.log('Count B\'s in \'BBc\' -> ' + countBs('BBc'));
console.log('Count k\'s in \'kakkerlak\' -> ' + countChar('kakkerlak', 'k'));
