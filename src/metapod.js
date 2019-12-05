import Util from './util';
import MovingObject from './moving_object';

class Metapod extends MovingObject {
  constructor(options) {
    super(options);
    this.startPosX = options.startPosX;
    this.HP = 200;
    this.initImg = options.img;
    this.initVel = options.vel;
    this.hardened = false;
  }

  faint() {
    if (this.HP < 1) {
      this.hardened = false;
      this.harden = () => null;
      this.vel = [0, 0];
      this.img = 'images/metapod/faint_metapod.png';
    }
  }

  harden() {
    if (this.game.metapodsHardened[this.idx]) {
      this.img = 'images/metapod/harden_metapod.png';
      this.vel = [0, 0];
      this.hardened = true;
      this.HP -= 0.2;
    } else {
      this.img = this.initImg;
      this.vel = this.initVel;
      this.hardened = false;
    }
  }

  smash() {
    if (this.HP > 30) {
      this.HP -= 30;
    } else {
      this.HP = 0;
    }
    this.img = 'images/metapod/hurt_metapod2.png';
    window.setTimeout(() => {
      this.img = 'images/metapod/hurt_metapod3.png';
      window.setTimeout(() => {
        this.img = 'images/metapod/hurt_metapod4.png';
        window.setTimeout(() => {
          this.img = 'images/metapod/hurt_metapod2.png';
          window.setTimeout(() => {
            this.img = 'images/metapod/metapod.png'
          }, 400);
        }, 300);
      }, 200);
    }, 100);

    // if (this.game.metapods[this.idx].isCollidedWith(this.game.boulders[this.idx])) {
    //   if (this.frameCount < 15) {
    //     this.img = 'images/metapod/hurt_metapod1.png';
    //   } else if (this.frameCount < 20) {
    //     this.img = 'images/metapod/hurt_metapod2.png';
    //   } else if (this.frameCount < 25) {
    //     this.img = 'images/metapod/hurt_metapod3.png';
    //   } else if (this.frameCount < 30) {
    //     this.img = 'images/metapod/hurt_metapod4.png';
    //   } else if (this.frameCount < 35) {
    //     this.img = 'images/metapod/hurt_metapod4.png';
    //   } else if (this.frameCount < 45) {
    //     this.img = 'images/metapod/hurt_metapod3.png';
    //   } else if (this.frameCount < 50) {
    //     this.img = 'images/metapod/hurt_metapod2.png';
    //   } else if (this.frameCount < 55) {
    //     this.img = 'images/metapod/hurt_metapod1.png';
    //   } else {
    //     this.img = 'images/metapod/metapod.png';
    //   }
    // } else {
    //   this.img = 'images/metapod/metapod.png';
    //   this.frameCount = 0;
    // }
    // this.frameCount += 1;
  }

  draw(ctx) {
    this.harden();
    this.faint();
    this.drawShadow(ctx);
    this.drawHPBar(ctx);
    this.drawHP(ctx);
    super.draw(ctx);
    // what happens when boulder or berry collides with?
  }

  drawShadow(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(41, 41, 41, 0.7)";
    ctx.ellipse(
      this.pos[0] + 65, this.pos[1] + this.height,
      this.width / 2, this.height / 10,
      0, Math.PI * 2, false
    );
    ctx.fill();
  }

  drawHPBar(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#00008b";
    ctx.rect(this.startPosX, this.pos[1] + this.height * 1.2, 130, 10);
    ctx.stroke();
    ctx.fill();
  }

  drawHP(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ffd700";
    ctx.fillRect(this.startPosX, this.pos[1] + this.height * 1.2, this.HP * (13 / 20), 10); 
  }

  move(timeDelta) {
    if (this.pos[0] > this.startPosX + 1.5 || this.pos[0] < this.startPosX - 1.5) {
      this.vel[0] *= -1;
    }
    super.move(timeDelta);
  }
  
};

export default Metapod;