var playerTurn = true;
var currentBoard = [[2,0,2],
					[0,0,0],
					[2,0,2]];

function beginGame () {
	var playerStart = determineOrder();

	if (playerStart) {
		playerTurn = true;
		$(".turn-information").text("Your Turn");
	} else {
		playerTurn = false;
		$(".turn-information").text("Computer's Turn");
		beginComputerTurn();
	}

	playerClickHandler();
}

function determineOrder() {
	return (Math.floor(Math.random() * 2) == 0);
}

function playerClickHandler() {
	$(".game-cell").on("click", function() {
		if (playerTurn === false) {
			return;
		}

		var $playerChoice = $(this);
		if ($playerChoice.hasClass("played")) {
			//invalid choice error
		} else {
			$playerChoice.addClass("played");
			$playerChoice.addClass("player-cell");
			endPlayerTurn();
		}
	});
}

function beginComputerTurn() {
	alert(Math.max(...currentBoard[0]));
	alert(Math.max(...currentBoard[1]));
	alert(Math.max(...currentBoard[2]));

	if ((".played").length <= 0) {

	}
}

function endComputerTurn() {
	playerTurn = true;
	$(".turn-information").text("Player's Turn");
}

function beginPlayerTurn() {

}

function endPlayerTurn() {
	playerTurn = false;
	$(".turn-information").text("Computer's Turn");
}

function checkForWin() {
	
}
 
function resetBoard() {

}

$(document).ready(function() {
	beginGame();
});