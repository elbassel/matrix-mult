const matrix1 = [[6, 8], [2, 4], [3, 6]],
matrix2 = [[1, 2, 9], [4, 6, 8]];

function test(mat1, mat2, number) {
    const multiplicationResult = multiplyTwoMatrices(mat1, mat2);
    const locations = getLocationGT(multiplicationResult, number);
    console.log('Multiplication result VV');
    console.log(`                      VV`);
    console.log(multiplicationResult);
    console.log('\n\nLocations result VV');
    console.log(`                 VV`);
    console.log(locations);
}

function multiplyTwoMatrices(m1, m2) {
    const m1Rows = m1.length;
    const m1Columns = m1[0].length;
    const m2Rows = m2.length;
    const m2Columns = m2[0].length;
    const result = new Array(m1Rows);

    for(let r =0; r < m1Rows; r++) {
        result[r] = new Array(m2Columns);
        
        for( let c =0; c < m2Columns; c++) {
            result[r][c] = 0;
            for( let i = 0; i < m1Columns; i++) {
                result[r][c] +=  m1[r][i] * m2[i][c]
            }
        }
    }
    return result;

}

function getLocationGT(matrix, value) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const result = [];
    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < columns; c++) {
            if (matrix[r][c] > value) {
                const data = {
                    value: matrix[r][c],
                    location: [r,c]
                }
                result.push(data);
            }
        }
    }

    return result;
}

test(matrix1,matrix2, 100);
