class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.keys = [192, 67, 77, 8];

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

  load() {
  }
  
  start() {
    this.game.addMetapods();
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start animation
    requestAnimationFrame(this.animate);
    
    window.setInterval(() => {
      this.game.addBoulders();
      window.setTimeout(() => {
        this.game.addBoulders();
        window.setTimeout(() => {
          this.game.addBoulders();
        }, 2000)
      }, 1000);
    }, 5000);
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