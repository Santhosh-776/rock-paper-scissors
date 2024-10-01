const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector(".container3");
const played1 = document.createElement("played1");
const played2 = document.createElement("played2");
const submit = document.querySelector("#submit");
const name1 = document.querySelector('#playerName');
const versus = document.querySelector('.versus');
const matchup = document.querySelector('.matchup');
const comPoints = document.querySelector('.comPoints');
const playerPoints = document.querySelector('.playerPoints');
const choices = [0, 1, 2];
const emoji = ["✊", "🖐️", "✌️"];
let cp = 0;
let pp = 0;

submit.addEventListener("click", appendText);

name1.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        appendText();
    }

})
function appendText() {
    const n = name1.value.trim();
    if (n !== '') {
        versus.textContent += n;
    }
    name1.value = "";
    matchup.innerHTML = "Game Starts!";
}

rock.addEventListener("click", () => {
    play(0)
});
paper.addEventListener("click", () => {
    play(1)
});
scissors.addEventListener("click", () => {
    play(2)
});
function play(choice) {
    let compChoice = Math.floor(Math.random() * 3);
    result(choice, compChoice);
    played1.classList.add('player');
    played1.textContent = emoji[compChoice];
    container.appendChild(played1);
    played2.classList.add('player');
    played2.textContent = emoji[choice];
    container.appendChild(played2);
}
function result(c1, c2) {
    if (c1 === c2) {
        matchup.textContent = "Draw!";
    }
    else if ((c1 === 0 && c2 === 1) ||
        (c1 === 1 && c2 === 2) ||
        (c1 == 2 && c2 == 0)) {
        cp += 1;
        matchup.textContent = "Computer scores a point";
        comPoints.textContent = cp;
    }
    else {
        pp += 1;
        matchup.textContent = "Player scores a point";
        playerPoints.textContent = pp;
    }
    if (cp === 5 || pp === 5) {
        if (cp == 5) {
            matchup.innerText = "Computer wins!!";
            container.style.display = "none";
        }
        else {
            matchup.innerText = "Player wins!!";
            container.style.display = "none";
        }
    }
}
