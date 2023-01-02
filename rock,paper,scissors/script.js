let buttons = document.querySelector('.buttons');
let player_label = document.getElementById('player_label');
let computer_label = document.getElementById('computer_label');
let results_label = document.getElementById('results_label');
let player;
let computer;
let results;
let random;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let admisible_hz = ['ROCK', 'PAPER', 'SCISSORS'];

rock.onclick = function (){
    player = rock.textContent;
    player_label.innerHTML = player;
    random = Math.floor(Math.random() * 3);
    computer = admisible_hz[random];
    computer_label.textContent = computer;
    switch(computer){
        case "ROCK":
            results = 'Drow!';
            results_label.textContent = results;
            results_label.style.color = 'yellow';
            break;
        case "PAPER":
            results = "You lost!";
            results_label.textContent = results;
            results_label.style.color = 'red';
            break;
        case "SCISSORS":
            results = 'You won!';
            results_label.textContent = results;
            results_label.style.color = 'green';
            break;
        default:
            results = 'UNKNOW ERROR! TRY AGAIN'
            results_label.textContent = results;
            break
    }
}
paper.onclick = function (){
    player = paper.textContent
    player_label.innerHTML = player;
    random = Math.floor(Math.random() * 3);
    computer = admisible_hz[random];
    computer_label.textContent = computer;
    switch(computer){
        case "ROCK":
            results = 'You won!';
            results_label.textContent = results;
            results_label.style.color = 'green';
            break;
        case "PAPER":
            results = 'Drow!';
            results_label.textContent = results;
            results_label.style.color = 'yellow';
            break;
        case "SCISSORS":
            results = "You lost!";
            results_label.textContent = results;
            results_label.style.color = 'red';
            break;
        default:
            results = 'UNKNOW ERROR! TRY AGAIN'
            results_label.textContent = results;
            break
    }
}

scissors.onclick = function (){
    player = scissors.textContent
    player_label.innerHTML = player;
    random = Math.floor(Math.random() * 3);
    computer = admisible_hz[random];
    computer_label.textContent = computer;
    switch(computer){
        case "ROCK":
            results = "You lost!";
            results_label.textContent = results;
            results_label.style.color = 'red';
            break;
        case "PAPER":
            results = 'You won!';
            results_label.textContent = results;
            results_label.style.color = 'green';
            break;
        case "SCISSORS":
            results = 'Drow!';
            results_label.textContent = results;
            results_label.style.color = 'red';
            results_label.style.color = 'yellow';
            break;
        default:
            results = 'UNKNOW ERROR! TRY AGAIN'
            results_label.textContent = results;
            break
    }
}

