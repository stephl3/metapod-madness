# [Metapod Madness](https://stephl3.github.io/metapod-madness)

Metapod Madness is a 4-player minigame drawing inspiration from the N64 classic, Pokemon Stadium, remastered in the form of a web application. Avoid damage from the boulders being launched at your cuddly cocoon pokemon by using its only move, Harden. However, be careful about overusing Harden since it will gradually drain your HP. Compete with your friends to see whose coordination is the fittest... last one standing wins!
<p align="center">
  <img src="https://i.pinimg.com/originals/6e/5c/3c/6e5c3cee89aeb1bfc098c133d44ddd32.gif" width="85%" />
</p>


## Technologies Used
* JavaScript
* HTML5
* CSS3

## Features
#### Animation loop
The `animate(time)` method in the `GameView` class minimizes graphic rendering lag through usage of HTML5 Canvas and recursively looping the `requestAnimationFrame` method until the game is complete.

<details>
  <summary>Click to expand code snippet</summary>
  
  ```javascript
  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    this.gameOver = this.game.over;

    if (!this.paused) {
      requestAnimationFrame(this.animate);
      if (this.gameOver) {
          this.paused = true;
          setTimeout(() => this.end(), 1000);
      };
    };
  };
  ```
</details>

#### Metapod used Harden!
<p align="center">
  <img src="https://i.pinimg.com/originals/a4/6d/82/a46d82a055421f3ec7fa5f29cd99e309.gif" width="85%" />
</p>
The keys used by each player are initialized in the `GameView` constructor function as `this.keys = ["1", "c", "m", "="];` Once the game is started, the Metapod objects are added to the `Game` logic with their Harden moves then bound to the designated keys. The menu has an informative "How to Play" modal with a mouse effect added to help users identify which key to use for their respective Metapod.   
<br><br>

<details>
  <summary>Click to expand code snippet</summary>
  
  ```javascript
  bindKeyHandlers () {
    const keys = this.keys;

    const keyDownHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.key == keys[i]) {
          this.game.metapodsHardened[i] = true;
        };
      };
    };

    const keyUpHandler = (e) => {
      for (let i = 0; i < 4; i++) {
        if (e.key == keys[i]) {
          this.game.metapodsHardened[i] = false;
        };
      };
    };

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
  };
  ```
</details>

#### 3D in 2D
Though I initially planned to utilize `three.js` for this project, using diagonal lines as diminishing scale, I was able to reconfigure my `Boulder` and `Shadow` classes to craft the illusion of depth.

With each iteration of boulders that are added to the game, the shadows follow fixed vectors that uniformly spawn below their respective boulders, traverse diagonally toward their respective Metapods, and reach their final destination as the boulders fall to collide with the Metapods.

<details>
  <summary>Click to expand code snippet</summary>

  ```javascript
  const shadowVelocities = [
    [-0.62, 1.3],
    [-0.28, 1.3],
    [0.12, 1.3],
    [0.48, 1.3],
  ];
  ```
</details>

The boulders spawn at various points closer to the vertical center of the canvas. They travel parallel to each other upwards, and upon reaching a fixed height, they grow in size and horizontally adjust to different points directly above their respective Metapod character models.

<details>
  <summary>Click to expand code snippet</summary>
  
  ```javascript
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
      };
    };

    super.move(timeDelta)
  };
  ```
</details>

#### Collision mechanics (yay math!)
<p align="center">
  <img src="https://i.pinimg.com/originals/24/1d/dd/241ddd5aedb24304c1053b2b2fdff861.gif" width="85%" />
</p>
The `MovingObject` parent class carries the basic logic for the `Metapod`, `Boulder`, and `Shadow` classes. Along with these base methods is the `isCollidedWith(otherObject)` method which tracks if there is a collision between 2 objects. I made some slight adjustments to the collision calculations using hitboxes and slow-motion video to ensure accuracy.   
<br><br>

<details>
  <summary>Click to expand code snippet</summary>
  
  ```javascript
  isCollidedWith(otherObject) {
    const pos1 = this.pos;
    const pos2 = otherObject.pos;
    const centerDist = Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
    const distance = (this.width / 2 + otherObject.width / 2);
    return (centerDist < distance + 5 && centerDist > distance - 5);
  };
  ```
</details>

#### Layering Screens
An issue that I came across with using HTML5 Canvas was layering my Canvas element with the game's menu and victory screens. To solve this, I weaved a state attribute into my `GameView` constructor function, initializing state accordingly: `this.state = "menu";` Each state is tied to different absolutely positioned z-index planes which allow for a more holistic gaming experience.

Upon clicking "Start Game" on the menu screen, `this.state = "game";` which introduces the main Canvas element displaying all the Metapods and launching boulders. Once at least 3 Metapods have fainted, `this.state = "victory";` which then transitions the game into the victory screen.
<p align="center">
  <img src="https://i.pinimg.com/originals/eb/06/1d/eb061d9413cb9023a556117f55493fc9.png" width="85%" />
</p>

## Future Patches
Some ideas that I would love to implement in time:
* Allow users to select number of AI players with varying difficulties for additional flexibility
* Additional objects being launched at the Metapods, such as berries which could provide healing
* Single-player mode with high score rankings

If you have any feedback for patches or improvement, please feel free to share!
