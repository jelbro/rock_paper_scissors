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
