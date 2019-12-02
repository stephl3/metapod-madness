import Util from './util';

class MovingObject {
  constructor(options) {
    this.idx = options.idx;
    this.img = options.img;
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.game = options.game;

    this.collideWith.bind(this);
  }

  draw(ctx) {
    const objectImg = new Image();
    objectImg.src = this.img;
    ctx.drawImage(objectImg,
      this.pos[0], this.pos[1],
      this.width, this.height
    );
  }

  collideWith(metapod) {
    const centerDist = Util.dist(this.pos, metapod.pos);
    return centerDist < (this.width / 2 + metapod.width / 2);
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