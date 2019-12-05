import Metapod from './metapod';
import Boulder from './boulder';
import Berry from './berry';
import Shadow from './shadow';
// import Util from './util';


class Game {
  constructor() {
    this.dimensionX = 800;
    this.dimensionY = 600;
    this.fps = 32;

    this.metapods = [];
    this.metapodsHardened = [false, false, false, false];
    this.boulders = [];
    this.berries = [];
    this.shadows = [];


    window.setInterval(() => {
      this.addBoulders();
      window.setTimeout(() => {
        this.addBoulders();
        window.setTimeout(() => {
          this.addBoulders();
        }, 1000)
      }, 2000);
    }, 5000);

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
  //   const metapodImgs = ['./images/metapod.png', './images/shiny_metapod.png'];
  //   const index = Math.round(Math.random());
  //   return metapodImgs[index];
  // }

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
        img: 'images/metapod/metapod.png',
        startPosX: (metapodPositions[i][0]),
        pos: metapodPositions[i],
        vel: [0.15, 0],
        width: 130,
        height: 130,
        game: this
      }));
    };
  }

  addBoulders() {
    const boulderPositions = [
      [this.dimensionX * (15 / 100), this.dimensionY * (2 / 5)],
      [this.dimensionX * (35 / 100), this.dimensionY * (2 / 5)],
      [this.dimensionX * (55 / 100), this.dimensionY * (2 / 5)],
      [this.dimensionX * (75 / 100), this.dimensionY * (2 / 5)],
    ];

    for (let i = 0; i < 4; i++) {
      if (this.metapods[i].HP > 0) {
        this.add(new Boulder({
          idx: i,
          img: 'images/boulder/boulder1.png',
          pos: boulderPositions[i],
          vel: [0, -12],
          width: 80,
          height: 80,
          game: this
        }))
      }
    }

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
      if (this.metapods[i].HP > 0) {
        this.add(new Berry({
          idx: i,
          img: 'images/berry/gold_razz_berry.png',
          pos: berryPositions[i],
          vel: [0, -12],
          width: 80,
          height: 80,
          game: this
        }))
      }
    }

    this.addShadows();
  }

  addShadows() {
    const shadowPositions = [
      [this.dimensionX * (2 / 8) - 40, this.dimensionY * (.52)],
      [this.dimensionX * (4 / 8) - 80, this.dimensionY * (.52)],
      [this.dimensionX * (4 / 8) + 80, this.dimensionY * (.52)],
      [this.dimensionX * (6 / 8) + 40, this.dimensionY * (.52)],
    ];
    const shadowVelocities = [
      [-0.45, 1.4],
      [-0.18, 1.43],
      [0.18, 1.43],
      [0.45, 1.4],
    ]

    for (let i = 0; i < 4; i++) {
      if (this.metapods[i].HP > 0) {
        this.add(new Shadow({
          idx: i,
          img: null,
          pos: shadowPositions[i],
          vel: shadowVelocities[i],
          width: 50,
          height: 10,
          game: this
        }))
      }
    }

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
  }

};

export default Game;