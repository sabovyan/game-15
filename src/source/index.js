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
const gameTimer = document.querySelector('.game__timer');

/**
 * @description keeps current state of the the arrays
 * @typedef {object} state
 * @property {array} orderedArray represents the original order of the array
 * @property {array} gameArray current state of the array that is used for creation of the cells
 * @property {HTMLCollection} cells keeps current order of the html elements from the board
 */
const state = {
	orderedArray: makeOrderedArray(16),
	gameArray: makeShuffledArray(makeOrderedArray(16)),
};

console.log(state.orderedArray);
/**
 * @typedef {object} dir keeps the sizes of the steps towards each direction
 * @property {number} left
 * @property {number} right
 * @property {number} top
 * @property {number} bottom
 */
const dir = {
	left: 1,
	right: -1,
	top: -4,
	bottom: 4,
};

let timer = 0;
const intervalId = setInterval(() => {
	timer += 1;
	gameTimer.textContent = `${timer}s`;
}, 1000);

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
				top =
					currentCell.previousSibling.previousSibling.previousSibling
						.previousSibling;
			}

			if (!(idx <= 15 && idx > 12)) {
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
		});
	});
	if (hasWon(state)) {
		messageBox.style.display = 'flex';
		clearInterval(intervalId);
	}
};

render();

acceptButton.addEventListener('click', () => {
	window.location.reload();
});
rejectButton.addEventListener('click', () => {
	messageBox.innerHTML = '🤔 ...';
	messageBox.style.fontSize = '2rem';
});

window.addEventListener('keydown', (event) => {
	const arrayFromCells = Array.from(state.cells).map((cell) => {
		if (cell.classList.contains('game__cell--empty')) {
			return 'empty';
		}
		return cell.textContent;
	});

	const indexOfEmpty = arrayFromCells.indexOf('empty');
	if (event.key === 'ArrowRight') {
		if (!((indexOfEmpty + 1) % 4 === 0)) {
			state.gameArray = getArrangedArray(
				dir.left,
				arrayFromCells,
				indexOfEmpty
			);
		}
	}
	if (event.key === 'ArrowLeft') {
		if (!(indexOfEmpty % 4 === 0)) {
			state.gameArray = getArrangedArray(
				dir.right,
				arrayFromCells,
				indexOfEmpty
			);
		}
	}
	if (event.key === 'ArrowUp') {
		if (!(indexOfEmpty >= 0 && indexOfEmpty < 4)) {
			state.gameArray = getArrangedArray(dir.top, arrayFromCells, indexOfEmpty);
		}
	}

	if (event.key === 'ArrowDown') {
		if (!(indexOfEmpty >= 12 && indexOfEmpty < 16)) {
			state.gameArray = getArrangedArray(
				dir.bottom,
				arrayFromCells,
				indexOfEmpty
			);
		}
	}

	render();
});
