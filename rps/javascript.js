function computerPlay() {
    let numb = Math.floor(Math.random()*3);

    if (numb == 0) {
        return "Rock";
    }
    else if (numb ==1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function lower_(word) {
    let lower = word.toLowerCase();
    let first = word.charAt(0).toUpperCase();
    return first + lower.slice(1);
}

function playRound(playerSelection, computerSelection) {

    playerSelection = lower_(playerSelection);

    if (playerSelection == computerSelection) {
        return "You Tie!";
    }
    else {
        switch(playerSelection) {
            case "Rock":
                if (computerSelection == "Paper") {
                    return "You Lose! Paper beats Rock.";
                }
                else {
                    return "You Win! Rock beats Scissors.";
                }
            case "Paper":
                if (computerSelection == "Scissors") {
                    return "You Lose! Scissors beats Paper.";
                }
                else {
                    return "You Win! Paper beats Rock.";
                }
            case "Scissors":
                if (computerSelection == "Rock") {
                    return "You Lose! Rock beats Scissors.";
                }
                else {
                    return "You Win! Scissors beats Paper.";
                }
            default:
                    return "Must enter valid move.";
        }
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play a move! (Rock, Paper, Scissors)");
        let result =playRound(playerSelection, computerPlay());
        console.log(result);
        if (result.slice(4)[0] == "W") {
            score += 1;
        }
     }   
     return score; 
}