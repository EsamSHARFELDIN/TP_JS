
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

    static BALL_WIDTH = 48;

    draw(context) {
	alert('vous devez coder la méthode draw() de Ball');
    }


    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
  	const ballImg = new Image();
	ballImg.width = Ball.BALL_WIDTH;
	ballImg.src = ballImgSrc;
	return ballImg;
    }

}
