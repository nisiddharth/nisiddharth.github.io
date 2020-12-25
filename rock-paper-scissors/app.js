let _userScore = 0;
let _computerScore = 0;
const _choices = ['r', 'p', 's'];

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();


function getComputerChoice() {
    return _choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    if (letter == 'r') return 'Rock';
    if (letter == 'p') return 'Paper';
    if (letter == 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
    ++_userScore;
    userScore_span.innerHTML = _userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    const userChoiceDivList = document.getElementById(userChoice).classList;
    userChoiceDivList.add('green-glow');
    setTimeout(() => userChoiceDivList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    ++_computerScore;
    computerScore_span.innerHTML = _computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 😢`;
    const userChoiceDivList = document.getElementById(userChoice).classList;
    userChoiceDivList.add('red-glow');
    setTimeout(() => userChoiceDivList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. 🤐`;
    const userChoiceDivList = document.getElementById(userChoice).classList;
    userChoiceDivList.add('gray-glow');
    setTimeout(() => userChoiceDivList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();
