const arrayToList = (array) => {
    let list = {};
    let currentNode = list;

    for (let element of array) {
        currentNode.value = element;
        currentNode.rest = {};
        currentNode = currentNode.rest;
    }
    currentNode.rest = null;

    return list;
};

const listToArray = (list) => {

    let arr = [];

    for (let currentNode = list; currentNode; currentNode = currentNode.rest) {
        arr.push(currentNode.value);
    }

    return arr;
};

const prepend = (value, rest) => {

    return {value, rest};

};

const nth = (list, pos) => {
    
    let currentPos = 0;

    while (list) {
        if (currentPos === pos) {
            return list.value;
        }

        list = list.rest;
        currentPos++;
    }

    return undefined;
};
