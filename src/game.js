import Metapod from './metapod';
import Boulder from './boulder';
// import Berry from './berry';
// import Util from './util';


class Game {
  constructor() {
    this.dimensionX = 800;
    this.dimensionY = 600;
    this.fps = 32;

    this.metapods = [];
    this.boulders = [];
    // this.berries = [];


    this.addBoulders();

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
    } else {
      throw new Error("WOT DIS");
    }
  }

  _randomMetapodImg() {
    const metapodImgs = ['./images/metapod.png', './images/shiny_metapod.png'];
    const index = Math.round(Math.random());
    return metapodImgs[index];
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
        img: this._randomMetapodImg(),
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
      [this.dimensionX * (3 / 16), this.dimensionY * (2 / 5)],
      [this.dimensionX * (6 / 16), this.dimensionY * (2 / 5)],
      [this.dimensionX * (9 / 16), this.dimensionY * (2 / 5)],
      [this.dimensionX * (12 / 16), this.dimensionY * (2 / 5)],
    ];

    for (let i = 0; i < 4; i++) {
      this.add(new Boulder({
        idx: i,
        img: './images/boulder1.png',
        pos: boulderPositions[i],
        vel: [0, -12],
        width: 80,
        height: 80,
        game: this
      }))
    }

    window.setTimeout(() => this.addBoulders(), 3000);
  }

  allObjects() {
    return [].concat(this.metapods, this.boulders);
    // add berries later
  }

  checkCollisions() {
    const movingObjects = this.allObjects().slice(4);
    for (let i = 0; i < 4; i++) {
      let metapod = this.metapods[i];
      for (let j = 0; j < movingObjects.length; j++) {
        let movingObj = movingObjects[j];

        if (movingObj.collideWith(metapod)) {
          return;
        }
      }
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.dimensionX, this.dimensionY);

    this.allObjects().forEach((obj) => {
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
      this.boulders.splice(this.metapods.indexOf(object), 1);
    } else if (object instanceof Berry) {
      this.berries.splice(this.berries.indexOf(object), 1);
    } else {
      throw new Error("WOT DIS");
    }
  }

  step(delta) {
    this.moveObjects(delta);
    // this.checkCollisions();
  }

};

export default Game;


// FOR BERRIES AND BOULDERS
// Game.prototype.addAsteroids = function addAsteroids() {
//   for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
//     this.add(new Asteroid({ game: this }));
//   }
// };

// Game.prototype.checkCollisions = function checkCollisions() {
  //   const allObjects = this.allObjects();
  //   for (let i = 0; i < allObjects.length; i++) {
    //     for (let j = 0; j < allObjects.length; j++) {
      //       const obj1 = allObjects[i];
      //       const obj2 = allObjects[j];
      
      //       if (obj1.isCollidedWith(obj2)) {
        //         const collision = obj1.collideWith(obj2);
        //         if (collision) return;
        //       }
        //     }
        //   }
        // };
        
// Game.prototype.wrap = function wrap(pos) {
//   return [
//     Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
//   ];
// };