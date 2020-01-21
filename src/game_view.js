import Menu from './menu';
import Game from './game';

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.menu = new Menu(this);
    this.paused = false;
    this.state = "menu";
    this.gameOver = true;
    this.keys = [1, 5, 9, 'Backspace']; // maps to 1 5 9 del
    this.muteMusic = true;
    this.setSounds();

    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.start = this.start.bind(this);
    // this.pause = this.pause.bind(this);
    this.end = this.end.bind(this);
    this.quit = this.quit.bind(this);
    this.animate = this.animate.bind(this);
    
    this.menu.bindMenuButtons();
    this.menu.openMenu();
  }

  bindKeyHandlers () {
    const keys = this.keys;
    
    const keyDownHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        debugger
        if (e.key == keys[i]) {
          this.game.metapodsHardened[i] = true;
        };
      };
    };
    
    const keyUpHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.key == keys[i]) {
          this.game.metapodsHardened[i] = false;
        };
      };
    };

    document.addEventListener("keydown", keyDownHandler, false)
    document.addEventListener("keyup", keyUpHandler, false)
  };

  setSounds() {
    this.menuMusic = new Audio('assets/sounds/menu_music.mp3');
    this.menuMusic.loop = true;
    // this.menuMusic.muted = true;
    this.gameMusic = new Audio('assets/sounds/game_music.mp3');
    // this.gameMusic.muted = true;
    this.victoryMusic = new Audio('assets/sounds/victory_music.mp3');
    this.victoryMusic.loop = true;
    // this.victoryMusic.muted = true;
  }

  toggleMute() {
    if (this.muteMusic) {
      this.muteMusic = false;
      switch (this.state) {
        case "menu":
          this.menuMusic.play();
          break;
        case "game":
          this.gameMusic.muted = false;
          this.gameMusic.play();
          break;
        case "victory":
          this.victoryMusic.play();
          break;
        default:
          break;
      };
    } else {
      this.muteMusic = true;
      this.gameMusic.pause();
      this.menuMusic.pause();
      this.victoryMusic.pause();
    };
    return this.muteMusic;
  }
  
  start() {
    this.bindKeyHandlers();
    this.state = "game";
    this.winner = null;
    this.paused = false;
    this.gameOver = false;
    this.game.over = false;
    if (!this.muteMusic) {
      this.menuMusic.pause();
      this.victoryMusic.pause();
      this.victoryMusic.currentTime = 0;
    } else {
      this.gameMusic.muted = true;
    }
    this.gameMusic.play();
    this.game.addMetapods();
    this.game.start();
    this.lastTime = 0;

    // start animation
    requestAnimationFrame(this.animate);
  }

  // pause() {
  //   this.paused = !this.paused;
  //   if (!this.muteMusic) {
  //     this.gameMusic.volume = 0.2;
  //   } else {
  //     this.gameMusic.volume = 1.0;
  //   }
  // }

  end() {
    this.state = "victory";
    this.paused = true;
    this.gameOver = true;
    this.winner = this.game.winner.idx + 1;
    this.game = new Game();
    this.ctx.clearRect(0, 0, 800, 600);

    const victoryMenu = document.getElementById("victory");
    victoryMenu.classList.remove('close');

    const victorious = victoryMenu.lastElementChild;
    victorious.innerHTML = `<div>P${this.winner}</div>`;
    victorious.classList.add(`p${this.winner}`);

    if (!this.muteMusic) {
      this.gameMusic.pause();
      this.gameMusic.currentTime = 0;
      this.victoryMusic.play();
    }
  }

  quit() {
    this.state = "menu";
    this.gameOver = true;
    
    // this.game.over  = false;
    // this.game.reset();

    if (!this.muteMusic) {
      this.victoryMusic.pause();
      this.menuMusic.play();
    }
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
    }
    if (this.gameOver) {
      setTimeout(() => {
        this.paused = true;
        this.end();
      }, 2000);
    }
  }
};

export default GameView;