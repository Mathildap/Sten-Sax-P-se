console.log("funkar");

let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const scoreBoardDiv = document.querySelector(".score-board");
const computerResult = document.getElementById("computerResult");
const resultP = document.querySelector(".result > #result");
const choices = document.querySelector(".choices");
const message = document.getElementById("message");
const actionMessage = document.getElementById("actionMessage");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randonNumber = Math.floor(Math.random() * 3);
    return choices[randonNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Sten";
    if (letter === "p") return "Påse";
    return "Sax";
}

function win(userChoice, computerChoice) {
    console.log("WIN");
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)} tar ${convertToWord(computerChoice)}. Du vinner!`;
};

function lose(userChoice, computerChoice) {
    console.log("LOSE");
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)} tar inte ${convertToWord(computerChoice)}. Du förlorar..`;
};

function draw(userChoice, computerChoice) {
    console.log("DRAW");
    // userScoreSpan.innerHTML = userScore;
    // computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)} mot ${convertToWord(computerChoice)}. Lika..!`;
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    computerResult.innerHTML = "Datorn valde " + convertToWord(computerChoice);
    // console.log("User choice: " + userChoice);
    // console.log("Computer choice: " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
    endGameUser(userScore);
    endGameComputer(computerScore);
};

function main() {
    rockDiv.addEventListener("click", function() {
        console.log("rock");
        game("r");
    });

    paperDiv.addEventListener("click", function() {
        console.log("paper");
        game("p");
    });

    scissorsDiv.addEventListener("click", function() {
        console.log("scissors");
        game("s");
    });
};

main();

function endGameUser(score) {
    if (score == 3) {
        console.log("USER IS THE WINNER");
        computerResult.innerHTML = "";
        resultP.innerHTML = "GRATTIS, du vann!"
        choices.innerHTML = "";
        const restartBtn = document.createElement("button");
        restartBtn.id = "restartBtn";
        restartBtn.textContent = "Börja om!";
        actionMessage.innerHTML = "";
        message.appendChild(restartBtn);
        restartGame();
    };
};

function endGameComputer(score) {
    if (score == 3) {
        console.log("COMPUTER IS THE WINNER");
        computerResult.innerHTML = "";
        resultP.innerHTML = "SORRY, du förlorade!"
        choices.innerHTML = "";
        const restartBtn = document.createElement("button");
        restartBtn.id = "restartBtn";
        restartBtn.textContent = "Börja om!";
        actionMessage.innerHTML = "";
        message.appendChild(restartBtn);
        restartGame();
    };
};

function restartGame() {
    document.getElementById("restartBtn").addEventListener("click", function() {
        location.reload();
    });
};