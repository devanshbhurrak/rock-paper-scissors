let moves = document.querySelectorAll('.choice')
let msg = document.querySelector('.msg');
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('comp-score');

let user = 0;
let comp = 0;

moves.forEach((move, index) => {
    move.addEventListener('click', ()=> {
        const choice = Math.floor(Math.random() * 3);
        if(choice == index) {
            msg.innerText='Its Draw!';
        }
        if(index == 0) {
            if(choice == 2) {
                user++;
                userScore.innerText = user;
                msg.style.color='Green';
                msg.innerText='Rock beats Scissor';
            } else {
                comp++;
                compScore.innerText = comp;
                msg.style.color='Red';
                msg.innerText='Paper beats Rock';
            }
        }
        else if (index == 1) {
            if(choice == 0) {
                user++;
                userScore.innerText = user;
                msg.style.color='Green';
                msg.innerText='Paper beats Rock';
            } else {
                comp++;
                compScore.innerText = comp;
                msg.style.color='Red';
                msg.innerText='Scissor beats Paper';
            }
        }
        else {
            if(choice == 1) {
                user++;
                userScore.innerText = user;
                msg.style.color='Green';
                msg.innerText='Scissor beats Paper';
            } else {
                comp++;
                compScore.innerText = comp;
                msg.style.color='Red';
                msg.innerText='Rock beats Scissor';
            }
        }
    }) 
})