// js code goes herecomputerPlay = "";
let choice = "";
let pwins = 0;
let cwins = 0;

function makeRandomNumber(){
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function computerTurn(){
    turn = makeRandomNumber();
    // 0 = P, 1 = R, 2 = S
    switch(turn){
        case 0:
            computerPlay = "paper";
            document.querySelector("#computerImage").src = "media/paper.jpg";
            break;
        case 1:
            computerPlay = "rock";
            document.querySelector("#computerImage").src = "media/rock.jpg";
            break;
        case 2:
            computerPlay = "scissors";            
    		document.querySelector("#computerImage").src = "media/scissors.jpg";
            break;
    }
}

let rockChoice = document.querySelector("#rockImage");
let paperChoice = document.querySelector("#paperImage");
let scissorsChoice = document.querySelector("#scissorsImage");
let playerResult = document.querySelector("#playerImage").src;
let computerResult = document.querySelector("#computerImage".src);

rockChoice.addEventListener("click", () => {
	choice = "rock";
	document.querySelector("#playerImage").src = "media/rock.jpg";
	playRound(choice);
});
paperChoice.addEventListener("click",  () => {
	choice = "paper";
	document.querySelector("#playerImage").src = "media/paper.jpg";
	playRound(choice);
});
scissorsChoice.addEventListener("click",  () => {
	choice = "scissors";
	document.querySelector("#playerImage").src = "media/scissors.jpg"
	playRound(choice);
});

function playRound(choice){
    computerTurn();
    if (choice === "rock"){
        if (computerPlay === "rock"){
            alert("Round was a draw...you both chose rock.")
        }
        else if (computerPlay === "paper"){
            alert("Computer wins with 'paper'");
            cwins ++;
        }
        else {
            alert("Computer chose scissors. You win the round!");
            pwins++;
        }
    }
    else if (choice === "paper"){
    	if (computerPlay === "rock"){
            alert("Computer chose rock. You win the round!");
            pwins++;
        }
        else if (computerPlay === "paper"){
            alert("Round was a draw...you both chose 'paper.'");
        }
        else {
            alert("Computer wins with 'scissors'");
            cwins++;
        }   
    }
    else {
        if (computerPlay === "rock"){
            alert("Computer wins with 'rock'");
            cwins++;
        }
        else if (computerPlay === "paper"){
            alert("Computer chose paper. You win the round!");
            pwins++;
        }
        else {
            alert("Round was a draw...you both chose 'scissors.'"); 
        }
        
    }
}

// function playGame(){
//     cwins = 0;
//     pwins = 0;
//     playRound()
//     playRound()
//     playRound()
//     playRound()
//     playRound()
//     if(cwins > pwins){
//         console.log("The computer won the game! You lose.");
//     }
//     else if(cwins < pwins){
//         console.log("You beat the computer at PRS! What are you doing with your life?");
//     }
//     else {
//         console.log("The game is a draw. No winners here.");
//     }
//     console.log("Final Score: \nYou: " + pwins + "\nComputer: " + cwins);
// }

 
