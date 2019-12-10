const closeMainMenu = () => {
  const mainMenu = document.getElementsByClassName('main-menu')[0];
  mainMenu.className = 'main-menu close';
};

const openMainMenu = () => {
  const mainMenu = document.getElementsByClassName('main-menu')[0];
  mainMenu.className = 'main-menu';
};


const Menu = {
  setMenuButtons(game) {
    const easyButton = document.getElementById('easy-button');
    const mediumButton = document.getElementById('medium-button');
    const hardButton = document.getElementById('hard-button');
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

    const submitScore = (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('name-input');
      game.setScore(nameInput.value);
      nameInput.value = '';
      game.highScoreInput.className += ' close';
      playSelectSound();
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
  },
  closeMainMenu: closeMainMenu,
  openMainMenu: openMainMenu,
};
