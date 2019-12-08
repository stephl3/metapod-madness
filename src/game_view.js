class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.keys = [192, 67, 77, 8];
    this.muteMusic = false;
    this.setSounds();

    this.game.addMetapods();

    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
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
    this.menuMusic.play();
    this.gameMusic = new Audio('assets/sounds/game_music.mp3');
    // this.gameOverSound = new Audio('./assets/sounds/sad.wav');
  }

  playMusic() {
    this.audioCtx.resume();
  }
  
  start() {
    this.menuMusic.pause();
    this.gameMusic.play();
    this.bindKeyHandlers();
    this.lastTime = 0;
    
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

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate);
  }
};

export default GameView;