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
