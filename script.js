let score = 0;
const scoreSpan = document.querySelector("#scoreDisplay");
scoreSpan.textContent = score;

const choices = document.querySelectorAll("button");
choices.forEach(element => { 
    element.addEventListener('click', (e) => {
        let result = game(e.target.id, computerPlay());
        element.classList.remove("won");
        element.classList.remove("lost");
        switch (result){
            case 1 :
                element.classList.add("won");
                break;
            case -1 : 
                element.classList.add("lost");
                break;
        }
        score += result;
        scoreSpan.textContent = score;
        
    })});

function computerPlay(){
    const options = ["r", "p", "s"];
    return options[Math.floor(Math.random()*3)];
}

function game(player, computer){
    if (player==computer){
        return 0;
    }
    else if (player=="r" && computer=="s" || player=="p" && computer=="r" || player=="s" && computer=="p"){
        return 1;
    }
    else{
        return -1;
    }
}

