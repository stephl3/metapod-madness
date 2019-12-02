class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.metapods = this.game.addMetapods();

    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
  }

  // bindKeyHandlers () {
  //   const metapods = this.metapods;

  //   key("space", function () { metapods[0].harden() });
  // }

  // load() {}
  
  start() {
    // this.bindKeyHandlers();
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