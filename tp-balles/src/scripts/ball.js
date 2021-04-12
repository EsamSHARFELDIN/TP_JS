// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

const DELTA_X = 3;
const DELTA_Y = -2;

/* TYPE Ball */
export default class Ball {

    static BALL_WIDTH = 48;

    constructor(x, y, deltaX=DELTA_X, deltaY=DELTA_Y) {
      this.x = x;
      this.y = y;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
      this.image = this.createImage();
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y);
    }

    move(canvas) {
        const nextX = this.x + this.deltaX;
        if (nextX < 0 || nextX > canvas.width - Ball.BALL_WIDTH) {
            this.deltaX = -this.deltaX;
        }

        const nextY = this.y + this.deltaY;
        if (nextY < 0 || nextY > canvas.height - Ball.BALL_WIDTH) {
            this.deltaY = -this.deltaY;
        }

        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    collisionWith(obstacle) {
        const a1 = {x : this.x, y : this.y};
        const a2 = {x : this.x + this.image.width, y : this.y + this.image.width};
        const b1 = {x : obstacle.x, y : obstacle.y};
        const b2 = {x : obstacle.x + obstacle.width, y : obstacle.y + obstacle.height};
        const p1 = {x : Math.max(a1.x, b1.x), y : Math.max(a1.y, b1.y)};
        const p2 = {x : Math.min(a2.x, b2.x), y : Math.min(a2.y, b2.y)};
        return (p1.x <= p2.x && p1.y <= p2.y);
    }


    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
        const ballImg = new Image();
        ballImg.width = Ball.BALL_WIDTH;
        ballImg.src = ballImgSrc;
        return ballImg;
    }

}
