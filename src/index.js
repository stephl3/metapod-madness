import Game from './game.js';
import GameView from './game_view.js';
// import '../stylesheets/index.css';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  canvas.width = 800;
  canvas.height = 600;

  const ctx = canvas.getContext("2d");
  const game = new Game();
  const gameView = new GameView(game, ctx);

  // gameView.playMusic();

  // document.body.onkeyup = function(e) {
  //   e.preventDefault();
  //   if (e.keyCode === 32) {
  //     menu.style.display = "none";
  //     gameView.start();
  //     gameView.pause();
  //   }
  // }
});