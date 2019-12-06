import Util from './util';

class MovingObject {
  constructor(options) {
    this.idx = options.idx;
    this.img = new Image();
    this.img.src = options.img;
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.game = options.game;

    this.isCollidedWith.bind(this);
    this.remove = this.remove.bind(this);
  }

  draw(ctx) {
    // this.drawHitBox(ctx);
    ctx.drawImage(this.img,
      this.pos[0], this.pos[1],
      this.width, this.height
    );
  }

  drawHitBox(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeRect(
      this.pos[0], this.pos[1],
      this.width, this.height
    );
  }

  isCollidedWith(otherObject) {
    const pos1 = this.pos;
    const pos2 = otherObject.pos;
    const centerDist = Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    )
    const distance = (this.width / 2 + otherObject.width / 2);
    return (centerDist < distance + 5 && centerDist > distance - 5);
  }

  move(timeDelta) {
    // timeDelta is number of milliseconds since last move
    // if the computer is busy the time delta will be larger
    // in this case the MovingObject should move farther in this frame
    // velocity of object is how far it should move in 1/60th of a second
    const normalFrameTimeDelta = 1000 / 60;
    const velocityScale = timeDelta / normalFrameTimeDelta;
    const offsetX = this.vel[0] * velocityScale;
    const offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    // if (this.collideWith(metapod)) {
    //   this.remove();
    // }
  }

  remove() {
    this.game.remove(this);
  }
};

export default MovingObject;