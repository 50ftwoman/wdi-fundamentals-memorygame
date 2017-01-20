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

        var newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.setAttribute('data-card', cards[i]);
        newCard.addEventListener('click',  isTwoCards);
        gameBoard.appendChild(newCard);
    }
}


var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (i = 0; i < .this(data-card))
}








