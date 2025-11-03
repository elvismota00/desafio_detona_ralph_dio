const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time_left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
    },
}

function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNamber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNamber];
    randomSquare.classList.add("enemy");

}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {});
};

function initialize() {
    moveEnemy();
};

initialize();