console.log("Welcome to my javascript game!")

function getComputerChoice() {
    let x = Math.random()
    if (x < 0.33) {
        return "Rock"
    }
    else if (x > 0.66) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}


function getHumanChoice() {
    let correctResponse = false
    while (correctResponse == false) {
        let userInput = prompt("Type 1 for Rock, 2 for Paper or 3 for Scissors")
        if (userInput == 1) {
            return "Rock"
        }
        else if (userInput == 2) {
            return "Paper"
        }
        else if (userInput == 3) {
            return "Scissors"
        }
        else {
            console.log("Your answer is invalid, please type 1 for Rock, 2 for Paper or 3 for Scissors")
        }
    }
}






function playGame() {


    function playGround(humanSelection, computerSelection) {

        if (humanSelection == "Rock" && computerSelection == "Paper") {
            // computerScore++
            console.log("You lose, Paper beats Rock!")
            return 0
        }
        else if (humanSelection == "Paper" && computerSelection == "Rock") {
            // humanScore++
            console.log("You won, Paper beats Rock!")
            return 1
        }
        else if (humanSelection == "Paper" && computerSelection == "Scissors") {
            // computerScore++
            console.log("You lose, Scissors beats Paper!")
            return 0
        }
        else if (humanSelection == "Scissors" && computerSelection == "Paper") {
            // humanScore++
            console.log("You won, Scissors beats Paper!")
            return 1
        }
        else if (humanSelection == "Scissors" && computerSelection == "Rock") {
            // computerScore++
            console.log("You lose, Rock beats Scissors!")
            return 0
        }
        else if (humanSelection == "Rock" && computerSelection == "Scissors") {
            // humanScore++
            console.log("You won, Rock beats Scissors!")
            return 1
        }
        else {
            console.log("It's a draw! You both choose the same!")
            console.log(humanSelection)
            console.log(computerSelection)
            return false
        }
    }

    let i = 0
    let computerScore = 0
    let humanScore = 0
    for (; i < 5; i++) {
        let result = 2
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playGround(humanSelection, computerSelection)
        console.log(result)
        if (result === 0) {
            computerScore++
        }
        else if (result === 1) {
            humanScore++
        }
    }
    if (computerScore > humanScore) {
        console.log("You lost to computer with score %i - %i. Better luck next time.", computerScore, humanScore)
    }
    else if (humanScore > computerScore) {
        console.log("You won with score %i - %i! Congratulations!", humanScore, computerScore)
    }
    else {
        console.log("It's a draw with score %i - %i out of %i games!", humanScore, computerScore, 5)
    }
}

playGame()