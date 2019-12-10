import Menu from './menu';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.menu = new Menu(this.game);
    this.paused = true;
    this.gameOver = true;
    this.keys = [192, 52, 56, 8];
    this.muteMusic = false;
    this.setSounds();

    this.metapods = this.game.addMetapods();

    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);

    
    this.menu.setMenuButtons();
  }

  bindKeyHandlers () {
    const keys = this.keys;
    
    const keyDownHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.keyCode == keys[i]) {
          this.game.metapodsHardened[i] = true;
        };
      };
    };
    
    const keyUpHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.keyCode == keys[i]) {
          this.game.metapodsHardened[i] = false;
        };
      };
    };

    document.addEventListener("keydown", keyDownHandler, false)
    document.addEventListener("keyup", keyUpHandler, false)
  };

  setSounds() {
    this.audioCtx = new AudioContext();
    this.menuMusic = new Audio('assets/sounds/menu_music.mp3');
    this.menuMusic.loop = true;
    // this.menuMusic.play();
    this.gameMusic = new Audio('assets/sounds/game_music.mp3');
    // this.gameOverSound = new Audio('./assets/sounds/sad.wav');
    this.victoryMusic = new Audio('assets/sounds/victory_music.mp3');
  }

  playMusic() {
    this.audioCtx.resume();
  }
  
  start() {
    this.paused = false;
    this.gameOver = false;
    this.game.over = false;
    this.menuMusic.pause();
    this.gameMusic.play();
    this.bindKeyHandlers();
    this.lastTime = 0;
    
    setTimeout(() => {
      this.game.addBoulders();
    }, 3000);
    setInterval(() => {
      this.game.addBoulders();
      setTimeout(() => {
        this.game.addBoulders();
        setTimeout(() => {
          this.game.addBoulders();
        }, 2000)
      }, 1000);
    }, 5000);
    // start animation
    requestAnimationFrame(this.animate);
  }

  pause() {
    this.paused = !this.paused;
    if (this.gameMusic.volume > 0.3) {
      this.gameMusic.volume = 0.3;
    } else {
      this.gameMusic.volume = 1.0;
    }
  }

  end() {
    const victoryMenu = document.getElementById("victory");
    victoryMenu.style.display = "initial";
    this.gameMusic.pause();
    this.victoryMusic.play();
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    this.gameOver = this.game.over;
    // every call to animate requests causes another call to animate
    if (!this.paused) {
      requestAnimationFrame(this.animate);
      if (this.gameOver) {
        setTimeout(() => {
          this.end();
          this.animate = () => null;
        }, 3000);
      }
    }
  }
};

export default GameView;