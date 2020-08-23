export function createBoard(inputtedArray) {
	const board = document.createElement('div');
	board.classList.add('game__board');

	inputtedArray.forEach((elem) => {
		let cell;
		if (elem === null) {
			cell = '<div class="game__cell game__cell--empty"></div>';
		} else {
			cell = `<div class="game__cell">${elem}</div>`;
		}
		board.innerHTML += cell;
	});

	return board;
}
