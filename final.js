const actions = ['rock', 'paper', 'scissors'];

console.log('final.js loaded!')

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function getUserChoice(button) {
    let userChoice = parseInt(button.value);
    let computerChoice = getComputerChoice(actions.length);
    chooseWinner(computerChoice, userChoice);
}

function chooseWinner(ComputerChoice, userChoice) {
    // 0: rock, 1: paper, 2: scissors

    if (ComputerChoice == userChoice) {
        alert('Tie! Both chose ' + action[ComputerChoice]);
    } else if ((ComputerChoice == 0 && userChoice == 2) || (ComputerChoice == 1 && userChoice == 0) || (ComputerChoice == 2 && userChoice == 1)) {
        alert('Computer wins! ' + action[ComputerChoice] + ' beats ' + action[userChoice]);
    } else {
        alert('User wins! ' + action[userChoice] + ' beats ' + action[ComputerChoice]);
    }
}