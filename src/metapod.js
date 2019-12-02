import Util from './util';
import MovingObject from './moving_object';

class Metapod extends MovingObject {
  constructor(options) {
    super(options);
    this.startPosX = options.startPosX;
    this.HP = 200;
  }

  _randomMetapodImg() {
    const metapodImgs = ['../images/metapod.png', 'images/shiny_metapod.png'];
    const index = Math.round(Math.random());
    return metapodImgs[index];
  }

  _metapodTwitch() {

  }

  draw(ctx) {
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
    if (this.pos[0] > this.startPosX + 3 || this.pos[0] < this.startPosX - 3) {
      this.vel[0] *= -1;
    }
    super.move(timeDelta);
  }
  
};

export default Metapod;