let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    // console.log("Game was draw");
    msg.textContent = "Draw";
    msg.style.backgroundColor = "#081b31";
};


const genCompChoice = () => {
    //    st one, paper scissor
    const option = ["stone", "paper", "scissor"];
    let ranIdx = Math.floor(Math.random() *3);
    return option[ranIdx];
}

const playGame = (userChoice) => {
    // console.log("User Choice =", userChoice);
    // Generate Computer Choice --> Modular
    const compChoice = genCompChoice();
    // console.log("computer's choice = ", compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice==="stone"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            // stone scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // stone paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choices is clicked", userChoice);
        playGame(userChoice);
    });
});
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose");
        msg.innerText = `You Lose.Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};