import Util from './util';
import MovingObject from './moving_object';

class Shadow extends MovingObject {
  constructor(options) {
    super(options);
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.fillStyle = "rgba(41, 41, 41, 0.7)";
    // ctx.ellipse(
    //   this.pos[0], this.pos[1],
    //   this.width, this.height,
    //   0, Math.PI * 2, false
    // );
    // ctx.fill();
    super.draw(ctx);
  }

  move(timeDelta) {
    if (this.pos[1] > 500) {
      this.remove(this);
    };
    super.move(timeDelta);
  }
};

export default Shadow;