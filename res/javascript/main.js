const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const ResultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') //if I had more buttons i will give them Class

let yourChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 yourChoice = e.target.id
 yourChoiceDisplay.innerHTML = yourChoice
 generateComputerChoice()
 getResult()
} ))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1  // or you can use possibleChoices.length
    console.log(randomNumber)

    if (randomNumber == 1) {
        computerChoice = 'rock'
    }
    if (randomNumber == 2) {
        computerChoice = 'paper'
    }
    if (randomNumber == 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
 
function getResult() {
    if (computerChoice == yourChoice) {
        result = "its a draw!"
    }
    if (computerChoice == "rock" && yourChoice == "paper") {
        result = "you win!"
    }
    if (computerChoice == "rock" && yourChoice == "scissors") {
        result = "you lost!"
    }
    if (computerChoice == "paper" && yourChoice == "rock") {
        result = "you lost!"
    }
    if (computerChoice == "paper" && yourChoice == "scissors") {
        result = "you win!"
    }
    if (computerChoice == "scissors" && yourChoice == "rock") {
        result = "you win!"
    }
    if (computerChoice == "scissors" && yourChoice == "paper") {
        result = "you lost!"
    }
    ResultDisplay.innerHTML = result
}