let human_score = 0;
let computer_score = 0;

/**
 *A function that generates a random number between 0-2 and
 *returns either rock, paper or scissor depending on the number.
 * @return {string}
 */
function getComputerChoice() {
	const random_number = Math.floor(Math.random() * 3);
	if (random_number == 0) {
		return 'rock';
	} else if (random_number == 1) {
		return 'paper';
	} else if (random_number == 2) {
		return 'scissors';
	} else {
	}
}

/**
 *A function that prompts the user for a choice between rock,
 *paper or scissors and returns the choice. Will loop if incorrect input given.
 * @return {string}
 */
function getHumanChoice() {
	while (true) {
		const human_choice = prompt('Please enter (R)ock, (P)aper or (S)cissors!');
		if (human_choice == 'R' || human_choice == 'r') {
			return 'rock';
		} else if (human_choice == 'P' || human_choice == 'p') {
			return 'paper';
		} else if (human_choice == 'S' || human_choice == 's') {
			return 'scissors';
		} else {
		}
	}
}

/**
 *A function that plays a round of the game, calculates the winner and adds to their score.
 *
 * @param {string} human_choice
 * @param {string} computer_choice
 */
function playRound(human_choice, computer_choice) {
	if (human_choice == 'rock') {
		if (computer_choice == 'rock') {
			console.log("It's a draw!");
		} else if (computer_choice == 'paper') {
			console.log('Paper beats rock! You lose!');
			computer_score++;
		} else if (computer_choice == 'scissors') {
			console.log('Rock beats scissors! You win!');
			human_score++;
		}
	} else if (human_choice == 'paper') {
		if (computer_choice == 'rock') {
			console.log('Paper beats rock! You win!');
			human_score++;
		} else if (computer_choice == 'paper') {
			console.log("It's a draw!");
		} else if (computer_choice == 'scissors') {
			console.log('Scissors beat paper! You lose!');
			computer_score++;
		}
	} else if (human_choice == 'scissors') {
		if (computer_choice == 'rock') {
			console.log('Rock beats scissors! You lose!');
			computer_score++;
		} else if (computer_choice == 'paper') {
			console.log('Scissors beat paper! You win!');
			human_score++;
		} else if (computer_choice == 'scissors') {
			console.log("It's a draw!");
		}
	}
}

const human_selection = getHumanChoice();
const computer_selection = getComputerChoice();

playRound(human_selection, computer_selection);
