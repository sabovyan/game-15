export function makeOrderedArray(number) {
	const orderedArray = [];

	for (let i = 0; i < number; i += 1) {
		if (i === number - 1) {
			orderedArray[i] = 'empty';
		} else {
			orderedArray[i] = i + 1;
		}
	}
	return orderedArray;
}

export function makeShuffledArray(orderedArray) {
	const res = orderedArray.sort(() => Math.random() - 0.5);
	return res;
}
