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
	const result = document.createElement('div');
	const human_score_display = document.createElement('div');
	const computer_score_display = document.createElement('div');
	let human_score = 0;
	let computer_score = 0;

	if (human_choice == 'rock') {
		if (computer_choice == 'rock') {
			result.textContent = "They chose rock! It's a draw!";
		} else if (computer_choice == 'paper') {
			result.textContent = 'Paper beats rock! You lose!';
			computer_score++;
		} else if (computer_choice == 'scissors') {
			result.textContent = 'Rock beats scissors! You win!';
			human_score++;
		}
	} else if (human_choice == 'paper') {
		if (computer_choice == 'rock') {
			result.textContent = 'Paper beats rock! You win!';
			human_score++;
		} else if (computer_choice == 'paper') {
			result.textContent = "They chose paper! It's a draw!";
		} else if (computer_choice == 'scissors') {
			result.textContent = 'Scissors beat paper! You lose!';
			computer_score++;
		}
	} else if (human_choice == 'scissors') {
		if (computer_choice == 'rock') {
			result.textContent = 'Rock beats scissors! You lose!';
			computer_score++;
		} else if (computer_choice == 'paper') {
			result.textContent = 'Scissors beat paper! You win!';
			human_score++;
		} else if (computer_choice == 'scissors') {
			result.textContent = "They chose scissors, It's a draw!";
		}
	}
	human_score_display.textContent =
		parseInt(human_score_display.textContent) + human_score;
	computer_score_display.textContent =
		parseInt(computer_score_display.textContent) + computer_score;
	results.appendChild(result);
	scores.appendChild(human_score_display);
	scores.appendChild(computer_score_display);
}
/**
 *A function that plays a game depending on how many rounds.
 *
 */
function playGame() {
	let human_score = 0;
	let computer_score = 0;
	const number_of_rounds = 5;

	for (let round_number = 0; round_number < number_of_rounds; round_number++) {
		const human_selection = getHumanChoice();
		const computer_selection = getComputerChoice();

		playRound(human_selection, computer_selection);
	}
	if (human_score > computer_score) {
		console.log('You Win!');
	} else if (computer_score > human_score) {
		console.log('You lose!');
	} else console.log('You Drew!');
}
const scores = document.querySelector('#scores_container');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results_container');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(button.id, getComputerChoice());
	});
});
