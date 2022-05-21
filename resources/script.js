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
        });
        computerDiv.classList.remove('won');
        computerDiv.classList.remove('lost');

        // Play & Display
        score += game(e.target, e.target.id, computerPlay());
        scoreSpan.textContent = ' ' + score;
    });
});

function computerPlay(){
    const anime = [
        { opacity: 0 },
        { opacity: 1, offset: 0.25 },
        { opacity: 0 }
    ];
    const delay = { duration: 2000, iterations: 1 };
    
    let generated = ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)];
    
    computerDiv.textContent = `Computer choice is ${generated}`;
    computerDiv.animate(anime, delay);

    return generated;
}

function game(element, player, computer){
    if (player == computer) {
        computerDiv.style.color = 'black';
        return 0;
    }
    else if (player=="Rock" && computer=="Scissors" || player=="Paper" && computer=="Rock" || player=="Scissors" && computer=="Paper"){
        computerDiv.classList.add('won');
        element.classList.add('won');
        return 1;
    }
    else {
        computerDiv.classList.add('lost');
        element.classList.add('lost');
        return -1;
    }
}