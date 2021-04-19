import Starship from './starship';
import Saucer from './saucer';

const alea = n => Math.floor(Math.random() * n);

const START_X = 40;

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.starship = new Starship(START_X, this.canvas.height / 2);
        this.saucers = [];
        this.score = 0;
        this.raf = null;
    }

    addSaucer() {
        const saucer = new Saucer(this.canvas.width, alea(this.canvas.height - Saucer.HEIGHT));
        this.saucers.push(saucer);
    }

    moveAndDraw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.starship.move(this.canvas);
        this.saucers = this.saucers.filter(saucer => !saucer.move(this.canvas));
        this.starship.draw(this.context);
        this.saucers.forEach(saucer => saucer.draw(this.context));
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
        default:
            return;
        }
        event.preventDefault();
    }
}
