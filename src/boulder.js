import Util from './util';
import MovingObject from './moving_object';
import Metapod from './metapod';

class Boulder extends MovingObject {
  constructor(options) {
    super(options);
    this.launchFX = new Audio('assets/sounds/launch.wav');
    this.breakFX = new Audio('assets/sounds/harden.wav');
    this.smashFX = new Audio('assets/sounds/damage.wav');
    this.launchFX.play();
  }

  draw(ctx) {
    super.draw(ctx);
  }

  drawShadow(ctx) {
    const [shadowSX, shadowSY] = this.shadowPos;
    const [shadowWidth, shadowHeight] = this.shadowSize;
    ctx.beginPath();
    ctx.fillStyle = "rgba(41, 41, 41, 0.7)";
    ctx.ellipse(
      shadowSX, shadowSY,
      shadowWidth, shadowHeight,
      0, Math.PI * 2, false
    );
    ctx.fill();
  }

  move(timeDelta) {
    if (this.pos[1] < -500) {
      this.width *= 1.5;
      this.height *= 1.5;
      this.vel = [0, 16];
      switch (this.idx) {
        case 0:
          this.pos[0] = this.game.dimensionX * (1 / 8) - 60
          break;
        case 1:
          this.pos[0] = this.game.dimensionX * (3 / 8) - 60
          break;
        case 2:
          this.pos[0] = this.game.dimensionX * (5 / 8) - 60
          break;
        case 3:
          this.pos[0] = this.game.dimensionX * (7 / 8) - 60
          break;
        default:
          break;
      }
    }
    //  else if (this.pos[1] > 700) {
    //   this.remove(this);
    // };
    super.move(timeDelta);
  }

  collideWith(metapod) {
    if (metapod.hardened) {
      this.break();
      return true;
    } else if (!(metapod.hardened)) {
      this.bounce();
      metapod.smash();
      return true;
    }
    return false;
  }

  break() {
    this.img.src = 'assets/images/boulder/boulder2.png';
    window.setTimeout(() => {
      this.vel[1] = 8;
      this.breakFX.play();
      window.setTimeout(() => {
        this.remove(this);
      }, 300);
    }, 50);
  }

  bounce() {
    this.smashFX.play();
    window.setTimeout(() => {
      this.width += 8;
      this.height += 8;
      this.pos[0] -= 4;
      this.pos[1] += 2;
      this.vel[1] = 4;
      window.setTimeout(() => {
        this.vel[1] = 8;
        window.setTimeout(() => {
          this.remove(this);
        }, 300);
      }, 100);
    }, 50);
  }
};

export default Boulder;