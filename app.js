const btn_choices = document.querySelectorAll(".choice");
const lapel_result1 = document.querySelector("h2");
const lapel_result2 = document.querySelector("h3");
const human_sign = document.querySelector("#humanSign");
const human_score_lapel = document.querySelector("#humanScore");
const computer_sign = document.querySelector("#computerSign");
const computer_score_lapel = document.querySelector("#computerScore");
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')
let human_score = 0;
let computer_score = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if(human_score === 5 || computer_score===5) {
        endGame()
    }else if (playerSelection === computerSelection) {
        lapel_result1.textContent = "It's a tie!";
        lapel_result2.textContent = `${playerSelection} ties with ${computerSelection}`;
        human_sign.textContent = getEmoji(playerSelection);
        computer_sign.textContent = getEmoji(computerSelection);
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        human_score++;
        lapel_result1.textContent = "You won!";
        lapel_result2.textContent = `${playerSelection} beats ${computerSelection}`;
        human_sign.textContent = getEmoji(playerSelection);
        computer_sign.textContent = getEmoji(computerSelection);
        human_score_lapel.textContent = `Human: ${human_score}`
        if (human_score === 5) endGame();
    } else {
        computer_score++;
        lapel_result1.textContent = "You lost!";
        lapel_result2.textContent = `${playerSelection} is beaten by ${computerSelection}`;
        human_sign.textContent = getEmoji(playerSelection);
        computer_sign.textContent = getEmoji(computerSelection);
        computer_score_lapel.textContent = `Computer: ${computer_score}`
        if (computer_score === 5) endGame();
        
    }
}

function endGame(){
    openEndgameModal();
    setFinalMessage();
}
function game() {
    btn_choices.forEach(btn => {
        btn.onclick = () => playRound(btn.id, getComputerChoice());
    });
}

restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function getEmoji(name){
    switch (name){
        case "Rock":
            return "✊";
            break;
        case "Paper":
            return "✋";
            break;
        case "Scissors":
            return "✌";
            break;
    }
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndgameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage() {
    return human_score > computer_score
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...');
}

function restartGame() {
    human_score = 0;
    computer_score = 0;
    lapel_result1.textContent = 'Choose your weapon';
    lapel_result2.textContent = 'First to score 5 points wins the game';
    human_score_lapel.textContent = 'Human: 0';
    computer_score_lapel.textContent = 'Computer: 0';
    human_sign.textContent = '❔';
    computer_sign.textContent = '❔';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

game();