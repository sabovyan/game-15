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

export function getArrangedArray(step, arrayOfCellsValue, idx) {
	const res = arrayOfCellsValue;
	[res[idx], res[idx + step]] = [res[idx + step], res[idx]];
	return res;
}

export function hasWon({ gameArray, orderedArray }) {
	for (let i = 0; i < orderedArray.length; i += 1) {
		if (gameArray[i] !== String(orderedArray[i])) {
			return false;
		}
	}

	return true;
}
