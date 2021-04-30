import starshipSrc from '../assets/images/vaisseau-ballon-petit.png';

import MoveState from './movestate';
import Mobile from './mobile';
import Shoot from './shoot';

const DELTA_X = 0;
const DELTA_Y = 8;

export default class Starship extends Mobile {
  constructor(x, y) {
    super(x, y, DELTA_X, DELTA_Y, starshipSrc);
    this.moving = MoveState.NONE;
    this._isTriggerPulled = false;
 
  }

  get isTriggerPulled() {
    return this._isTriggerPulled;
  }

  set isTriggerPulled(b) {
    this._isTriggerPulled = b;
  }

  get up() {
    return this.moving === MoveState.UP;
  }

  get down() {
    return this.moving === MoveState.DOWN;
  }

  moveUp() {
    this.deltaY = -DELTA_Y;
    this.moving = MoveState.UP;
  }

  moveDown() {
    this.deltaY = DELTA_Y;
    this.moving = MoveState.DOWN;
  }

  stopMoving() {
    this.moving = MoveState.NONE;
  }

  move(canvas) {
    if (this.down) {
      if (this.y + this.image.height + this.deltaY <= canvas.height) {
        super.move(canvas);
      }
    }
    else if (this.up) {
      if (this.y + this.deltaY >= 0) {
        super.move(canvas);
      }
    }
  }
  
  fire() {
    if (!this.isTriggerPulled) {
      return new Shoot(this.x + this.width, this.y + this.height / 2);
    }
    return undefined;
  }
}
