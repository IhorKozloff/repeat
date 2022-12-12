"use strict";
const refs3 = {
    playersAreaEl: document.querySelectorAll('.player'),
    score0El: document.querySelector('#score--0'),
    score1El: document.querySelector('#score--1'),
    current0El: document.querySelector('#current--0'),
    current1El: document.querySelector('#current--1'),
    diceEl: document.querySelector('.dice'),
    btnNewEl: document.querySelector('.btn--new'),
    btnRollEl: document.querySelector('.btn--roll'),
    btnHoldEl: document.querySelector('.btn--hold'),
};
``;
// Starting conditions
refs3.diceEl.classList.remove('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = `0`;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    refs3.playersAreaEl.forEach(item => {
        item.classList.toggle('player--active');
    });
};
refs3.btnRollEl.addEventListener('click', () => {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        refs3.diceEl.classList.remove('hidden');
        refs3.diceEl.src = `../img/dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = `${currentScore}`;
        }
        else {
            switchPlayer();
        }
    }
});
refs3.btnHoldEl.addEventListener('click', () => {
    var _a, _b;
    if (playing) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = `${scores[activePlayer]}`;
        if (scores[activePlayer] >= 10) {
            playing = false;
            (_a = document.querySelector(`.player--${activePlayer}`)) === null || _a === void 0 ? void 0 : _a.classList.add('player--winner');
            (_b = document.querySelector(`.player--${activePlayer}`)) === null || _b === void 0 ? void 0 : _b.classList.remove('player--active');
            refs3.diceEl.classList.add('hidden');
        }
        else {
            switchPlayer();
        }
    }
});
refs3.btnNewEl.addEventListener('click', () => {
    refs3.diceEl.classList.remove('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores[0] = 0;
    scores[1] = 0;
    refs3.current0El.textContent = `${currentScore}`;
    refs3.current1El.textContent = `${currentScore}`;
    refs3.score0El.textContent = `${currentScore}`;
    refs3.score1El.textContent = `${currentScore}`;
    refs3.playersAreaEl.forEach(item => {
        item.classList.remove('player--winner');
        item.classList.remove('player--active');
        if (item.classList.contains('player--0')) {
            item.classList.add('player--active');
        }
    });
});
