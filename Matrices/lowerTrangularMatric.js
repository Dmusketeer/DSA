function Lower(matrix, rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i < j) console.log('0');
            else console.log(`${matrix[i][j]}`);
        }
        console.log('\t')
    }
    console.log('\n')
}
let matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
let row = 3, col = 3;
Lower(matrix, row, col)