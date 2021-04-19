import saucerSrc from '../assets/images/flyingSaucer-petit.png';

import Mobile from './mobile';

const DELTA_X = -3;
const DELTA_Y = 0;
const IMAGE = new Image();
IMAGE.src = saucerSrc;

export default class Saucer extends Mobile {
    constructor(x, y) {
        super(x, y, DELTA_X, DELTA_Y, saucerSrc);
    }

    static get HEIGHT() {
        return IMAGE.height;
    }

    move(canvas) {
        if (this.x + this.deltaX < 0) {
            return true;
        }
        super.move(canvas);
        return false;
    }
}
