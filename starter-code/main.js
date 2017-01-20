console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [ ];
	/* if (cardOne === cardTwo) {
	alert('You found a match!');
} else if (cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Try again!');
} */
var gameBoard = document.getElementById('game-board');
var createBoard = function() {
    for ( var i = 0; i < cards.length; i++) {
        newCard.setAttribute('data-card', cards[i]);
        newCard.addEventListener('click',  isTwoCards);
        gameBoard.appendChild(newCard);
    }
}

var isMatch = function() {

}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.lenth === 2) {
		isMatch(cardsInPlay);
		cardsinPlay = [];
	}
}

createBoard ();







