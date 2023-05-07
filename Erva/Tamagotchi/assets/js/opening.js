function createLocalStorage() {
    localStorage.setItem("start_timestamp", Date.now());
    localStorage.setItem("makan", 100);
    localStorage.setItem("tidur", 100);
    localStorage.setItem("game", 100);
    localStorage.setItem("obat", 100);
    localStorage.setItem("lifetime", 0);
    localStorage.setItem("level", "kids");
    localStorage.setItem("platformer", "lpg");
    localStorage.setItem("sakit", 0);
    localStorage.setItem("penyembuhan", 0);
    localStorage.setItem("action", "");
    localStorage.setItem("malam", 0);
}
function startNewGame() {
    createLocalStorage();
    window.location.href="index.html";
}
function gameResume() {
    // get localStorage if exists
    const start_timestamp = localStorage.getItem("start_timestamp");
    if (start_timestamp !== null) {
        // show button resume game
        const buttonResume = document.querySelector("#button-resume-game");
        buttonResume.style.display = "block";
    }
}
function startOpening() {
    // check if game is resume
    gameResume();

    const clickStartGame = document.querySelector("#start-new-game");
    clickStartGame.addEventListener("click", startNewGame);
}

startOpening();