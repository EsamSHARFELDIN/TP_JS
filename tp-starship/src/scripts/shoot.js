import shootSrc from '../assets/images/tir.png';

import Mobile from './mobile';

const DELTA_X = 8;
const DELTA_Y = 0;

export default class Shoot extends Mobile {
  constructor(x, y) {
    super(x, y, DELTA_X, DELTA_Y, shootSrc);
  }

  collisionWith(mobile) {
    const a1 = {x : this.x, y : this.y};
    const a2 = {x : this.x + this.width, y : this.y + this.height};
    const b1 = {x : mobile.x, y : mobile.y};
    const b2 = {x : mobile.x + mobile.width, y : mobile.y + mobile.height};
    const p1 = {x : Math.max(a1.x, b1.x), y : Math.max(a1.y, b1.y)};
    const p2 = {x : Math.min(a2.x, b2.x), y : Math.min(a2.y, b2.y)};
    return (p1.x <= p2.x && p1.y <= p2.y);
  }

  /* Retourne la première soucoupe en collision, et undefined si aucune collision */
  lookForCollisions(saucers) {
    return saucers.find(saucer => this.collisionWith(saucer));
  }

  isOut(canvas) {
    return this.x + this.width > canvas.width;
  }
}