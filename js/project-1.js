"use strict";
const refs = {
    textOneEl: document.querySelector(".message"),
    secretNumberEl: document.querySelector(".number"),
    hightScoreEl: document.querySelector(".highscore"),
    inputEl: document.querySelector(".guess"),
    scoreEl: document.querySelector(".score"),
    bodyEl: document.querySelector("body"),
    btnMainEl: document.querySelector(".check"),
    againBtnEl: document.querySelector(".again"),
};
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
refs.scoreEl.textContent = `${score}`;
if (refs.btnMainEl !== null) {
    refs.btnMainEl.addEventListener("click", () => {
        const guess = Number(refs.inputEl.value);
        if (!guess) {
            refs.textOneEl.textContent = "🤷‍♀️ No number!";
        }
        else if (guess === randomNumber) {
            refs.bodyEl.style.backgroundColor = "#60b347";
            refs.textOneEl.textContent = "🤸‍♂️ Correct Number";
            refs.secretNumberEl.style.width = "30rem";
            refs.secretNumberEl.textContent = `${randomNumber}`;
            if (refs.hightScoreEl.textContent !== null &&
                score > +refs.hightScoreEl.textContent) {
                refs.hightScoreEl.textContent = `${score}`;
            }
        }
        else {
            if (score > 0) {
                refs.textOneEl.textContent =
                    guess > randomNumber ? "🦒 Too hight" : "🐹 Too low";
                score -= 1;
                refs.scoreEl.textContent = `${score}`;
            }
            else {
                refs.textOneEl.textContent = "😫 You lost the game";
            }
        }
    });
}
if (refs.againBtnEl !== null) {
    refs.againBtnEl.addEventListener("click", () => {
        score = 20;
        refs.textOneEl.textContent = "Start guessing...";
        refs.bodyEl.style.backgroundColor = "#222";
        refs.secretNumberEl.style.width = "15rem";
        refs.secretNumberEl.textContent = `?`;
        refs.scoreEl.textContent = `${score}`;
        randomNumber = Math.trunc(Math.random() * 20) + 1;
        refs.inputEl.value = "";
    });
}
