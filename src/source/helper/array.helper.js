/**
 * @description creates an ordered array based on the limit of the values in it
 * @param {nmber} limit
 * @returns {Array} an ordered array whereas values are from 0 to the limit
 * @example
 * state.orderedArray = makeOrderedArray(16),
 */
export function makeOrderedArray(limit) {
	const orderedArray = [];

	for (let i = 0; i < limit; i += 1) {
		if (i === limit - 1) {
			orderedArray[i] = 'empty';
		} else {
			orderedArray[i] = i + 1;
		}
	}
	return orderedArray;
}

/**
 * @description makeShuffledArray function creates a shuffled array
 * @param {array} orderedArray
 * @returns {array}  a new shuffled array
 * @example
 * state.gameArray = makeShuffledArray(state.orderedArray )
 */
export function makeShuffledArray(orderedArray) {
	const res = orderedArray;
	for (let i = orderedArray.length - 1; i > 0; i -= 1) {
		const random = Math.floor(Math.random() * (i + 1));
		[res[i], res[random]] = [res[random], res[i]];
	}
	return res;
}
