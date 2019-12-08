import Game from './game.js';
import GameView from './game_view.js';
// import '../stylesheets/index.css';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");

  const ctx = canvas.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx);
  const menu = document.getElementById("menu");

  gameView.playMusic();
  menu.addEventListener("click", () => {
    menu.classList.remove("uber");
    gameView.start();
  })
});