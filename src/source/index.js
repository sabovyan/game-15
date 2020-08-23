import { makeShuffledArray } from './helper/array.helper.js';
import { createBoard } from './helper/render.helper.js';

const root = document.querySelector('#root');

const state = {
	shuffledArray: makeShuffledArray(16),
};
