export function makeShuffledArray(number) {
	const orderedArray = [];

	for (let i = 0; i < number; i += 1) {
		if (i === number - 1) {
			orderedArray[i] = 'empty';
		} else {
			orderedArray[i] = i + 1;
		}
	}
	const res = orderedArray.sort(() => Math.random() - 0.5);
	return res;
}
