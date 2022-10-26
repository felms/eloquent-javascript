let arrays = [[1, 2, 3], [4, 5], [6]];

let res = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(res);

