function isEven(number) {
    if (number === 0) {
        return true;
    }

    if (number === 1) {
        return false;
    }

    if (number < 0) {
        return isEven(-number);
    }

    return isEven(number - 2);
}

console.log('Is even (50) ? -> ' + isEven(50));
console.log('Is even (75) ? -> ' + isEven(75));
console.log('Is even (-1) ? -> ' + isEven(-1));
