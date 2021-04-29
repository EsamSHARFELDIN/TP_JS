import Starship from './starship';
import Saucer from './saucer';

const alea = n => Math.floor(Math.random() * n);

const START_X = 40;
const HIT_SCORE = 200;
const MISS_SCORE = -1000;
const WAVE_DELAY = 750;

export default class Game {
  constructor(canvas, scoreArea) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.starship = new Starship(START_X, this.canvas.height / 2);
    this.saucers = [];
    this.shoots = [];
    this.score = 0;
    this.scoreArea = scoreArea;
    this.raf = null;
    this.infiniteWaveOn = false;
    this.waveInterval = null;
  }

  updateScoreView() {
    this.scoreArea.textContent = this.score;
  }

  addSaucer() {
    const saucer = new Saucer(this.canvas.width, alea(this.canvas.height - Saucer.HEIGHT));
    this.saucers.push(saucer);
  }

  startAndStopInfiniteWave() {
    if (this.infiniteWaveOn) {
      clearInterval(this.waveInterval);
      this.infiniteWaveOn = false;
    }
    else {
      this.waveInterval = setInterval(() => {
        if (Math.random() < 0.5)
          this.addSaucer();
      },
      WAVE_DELAY);
      this.infiniteWaveOn = true;
    }
  }

  addShoot() {
    const shoot = this.starship.fire();
    if (shoot) {
      this.shoots.push(shoot);
    }
  }

  moveAndDraw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.shoots = this.shoots.filter(shoot => {
      const hitSaucer = shoot.lookForCollisions(this.saucers.filter(saucer => !saucer.isHit));
      if (hitSaucer) {
        this.score += HIT_SCORE;
        hitSaucer.isHit = true;
        hitSaucer.falls();
        return false;
      }
      return true;
    });

    this.shoots = this.shoots.filter(shoot => {
      shoot.move(this.canvas);
      return !shoot.isOut(this.canvas);
    });
    this.starship.move(this.canvas);
    this.saucers = this.saucers.filter(saucer => {
      saucer.move(this.canvas);
      const missed = saucer.isMissed();
      const destroyed = saucer.isDestroyed(this.canvas);
      if (missed) {
        this.score += MISS_SCORE;
      }
      return !(missed || destroyed);
    });

    this.shoots.forEach(shoot => shoot.draw(this.context));
    this.starship.draw(this.context);
    this.saucers.forEach(saucer => saucer.draw(this.context));

    //console.log(this.shoots);
    this.updateScoreView();

    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }

  keyDownActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.starship.moveUp();
        break;
      case "ArrowDown":
      case "Down":
        this.starship.moveDown();
        break;
      case " ":
      case "Spacebar":
        this.addShoot();
        this.starship.isTriggerPulled = true;
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  keyUpActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
      case "ArrowDown":
      case "Down":
        this.starship.stopMoving();
        break;
      case " ":
      case "Spacebar":
        this.starship.isTriggerPulled = false;
        break;
      default:
        return;
    }
    event.preventDefault();
  }
}