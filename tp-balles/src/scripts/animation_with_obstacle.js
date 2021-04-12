import Animation from './animation';
import Ball from './ball';

export default class AnimationWithObstacle extends Animation {
    constructor(canvas, obstacle) {
        super(canvas);
        this.obstacle = obstacle;
    }

    moveAndDraw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.obstacle.move(this.canvas);
        this.balls.forEach(ball => ball.move(this.canvas));
        this.balls = this.balls.filter(ball => ! ball.collisionWith(this.obstacle));
        this.balls.forEach(ball => ball.draw(this.context));
        this.obstacle.draw(this.context);
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    keyDownActionHandler(event) {
        switch (event.key) {
        case "ArrowLeft":
        case "Left":
            this.obstacle.moveLeft();
            break;
        case "ArrowRight":
        case "Right":
            this.obstacle.moveRight();
            break;
        case "ArrowUp":
        case "Up":
            this.obstacle.moveUp();
            break;
        case "ArrowDown":
        case "Down":
            this.obstacle.moveDown();
            break;
        default: return;
        }
        event.preventDefault();
    }

    keyUpActionHandler(event) {
        switch (event.key) {
        case "ArrowLeft":
        case "Left":
        case "ArrowRight":
        case "Right":
        case "ArrowUp":
        case "Up":
        case "ArrowDown":
        case "Down":
            this.obstacle.stopMoving();
            break;
        default: return;
        }
        event.preventDefault();
    }
}
