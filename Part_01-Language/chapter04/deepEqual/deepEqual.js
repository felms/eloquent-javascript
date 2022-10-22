const deepEqual = (item0, item1) => {
    
    if (item0 == item1) {
        return true;
    }

    if (!item0 || !item1) {
        return false;
    }

    if (typeof item0 !== 'object' && typeof item1 !== 'object') {
        return item0 === item1;
    }

    let keys0 = Object.keys(item0);
    let keys1 = Object.keys(item1);

    if (keys0.length !== keys1.length) {
        return false;
    }

    let areTheyEqual = true;
    for (let i = 0; i < keys0.length; i++) {

        let value0 = item0[keys0[i]];
        let value1 = item1[keys1[i]];

        areTheyEqual = areTheyEqual && deepEqual(value0, value1);
    }

    return areTheyEqual;

};
