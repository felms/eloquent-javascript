const loop = (value, testFn, updateFn, bodyFn) => {

    for (let current = value; testFn(current); current = updateFn(current)) {
        bodyFn(current);
    }
};

