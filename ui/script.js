let score = 0;
const scoreSpan = document.querySelector("span");

const computerDiv = document.querySelector('.computer');

const choices = document.querySelectorAll("button");
choices.forEach(element => {
    element.addEventListener('click', (e) => {
        // remove styles
        choices.forEach(choice => {
            choice.classList.remove('won');
            choice.classList.remove('lost');
        })

        // Play & Display
        score += game(e.target, e.target.id, computerPlay());
        scoreSpan.textContent = score;
    });
});

function computerPlay(){
    let generated = ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
    computerDiv.textContent = `Computer choice is ${generated}`;
    return generated;
}

function game(element, player, computer){
    if (player == computer) {
        return 0;
    }
    else if (player=="Rock" && computer=="Scissors" || player=="Paper" && computer=="Rock" || player=="Scissors" && computer=="Paper"){
        element.classList.add('won');
        return 1;
    }
    else {
        element.classList.add('lost');
        return -1;
    }
}