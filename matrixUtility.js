function identity(dimension) {
	const identity = [];
	for (let i = 0; i < dimension; i++) {
		identity[i] = [];
		for (let j = 0; j < dimension; j++) identity[i][j] = i === j ? 1 : 0;
	}
	return identity;
}

function transpose(matrix) {
	const B = [];
	for (let i = 0; i < matrix[0].length; i++) {
		B[i] = [];
		for (let j = 0; j < matrix.length; j++) B[i][j] = matrix[j][i];
	}
	return B;
}
