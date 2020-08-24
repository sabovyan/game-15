## Typedefs

<dl>
<dt><a href="#state">state</a> : <code>object</code></dt>
<dd><p>keeps current state of the the arrays</p>
</dd>
<dt><a href="#dir">dir</a> : <code>object</code></dt>
<dd><p>keeps the sizes of the steps towards each direction</p>
</dd>
</dl>

<a name="state"></a>

## state : <code>object</code>
keeps current state of the the arrays

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| orderedArray | <code>array</code> | represents the original order of the array |
| gameArray | <code>array</code> | current state of the array that is used for creation of the cells |
| cells | <code>HTMLCollection</code> | keeps current order of the html elements from the board |

<a name="dir"></a>

## dir : <code>object</code>
keeps the sizes of the steps towards each direction

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| left | <code>number</code> | 
| right | <code>number</code> | 
| top | <code>number</code> | 
| bottom | <code>number</code> | 

## Functions

<dl>
<dt><a href="#makeOrderedArray">makeOrderedArray(limit)</a> ⇒ <code>Array</code></dt>
<dd><p>creates an ordered array based on the limit of the values in it</p>
</dd>
<dt><a href="#makeShuffledArray">makeShuffledArray(orderedArray)</a> ⇒ <code>array</code></dt>
<dd><p>makeShuffledArray function creates a shuffled array</p>
</dd>
<dt><a href="#createBoard">createBoard(inputtedArray)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>this function is responsible for creating board and its cells</p>
</dd>
<dt><a href="#getArrangedArray">getArrangedArray(step, arrayOfCellsValue, idx)</a> ⇒ <code>array</code></dt>
<dd><p>getArrangedArray function swaps two values of an array based on their index</p>
</dd>
<dt><a href="#hasWon">hasWon(param0)</a> ⇒ <code>boolean</code></dt>
<dd><p>hasWon function checks whether two arrays has the same order of values</p>
</dd>
</dl>

<a name="makeOrderedArray"></a>

## makeOrderedArray(limit) ⇒ <code>Array</code>
creates an ordered array based on the limit of the values in it

**Kind**: global function  
**Returns**: <code>Array</code> - an ordered array whereas values are from 0 to the limit  

| Param | Type |
| --- | --- |
| limit | <code>nmber</code> | 

**Example**  
```js
state.orderedArray = makeOrderedArray(16),
```
<a name="makeShuffledArray"></a>

## makeShuffledArray(orderedArray) ⇒ <code>array</code>
makeShuffledArray function creates a shuffled array

**Kind**: global function  
**Returns**: <code>array</code> - a new shuffled array  

| Param | Type |
| --- | --- |
| orderedArray | <code>array</code> | 

**Example**  
```js
state.gameArray = makeShuffledArray(state.orderedArray )
```
<a name="createBoard"></a>

## createBoard(inputtedArray) ⇒ <code>HTMLElement</code>
this function is responsible for creating board and its cells

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - an html element that contains all the cells  

| Param | Type |
| --- | --- |
| inputtedArray | <code>Array</code> | 

**Example**  
```js
const gameBoard = createBoard(state.gameArray);
	root.append(gameBoard);
```
<a name="getArrangedArray"></a>

## getArrangedArray(step, arrayOfCellsValue, idx) ⇒ <code>array</code>
getArrangedArray function swaps two values of an array based on their index

**Kind**: global function  
**Returns**: <code>array</code> - returns already rearranged array  

| Param | Type |
| --- | --- |
| step | <code>number</code> | 
| arrayOfCellsValue | <code>array</code> | 
| idx | <code>number</code> | 

**Example**  
```js
state.gameArray = getArrangedArray(dir.left, arrayFromCells, idx);
```
<a name="hasWon"></a>

## hasWon(param0) ⇒ <code>boolean</code>
hasWon function checks whether two arrays has the same order of values

**Kind**: global function  
**Returns**: <code>boolean</code> - true if they both have the same order, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| param0 | <code>object</code> | takes two arrays of state object |

**Example**  
```js
hasWon(state)
```
