console.log('script is working fine!');

const action = ['rock', 'paper', 'scissors'];

function getComputerChoice(max) {
    let randomAction = Math.floor(Math.random() * max);   // expected output 0 to max-1;

    console.log("Computer choice from function: ", action[randomAction]);
    return randomAction;
}

let ComputerChoice = getComputerChoice(action.length);
console.log(ComputerChoice);

function getInput() {
    let inputValue = document.getElementById('userInput').value;
    console.log("User choice: ", action[inputValue]);
    return inputValue;
}

// function getPromptInput() {
//     let userChoice = parseInt(prompt('User choice: '));
//     console.log("User Choice: ", action[userChoice]);
//     return userChoice - 1;
// }

// let userChoice = getPromptInput();
// console.log(userChoice);


function captureValue(button) {
    let userChoice = parseInt(button.value);    // store last clicked button value
    let compChoice = getComputerChoice(action.length);
    // let btnValue = parseInt(button.value);
    // console.log('Clicked btn value: ', btnValue);
    // document.getElementById("clickedValue").textContent = btnValue;
    // return btnValue;

    chooseWinner(compChoice, userChoice);
}    


function chooseWinner(ComputerChoice, userChoice) {
    // 0: rock, 1: paper, 2: scissors

    console.log('first');

    if (ComputerChoice == userChoice) {
        alert('Tie! Both chose ' + action[ComputerChoice]);
    } else if ((ComputerChoice == 0 && userChoice == 2) || (ComputerChoice == 1 && userChoice == 0) || (ComputerChoice == 2 && userChoice == 1)) {
        alert('Computer wins! ' + action[ComputerChoice] + ' beats ' + action[userChoice]);
    } else {
        alert('User wins! ' + action[userChoice] + ' beats ' + action[ComputerChoice]);
    }

    console.log('second');
}

// chooseWinner(ComputerChoice, userChoice);