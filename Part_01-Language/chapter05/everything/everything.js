const every = (array, test) => {
    let res = true;

    for (let item of array) {
        res &&= test(item);
    }

    return res;
};


const every_some = (array, test) => {
    return !array.some(element => !test(element));
};
