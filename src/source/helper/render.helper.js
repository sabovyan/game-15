/**
 *  @description this function is responsible for creating board and its cells
 * @param {Array} inputtedArray
 * @returns {HTMLElement} an html element that contains all the cells
 * @example 
 * const gameBoard = createBoard(state.gameArray);
	root.append(gameBoard);
 */
export function createBoard(inputtedArray) {
	const board = document.createElement('div');
	board.classList.add('game__board');

	inputtedArray.forEach((elem) => {
		let cell;
		if (elem === 'empty') {
			cell = '<div class="game__cell game__cell--empty"></div>';
		} else {
			cell = `<div class="game__cell">${elem}</div>`;
		}
		board.innerHTML += cell;
	});

	return board;
}

/**
 * @description getArrangedArray function swaps two values of an array based on their index
 * @param {number} step
 * @param {array} arrayOfCellsValue
 * @param {number} idx
 * @returns {array} returns already rearranged array
 * @example
 * state.gameArray = getArrangedArray(dir.left, arrayFromCells, idx);
 */
export function getArrangedArray(step, arrayOfCellsValue, idx) {
	const res = arrayOfCellsValue;
	[res[idx], res[idx + step]] = [res[idx + step], res[idx]];
	return res;
}

/**
 * @description hasWon function checks whether two arrays has the same order of values
 * @param {object} param0 takes two arrays of state object
 * @returns {boolean} true if they both have the same order, otherwise false
 * @example
 * hasWon(state)
 */
export function hasWon({ gameArray, orderedArray }) {
	for (let i = 0; i < orderedArray.length; i += 1) {
		if (gameArray[i] !== String(orderedArray[i])) {
			return false;
		}
	}

	return true;
}
