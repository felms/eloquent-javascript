let size = 8;
let line = '';

for (let i = 0; i < size; i++) {
    let currentLine = '';
    for (let j = 0; j < size; j++) {
        currentLine += j % 2 === 0 ? '#' : ' ';
    }
    line += i % 2 == 0 ? ' ' : '';
    line += currentLine + '\n';
}

console.log(line);
