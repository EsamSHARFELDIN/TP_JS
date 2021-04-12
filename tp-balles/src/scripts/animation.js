import Ball from './ball';

const alea = n => Math.floor(Math.random() * n);

/* TYPE Animation */
export default class Animation {

    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.balls = [];
        this.raf = null;
    }

    addBall() {
        const x = alea(this.canvas.width - Ball.BALL_WIDTH);
        const y = alea(this.canvas.height - Ball.BALL_WIDTH);
        let deltaX = alea(11) - 5;
        let deltaY = alea(11) - 5;
        while (deltaX === 0 && deltaY === 0) {
            deltaX = alea(11) - 5;
            deltaY = alea(11) - 5;
        }
        this.balls.push(new Ball(x, y, deltaX, deltaY));
    }

    moveAndDraw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.balls.forEach(ball => {
            ball.move(this.canvas);
            ball.draw(this.context);
        });
        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    /* start the animation or stop it if previously running */
    startAndStop() {
        if (this.raf === null) { //the animation is stopped
            this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
        }
        else { //the animation is running
            window.cancelAnimationFrame(this.raf);
            this.raf = null;
        }
    }
}
