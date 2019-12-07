import Util from './util';
import MovingObject from './moving_object';

class Metapod extends MovingObject {
  constructor(options) {
    super(options);
    this.startPosX = options.startPosX;
    this.HP = 200;
    this.initImg = options.img;
    this.initVel = options.vel;
    this.faintFX = new Audio('assets/sounds/faint.wav');
    this.hardened = false;
    this.smashed = false;
    this.fainted = false;
  }

  faint() {
    if (this.HP < 1) {
      this.hardened = false;
      this.harden = () => null;
      this.vel = [0, 0];

      window.setTimeout(() => {
        this.img.src = 'assets/images/null.png';
        window.setTimeout(() => {
          this.img.src = 'assets/images/metapod/metapod.png';
          window.setTimeout(() => {
            this.img.src = 'assets/images/null.png';
            window.setTimeout(() => {
              this.img.src = 'assets/images/metapod/metapod.png';
              window.setTimeout(() => {
                this.fainted = true;
                this.img.src = 'assets/images/metapod/faint_metapod.png';
              }, 500);
            }, 400);
          }, 250);
        }, 150);
      }, 0);
    }
    if (this.fainted) {
      this.img.src = 'assets/images/metapod/faint_metapod.png';
    }
  }

  harden() {
    if (this.game.metapodsHardened[this.idx]) {
      this.img.src = 'assets/images/metapod/harden_metapod.png';
      this.hardened = true;
      this.vel = [0, 0];
      this.HP -= 0.2;
    } else if (this.smashed) {
      return;
    } else {
      this.img.src = this.initImg;
      this.hardened = false;
      this.vel = this.initVel;
    }
  }

  smash() {
    // debugger;
    this.smashed = true;
    window.setTimeout(() => {
      this.smashed = false;
    }, 450);

    if (this.HP > 30) {
      this.HP -= 30;
    } else {
      this.HP = 0;
    }

    window.setTimeout(() => {
      this.img.src = 'assets/images/metapod/hurt_metapod2.png';
      window.setTimeout(() => {
        this.img.src = 'assets/images/metapod/hurt_metapod4.png';
        window.setTimeout(() => {
          this.img.src = 'assets/images/metapod/hurt_metapod2.png';
          window.setTimeout(() => {
            this.img.src = 'assets/images/metapod/metapod.png'
            window.setTimeout(() => {
              this.img.src = 'assets/images/metapod/hurt_metapod2.png'
              window.setTimeout(() => {
                this.img.src = 'assets/images/metapod/hurt_metapod4.png'
                window.setTimeout(() => {
                  this.img.src = 'assets/images/metapod/hurt_metapod2.png'
                  window.setTimeout(() => {
                    this.img.src = 'assets/images/metapod/metapod.png'
                  }, 440);
                }, 400);
              }, 320);
            }, 280);
          }, 200);
        }, 160);
      }, 80);
    }, 40);
  }

  draw(ctx) {
    this.harden();
    this.faint();
    this.drawShadow(ctx);
    this.drawHPBar(ctx);
    this.drawHP(ctx);
    super.draw(ctx);
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
    if (this.HP < 30) {
      ctx.fillStyle = "#ff0000";
    } else if (this.HP < 100) {
      ctx.fillStyle = "#ffd700";
    } else {
      ctx.fillStyle = "#00ff00";
    }
    ctx.fillRect(this.startPosX, this.pos[1] + this.height * 1.2, this.HP * (13 / 20), 10); 
  }

  move(timeDelta) {
    super.move(timeDelta);
    if (this.pos[0] > this.startPosX + 3 || this.pos[0] < this.startPosX - 3) {
      this.vel[0] *= -1;
    }
  }
  
};

export default Metapod;