const reverseArray = (array) => {
    let arr = [];

    while (array.length > 0) {
        arr.push(array.pop());
    }

    return arr;
};

const reverseArrayInPlace = (array) => {

    let size = array.length;

    for (let i = 0; i < size / 2; i++) {
        let aux = array[i];
        array[i] = array[size - 1 - i];
        array[size - 1 - i] = aux;
    }
};
