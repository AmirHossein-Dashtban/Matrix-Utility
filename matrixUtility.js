function identity(dimension) {
	const identity = [];
	for (let i = 0; i < dimension; i++) {
		identity[i] = [];
		for (let j = 0; j < dimension; j++) identity[i][j] = i === j ? 1 : 0;
	}
	return identity;
}
