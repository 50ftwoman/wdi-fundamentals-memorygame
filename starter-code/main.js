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
        cardElement.setAttribute('data-card', cards[i]);
        	if ('data-card' === 'king') {
        		cardElement.innerHTML = '<img src="king.png" alt ="King of Hearts" />';
        	}
        	else if ('data-card' === 'queen') {
        		cardElement.innerHTML = '<img src="queen.png" alt="Queen of Spades" />';
        	}
        newCard.addEventListener('click',  isTwoCards);
        	newCard = getElementById('data-card');
        		newcard.innerHTML = <'div onclick = '/>

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

....






