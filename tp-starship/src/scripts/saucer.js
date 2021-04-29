import saucerSrc from '../assets/images/flyingSaucer-petit.png';

import Mobile from './mobile';

const DELTA_X = -3;
const DELTA_Y = 0;
const DELTA_X_FALL = 0;
const DELTA_Y_FALL = 3;

const IMAGE = new Image();
IMAGE.src = saucerSrc;

export default class Saucer extends Mobile {
  constructor(x, y) {
    super(x, y, DELTA_X, DELTA_Y, saucerSrc);
    this._isHit = false;
  }

  static get HEIGHT() {
    return IMAGE.height;
  }

  get isHit() {
    return this._isHit;
  }

  set isHit(b) {
    this._isHit = b;
  }

  isMissed() {
    return this.x < 0;
  }

  isDestroyed(canvas) {
    return this.y > canvas.height - this.height;
  }
  
  /* Make this saucer fall */
  falls() {
    this.deltaX = DELTA_X_FALL;
    this.deltaY = DELTA_Y_FALL;
  }
}