import Game from "./game";
import GameView from "./game_view";

class Menu {
  constructor(gameView) {
    this.gameView = gameView;
    this.selectFX = new Audio('assets/sounds/select.wav');
    this.closeFX = new Audio('assets/sounds/close.wav');

    this.soundButton = document.getElementById('sound');
    // this.pauseButton = document.getElementById('pause');
    
    this.menu = document.getElementById('menu');
    this.startButton = document.getElementById('start');
    this.howToButton = document.getElementById('how-to');
    this.instructionsBg = document.getElementById('instructions-bg');
    this.instructions = document.getElementById('instructions');
    this.closeButton = document.getElementById('close-button');
    this.keysArray = Array.from(document.getElementsByClassName('key'));
    // this.keyBindingsButton = document.getElementById('key-bindings');
    
    this.victoryMenu = document.getElementById("victory");
    this.victorious = document.getElementById("victorious");
    this.restartButton = document.getElementById('restart');
    this.quitButton = document.getElementById('quit');

    this.toggleSound = this.toggleSound.bind(this);
    // this.pauseGame = this.pauseGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.openHowTo = this.openHowTo.bind(this);
    this.closeHowTo = this.closeHowTo.bind(this);
    this.highlightKeys = this.highlightKeys.bind(this);
    this.unhighlightKeys = this.unhighlightKeys.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.quitGame = this.quitGame.bind(this);
  }

  bindMenuButtons() {
    this.soundButton.addEventListener('click', this.toggleSound);
    // this.pauseButton.addEventListener('click', this.pauseGame);
    this.startButton.addEventListener('click', this.startGame);
    this.howToButton.addEventListener('click', this.openHowTo);
    this.closeButton.addEventListener('click', this.closeHowTo);
    this.restartButton.addEventListener('click', this.restartGame);
    this.quitButton.addEventListener('click', this.quitGame);
  }

  toggleSound() {
    this.selectFX.play();
    if (this.gameView.toggleMute()) {
      this.soundButton.innerHTML = "<i class='fas fa-volume-mute' id='sound-icon'></i>"
    } else {
      this.soundButton.innerHTML = "<i class='fas fa-volume-up' id='sound-icon'></i>"
    }
  }

  // pauseGame() {
  //   this.gameView.pause();
  // }

  openMenu() {
    this.menu.classList.remove('close');
    this.instructions.classList.add('close');
    this.instructionsBg.classList.remove('modal-background');
  }

  closeMenu() {
    this.menu.classList.add('close');
  }

  closeVictoryMenu() {
    this.victorious.className = '';
    this.victoryMenu.classList.add('close');
  }

  startGame() {
    this.selectFX.play();
    this.closeMenu();
    this.gameView.start();
  }

  openHowTo() {
    this.selectFX.play();
    this.instructionsBg.classList.add('modal-background');
    this.instructionsBg.addEventListener('click', this.closeHowTo);
    this.instructions.classList.remove('close')
    this.instructions.addEventListener('click', (e) => e.stopPropagation());
    this.highlightKeys();
  }
  
  closeHowTo() {
    this.closeFX.play();
    this.instructionsBg.classList.remove('modal-background');
    this.instructionsBg.removeEventListener('click', this.closeHowTo);
    this.instructions.classList.add('close');
    this.unhighlightKeys();
  }

  highlightKeys() {
    this.keysArray.forEach(key => key.classList.add('highlight'));
  }

  unhighlightKeys() {
    this.keysArray.forEach(key => key.classList.remove('highlight'));
  }

  restartGame() {
    this.quitGame();
    this.closeVictoryMenu();
    setTimeout(() => this.startGame(), 200);
  }

  quitGame() {
    this.selectFX.play();
    this.closeVictoryMenu();
    
    this.openMenu();
    this.gameView.quit();
  }
}

export default Menu;