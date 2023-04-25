const btn_choices = document.querySelectorAll(".choice");
const btn_result = document.querySelector("#result");
const human_score = document.querySelector("#human");
const computer_score = document.querySelector("#computer");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        btn_result.textContent = "Draw! Nobody Wins";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        human_score.textContent = parseInt(human_score.textContent) + 1;
        if (human_score.textContent === "5"){
            end_game();
            btn_result.textContent = "Congratulations, you win";
        }
        btn_result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computer_score.textContent = parseInt(computer_score.textContent) + 1;
        if (computer_score.textContent === "5"){
            end_game();
            btn_result.textContent= "Game Over, you Lost";
        }
        btn_result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function end_game(){
    btn_choices.forEach(btn => {
        btn.disabled = true;
    })
}

function game() {
    btn_choices.forEach(btn => {
        btn.onclick = () => playRound(btn.textContent, getComputerChoice());
    });
}



game();