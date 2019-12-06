import Game from './game.js';
import GameView from './game_view.js';
// import '../stylesheets/index.css';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("viewport");
  canvas.width = 800;
  canvas.height = 600;

  const ctx = canvas.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx);

  document.querySelector('button').addEventListener("click", () => {
    gameView.start();
  })
});