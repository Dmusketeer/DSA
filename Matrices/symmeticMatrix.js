// Program to check if a matrix is symmetric

// A square matrix is said to be symmetric matrix if the transpose of the matrix is same as the given matrix.Symmetric matrix can be obtain by changing row to column and column to row.
// OR
// M[i,j]=M[j,i]

// Method 1️⃣ 
function isSymmetric(matrix, N) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i] == matrix[j]) return 'symmetric';
        }
        return 'Non Symmetric';
    }
}

let mat = [[1, 3, 5],
[3, 2, 4],
[5, 4, 1]];

console.log(isSymmetric(mat, 3))
