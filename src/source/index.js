import { makeShuffledArray, makeOrderedArray } from './helper/array.helper.js';
import {
	createBoard,
	getArrangedArray,
	hasWon,
} from './helper/render.helper.js';

const root = document.querySelector('#root');
const messageBox = document.querySelector('.game__outer-box');
const acceptButton = document.querySelector('.game__accept');
const rejectButton = document.querySelector('.game__reject');

const state = {
	orderedArray: makeOrderedArray(16),
	// gameArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 'empty', 15],
	gameArray: makeShuffledArray(makeOrderedArray(16)),
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
			const right = currentCell.nextSibling;
			const left = currentCell.previousSibling;

			let top = null;
			let bottom = null;
			if (!(idx >= 0 && idx < 4)) {
				/* TODO must be refactored */
				top =
					currentCell.previousSibling.previousSibling.previousSibling
						.previousSibling;
			}

			if (!(idx <= 15 && idx > 12)) {
				/* TODO must be refactored */
				bottom = currentCell.nextSibling.nextSibling.nextSibling.nextSibling;
			}

			if (right === empty) {
				if (!((idx + 1) % 4 === 0)) {
					state.gameArray = getArrangedArray(dir.left, arrayFromCells, idx);
				}
			}

			if (left === empty) {
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
			if (hasWon(state)) {
				messageBox.style.display = 'flex';
			}
		});
	});
};

render();

acceptButton.addEventListener('click', () => {
	window.location.reload();
});
rejectButton.addEventListener('click', () => {
	messageBox.innerHTML = '🤔 ...';
	messageBox.style.fontSize = '2rem';
});
