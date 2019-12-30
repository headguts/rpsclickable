let choice = "";
let winner = 0;

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
let playAgain = document.querySelector("#playAgain");


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
playAgain.addEventListener("click",  () => {
	document.querySelector("#playerImage").src = "media/none.png"
	document.querySelector("#computerImage").src = "media/none.png"
	document.querySelector("#result").textContent = "";

});

function playRound(choice){
    computerTurn();
    if (choice === "rock"){
        if (computerPlay === "rock"){
            winner = "It's a Draw!";
        }
        else if (computerPlay === "paper"){
            winner = "You lose...";
        }
        else {
            winner = "You Win!";
        }
    }
    else if (choice === "paper"){
    	if (computerPlay === "rock"){
            winner = "You Win!";
        }
        else if (computerPlay === "paper"){
            winner = "It's a Draw!";
        }
        else {
            winner = "You lose...";
        }   
    }
    else {
        if (computerPlay === "rock"){
            winner = "You lose...";
        }
        else if (computerPlay === "paper"){
            winner = "You Win!";
        }
        else {
            winner = "It's a Draw!";
        }
        
    }
    document.querySelector("#result").textContent = winner;
}
 
