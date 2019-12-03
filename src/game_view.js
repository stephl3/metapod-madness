class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.metapods = this.game.addMetapods();
    this.metapodsHardened = [false, false, false, false];

    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
  }

  bindKeyHandlers () {
    const keys = ["1", "4", "7", "0"];
    
    const keyDownHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.key === keys[i]) {
          this.metapodsHardened[i] = true;
        };
      };
    };
    
    const keyUpHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.key === keys[i]) {
          this.metapodsHardened[i] = false;
        };
      };
    };
    document.addEventListener("keydown", keyDownHandler, false)
    document.addEventListener("keyup", keyUpHandler, false)
  };

// function keyDownHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//     rightPressed = true;
//   }
//   else if (e.key == "Left" || e.key == "ArrowLeft") {
//     leftPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key == "Right" || e.key == "ArrowRight") {
//     rightPressed = false;
//   }
//   else if (e.key == "Left" || e.key == "ArrowLeft") {
//     leftPressed = false;
//   }
// }

  // load() {}
  
  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
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