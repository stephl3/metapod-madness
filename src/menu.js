class Menu {
  constructor(game) {
    this.game = game;
    this.selectFX = new Audio('assets/sounds/select.wav');
    this.menu = document.getElementById('menu');
    this.startButton = document.getElementById('start');
    this.howToButton = document.getElementById('how-to');
    this.instructions = document.getElementById('instructions');
    this.keyBindingsButton = document.getElementById('key-bindings');
    
  }

  setMenuButtons() {

  }

  openMenu() {
    this.menu.className = '';
  }

  closeMenu() {
    this.menu.className = 'close';
  }

  openHowTo(e) {
    
  }
}

export default Menu;

const schmenu = {
  setMenuButtons(game) {

    const aboutButton = document.getElementById('how-to-play-button');
    const closeAboutButton = document.getElementById('close-how-to-play');
    const menuButton = document.getElementById('menu-button');
    const submitHighScoreButton = document.getElementById('submit-highscore');
    const muteButton = document.getElementById('mute-button');
    const selectSound = new Audio('./assets/sounds/select.wav');

    const openAbout = (e) => {
      const aboutScreen = document.getElementsByClassName('how-to-play-container')[0];
      if (aboutScreen.className.indexOf('how-to-play-open') !== -1) {
        aboutScreen.className = 'how-to-play-container group';
        playSelectSound();
        game.unpause();
      } else {
        aboutScreen.className += ' how-to-play-open';
        playSelectSound();
        game.pause();
      }
    };

    const playSelectSound = () => {
      selectSound.pause();
      selectSound.currentTime = 0;
      selectSound.play();
    };

    const backToMenu = () => {
      game.over = true;
      // game.gamePlaying = false;
      game.backgroundMusic.pause();
      game.backgroundMusic.currentTime = 0;
      playSelectSound();
      game.openMenu();
      document.getElementById('game-over-menu').className += ' close';
      openMainMenu();
      game.ctx.clearRect(0, 0, 800, 300);
      document.getElementById('game-canvas').focus();
    };


    const muteToggle = (e) => {
      if (game.toggleMute()) {
        muteButton.className = 'toggled';
      } else {
        muteButton.className = '';
      }
      playSelectSound();
      document.getElementById('game-canvas').focus();
    };

    game.gameCanvas.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && game.gamePlaying) {
        e.preventDefault();
        backToMenu();
      }
    });
    muteButton.addEventListener('click', muteToggle);
    menuButton.addEventListener('click', backToMenu);
    aboutButton.addEventListener('click', openAbout);
    closeAboutButton.addEventListener('click', openAbout);
    submitHighScoreButton.addEventListener('click', submitScore);
    hardButton.addEventListener('click', (e) => {
      closeMainMenu();
      playSelectSound();
      setTimeout(() => game.start('hard'), 200);
    }
    );
    mediumButton.addEventListener('click', (e) => {
      closeMainMenu();
      playSelectSound();
      setTimeout(() => game.start('medium'), 200);
    }
    );
    easyButton.addEventListener('click', (e) => {
      closeMainMenu();
      playSelectSound();
      setTimeout(() => game.start('easy'), 200);
    }
    );
  }
};
