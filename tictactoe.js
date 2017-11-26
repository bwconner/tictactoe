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

	// If first move go after a corner, add in a small chance the cpu doesnt
	if ($(".played").length <= 0) {
		var initialThought = (Math.floor(Math.random() * 10));
		if (initialThought) {
			var chooseCellAtRandom = (Math.floor(Math.random() * 9));
			switch(chooseCellAtRandom) {
				case 0:
					$("#A1").addClass("computer-cell");
					break;
				case 1:
					$("#A2").addClass("computer-cell");
					break;
				case 2:
					$("#A3").addClass("computer-cell");
					break;
				case 3:
					$("#B1").addClass("computer-cell");
					break;
				case 4:
					$("#B2").addClass("computer-cell");
					break;
				case 5:
					$("#B3").addClass("computer-cell");
					break;
				case 6:
					$("#C1").addClass("computer-cell");
					break;
				case 7:
					$("#C2").addClass("computer-cell");
					break;
				case 8:
					$("#C3").addClass("computer-cell");
					break;
				default:
					$("#B2").addClass("computer-cell");
			}			
		} else {
			var cornerSelection = (Math.floor(Math.random() * 4));
			switch(cornerSelection) {
				case 0:
					$("#A1").addClass("computer-cell");
					break;
				case 1:
					$("#A3").addClass("computer-cell");
					break;
				case 2:
					$("#C1").addClass("computer-cell");
					break;
				case 3:
					$("#C3").addClass("computer-cell");
					break;
				default:
					$("#C1").addClass("computer-cell");
			}
		}
	}

	endComputerTurn();
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
	beginComputerTurn()
}

function checkForWin() {

}
 
function resetBoard() {

}

$(document).ready(function() {
	beginGame();
});