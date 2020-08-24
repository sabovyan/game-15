import { makeShuffledArray } from './helper/array.helper.js';
import { createBoard, getArrangedArray } from './helper/render.helper.js';

const root = document.querySelector('#root');

const VERTICAL_STEP = 4;
const HORIZONTAL_STEP = 1;

const state = {
	gameArray: makeShuffledArray(16),
};
const dir = {
	left: 1,
	right: -1,
	top: -4,
	bottom: 4,
};

const render = () => {
	root.innerHTML = '';
	const gameBoard = createBoard(state.gameArray);
	root.append(gameBoard);
	state.cells = document.querySelectorAll('.game__cell');

	const arrayFromCells = Array.from(state.cells).map((cell) => {
		if (cell.classList.contains('game__cell--empty')) {
			return 'empty';
		}
		return cell.textContent;
	});

	state.cells.forEach((cell, idx) => {
		cell.addEventListener('click', (e) => {
			const empty = document.querySelector('.game__cell--empty');
			const currentCell = e.target;

			let top = null;
			let bottom = null;
			if (!(idx >= 0 && idx < 4)) {
				top =
					currentCell.previousSibling.previousSibling.previousSibling
						.previousSibling;
			}
			if (!(idx <= 15 && idx > 12)) {
				bottom = currentCell.nextSibling.nextSibling.nextSibling.nextSibling;
			}

			const next = currentCell.nextSibling;
			const previous = currentCell.previousSibling;

			if (next === empty) {
				if (!((idx + 1) % 4 === 0)) {
					state.gameArray = getArrangedArray(dir.left, arrayFromCells, idx);
				}
			}

			if (previous === empty) {
				if (!(idx % 4 === 0)) {
					state.gameArray = getArrangedArray(dir.right, arrayFromCells, idx);
				}
			}

			if (top === empty) {
				state.gameArray = getArrangedArray(dir.top, arrayFromCells, idx);
			}

			if (bottom === empty) {
				state.gameArray = getArrangedArray(dir.bottom, arrayFromCells, idx);
			}

			render();
		});
	});
};

render();
