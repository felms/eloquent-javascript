const range = (from, to, step = 1) => {
    let res = [];

    for (let i = from; i !== to + step; i += step) {
        res.push(i);
    }

    return res;
};

const sum = (values) => {
    let s = 0;

    for (let value of values) {
        s += value;
    }

    return s;
};


