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

function replace_text(new_text) {
    const container = document.querySelector('.result');
    const remove_text = document.getElementById('text');
    container.removeChild(remove_text);
    const content = document.createElement('span');
    content.setAttribute('id','text');
    content.textContent = new_text;
    container.appendChild(content);
}

let player_score = 0;
let computer_score = 0;
function game(playerSelection) {
    
    let result =playRound(playerSelection, computerPlay());
    replace_text(result);
    if (result.slice(4)[0] == "W") {
        player_score += 1;
    }
    else {
        computer_score += 1;
    }
    let score_string = player_score.toString();
    if (player_score > 4) {
         replace_text(`You win the game! Your score is ${score_string}.`);
         player_score = 0;
         computer_score = 0;
     }
     else if (computer_score > 4){
        replace_text(`You lose the game! Your score is ${score_string}.`);
        player_score = 0;
        computer_score = 0;
     }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function (e) {
      game(button.id);
    });

});