import Metapod from './metapod';
import Boulder from './boulder';
import Berry from './berry';
import Shadow from './shadow';
// import Util from './util';


class Game {
  constructor() {
    this.dimensionX = 800;
    this.dimensionY = 600;
    this.over = false;

    this.metapods = [];
    this.metapodsHardened = [false, false, false, false];
    this.losers = [];
    this.winner = null;
    this.boulders = [];
    this.berries = [];
    this.shadows = [];

    this.start = this.start.bind(this);
    this.addMetapods = this.addMetapods.bind(this);
    this.addBoulders = this.addBoulders.bind(this);
    this.addBerries = this.addBerries.bind(this);
    this.addShadows = this.addShadows.bind(this);
    this.draw = this.draw.bind(this);
    this.step = this.step.bind(this);
  }

  add(object) {
    if (object instanceof Metapod) {
      this.metapods.push(object);
    } else if (object instanceof Boulder) {
      this.boulders.push(object);
    } else if (object instanceof Berry) {
      this.berries.push(object);
    } else if (object instanceof Shadow) {
      this.shadows.push(object);
    } else {
      throw new Error("WOT DIS");
    }
  }

  // _randomMetapodImg() {
  //   const metapodImgs = ['./assets/images/metapod.png', './assets/images/shiny_metapod.png'];
  //   const index = Math.round(Math.random());
  //   return metapodImgs[index];
  // }

  start() {
    setTimeout(() => this.addBoulders(), 3000);
    setTimeout(() => this.addBoulders(), 6000);
    setTimeout(() => this.addBoulders(), 9000);
    setTimeout(() => this.addBoulders(), 10000);
    setTimeout(() => this.addBoulders(), 13000);
    setTimeout(() => this.addBoulders(), 14000);
    setTimeout(() => this.addBoulders(), 15000);
    setTimeout(() => this.addBoulders(), 18000);
    setTimeout(() => this.addBoulders(), 18500);
    setTimeout(() => this.addBoulders(), 19000);
    setTimeout(() => this.addBoulders(), 22000);
    setTimeout(() => this.addBoulders(), 22500);
    setTimeout(() => this.addBoulders(), 23000);
    setTimeout(() => this.addBoulders(), 23500);
    setTimeout(() => this.addBoulders(), 24000);
    setTimeout(() => this.addBoulders(), 27000);
    setTimeout(() => this.addBoulders(), 28000);
    setTimeout(() => this.addBoulders(), 29000);
    setTimeout(() => this.addBoulders(), 32000);
    setTimeout(() => this.addBoulders(), 33000);
    setTimeout(() => this.addBoulders(), 36000);
    setTimeout(() => this.addBoulders(), 36500);
    setTimeout(() => this.addBoulders(), 37000);
    setTimeout(() => this.addBoulders(), 37500);
    setTimeout(() => this.addBoulders(), 38000);
    setTimeout(() => this.addBoulders(), 41000);
    setTimeout(() => this.addBoulders(), 41500);
    setTimeout(() => this.addBoulders(), 42000);
    setTimeout(() => this.addBoulders(), 45000);
    setTimeout(() => this.addBoulders(), 46000);
    setTimeout(() => this.addBoulders(), 47000);
    setTimeout(() => this.addBoulders(), 48000);
    setTimeout(() => this.addBoulders(), 51000);
    setTimeout(() => this.addBoulders(), 51500);
    setTimeout(() => this.addBoulders(), 52000);
    setTimeout(() => this.addBoulders(), 52500);
    setTimeout(() => this.addBoulders(), 53000);
    setTimeout(() => this.addBoulders(), 56000);
  }

  addMetapods() {
    const metapodPositions = [
      [this.dimensionX * (1 / 8) - 65, this.dimensionY * (3 / 5)],
      [this.dimensionX * (3 / 8) - 65, this.dimensionY * (3 / 5)],
      [this.dimensionX * (5 / 8) - 65, this.dimensionY * (3 / 5)],
      [this.dimensionX * (7 / 8) - 65, this.dimensionY * (3 / 5)]
    ];

    for (let i = 0; i < 4; i++) {
      this.add(new Metapod({
        idx: i,
        img: 'assets/images/metapod/metapod.png',
        startPosX: (metapodPositions[i][0]),
        pos: metapodPositions[i],
        vel: [0, 0],
        width: 130,
        height: 130,
        game: this
      }));
    };
  }

  addBoulders() {
    const boulderPositions = [
      [this.dimensionX * (15 / 100) + 20, this.dimensionY * (2 / 5)],
      [this.dimensionX * (35 / 100) + 20, this.dimensionY * (2 / 5)],
      [this.dimensionX * (55 / 100) + 20, this.dimensionY * (2 / 5)],
      [this.dimensionX * (75 / 100) + 20, this.dimensionY * (2 / 5)],
    ];

    for (let i = 0; i < 4; i++) {
      if (this.metapods[i].HP > 1 && !(this.over)) {
        this.add(new Boulder({
          idx: i,
          img: 'assets/images/boulder/boulder1.png',
          pos: boulderPositions[i],
          vel: [0, -12],
          width: 80,
          height: 80,
          game: this
        }));
      };
    };

    this.addShadows();
  }

  addBerries() {
    const berryPositions = [
      [this.dimensionX * (15 / 100), this.dimensionY * (2 / 5)],
      [this.dimensionX * (35 / 100), this.dimensionY * (2 / 5)],
      [this.dimensionX * (55 / 100), this.dimensionY * (2 / 5)],
      [this.dimensionX * (75 / 100), this.dimensionY * (2 / 5)],
    ];

    for (let i = 0; i < 4; i++) {
      if (this.metapods[i].HP > 1 && !(this.over)) {
        this.add(new Berry({
          idx: i,
          img: 'assets/images/berry/gold_razz_berry.png',
          pos: berryPositions[i],
          vel: [0, -12],
          width: 80,
          height: 80,
          game: this
        }));
      };
    };

    this.addShadows();
  }

  addShadows() {
    const shadowPositions = [
      [this.dimensionX * (15 / 100), this.dimensionY * (.52)],
      [this.dimensionX * (35 / 100), this.dimensionY * (.52)],
      [this.dimensionX * (55 / 100), this.dimensionY * (.52)],
      [this.dimensionX * (75 / 100), this.dimensionY * (.52)],
    ];
    const shadowVelocities = [
      [-0.62, 1.3],
      [-0.28, 1.3],
      [0.12, 1.3],
      [0.48, 1.3],
    ];

    for (let i = 0; i < 4; i++) {
      if (this.metapods[i].HP > 1 && !(this.over)) {
        this.add(new Shadow({
          idx: i,
          img: 'assets/images/boulder/shadow.png',
          pos: shadowPositions[i],
          vel: shadowVelocities[i],
          width: 100,
          height: 50,
          game: this
        }));
      };
    };

    // window.setTimeout(() => this.addBoulders(), 1000);
  }

  allObjects() {
    return [].concat(this.metapods, this.boulders, this.berries, this.shadows);
  }

  movingObjects() {
    return [].concat(this.boulders, this.berries);
  }

  checkCollisions() {
    const metapods = this.metapods;
    const movingObjects = this.movingObjects();

    for (let i = 0; i < 4; i++) {
      let metapod = metapods[i];
      for (let j = 0; j < movingObjects.length; j++) {
        
        let movingObj = movingObjects[j];

        if (movingObj.isCollidedWith(metapod)) {
          const collision = movingObj.collideWith(metapod);
          if (collision) break;
        }
      }
    }
  }

  checkGameOver() {
    this.metapods.forEach(metapod => {
      let metapodIdx = metapod.idx;
      if (metapod.fainted && !this.losers.includes(metapodIdx)) {
        this.losers.push(metapodIdx);
      }
    });

    if (this.losers.length >= 3) {
      const winner = this.metapods.find(metapod => !metapod.fainted);
      debugger
      this.winner = (winner) ? winner.idx : this.losers[3];
      return true;
    } else {
      return false;
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.dimensionX, this.dimensionY);

    this.shadows.forEach((shadow) => {
      shadow.draw(ctx);
    })
    for (let i = 0; i < 4; i++) {
      this.metapods[i].draw(ctx);
    }
    this.movingObjects().forEach((obj) => {
      obj.draw(ctx);
    })
  }

  // MovingObject.prototype.draw = function draw(ctx) {
  //   ctx.fillStyle = this.color;

  //   ctx.beginPath();
  //   ctx.arc(
  //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  //   );
  //   ctx.fill();
  // };

  moveObjects(delta) {
    this.allObjects().forEach((obj) => {
      obj.move(delta);
    })
  }

  remove(object) {
    if (object instanceof Metapod) {
      this.metapods.splice(this.metapods.indexOf(object), 1);
    } else if (object instanceof Boulder) {
      this.boulders.splice(this.boulders.indexOf(object), 1);
    } else if (object instanceof Berry) {
      this.berries.splice(this.berries.indexOf(object), 1);
    } else if (object instanceof Shadow) {
      this.shadows.splice(this.shadows.indexOf(object), 1);
    } else {
      throw new Error("WOT DIS");
    }
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
    if (this.checkGameOver()) {
      this.loop = () => null;
      this.over = true;
    }
  }
};

export default Game;