var playerTurn = true;
//var currentBoard[[0,0,0][0,0,0][0,0,0]];

function beginGame () {
	var playerStart = determineOrder();

	if (playerStart) {
		playerTurn = true;
		$(".turn-information").text("Your Turn");
	} else {
		playerTurn = false;
		$(".turn-information").text("Computer's Turn");
		computerTurn();
	}

	playerClickHandler();
}

function determineOrder() {
	return (Math.floor(Math.random() * 2) == 0);
}

function playerClickHandler() {
	if (!playerTurn) {
		return;
	}

	$(".game-cell").on("click", function() {
		var $playerChoice = $(this);
		if ($playerChoice.hasClass("played")) {
			//invalid choice error
		} else {
			$playerChoice.addClass("played");
			$playerChoice.addClass("player-cell");
		}
	});

}

function computerTurn() {

}

function endTurn () {

}

function resetBoard() {

}


$(document).ready(function() {
	beginGame();
});