function computerChoice(){
    const options = ["r", "p", "s"];
    return options[Math.floor(Math.random()*3)];
}

function playerChoice(){
    let choice = prompt(`"r" for "Rock"\n"p" for "Paper"\n"s" for "Scissors"`).toLowerCase();
    while (choice != "r" && choice != "p" && choice != "s"){
        choice = playerChoice();
    }
    return choice;
}

function game(player, computer){
    if (player==computer){
        console.log(`Tie ! You both chose ${player}`);
        return 0;
    }
    else if (player=="r" && computer=="s" || player=="p" && computer=="r" || player=="s" && computer=="p"){
        console.log(`You win ! ${player} beats ${computer}`);
        return 1;
    }
    else{
        console.log(`You lose ! ${computer} beats ${player}`);
        return -1;
    }
}

let score = 0;
for (let i=0; i<5; i++){
    score += game(playerChoice(), computerChoice());
}

console.log(`Game over ! Final score ${score}`);