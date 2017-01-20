console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
	alert('You found a match!');
} else if (cardThree === cardFour) {
	alert('You found a match!');
}
else {
	alert('Try again!')
}
*/


/* var createCards = function () {

}
*/


	var gameBoard = document.getElementById('game-board');
	var cards = 4;
function createCards () {
	for (var i = 0; i < cards; i++) {
		var cardsDiv = document.createElement('div');
		cardsDiv.className = 'card';
		gameBoard.appendChild(cardsDiv)
	}
}

whichElem = document.getElementById('cards');

createCards();









