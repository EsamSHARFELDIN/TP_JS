const LEFT = Symbol('left');
const RIGHT = Symbol('right');
const UP = Symbol('up');
const DOWN = Symbol('down');
const NONE = Symbol('none');

export default class MoveState {
    static get LEFT() { return LEFT; }
    static get RIGHT() { return RIGHT; }
    static get UP() { return UP; }
    static get DOWN() { return DOWN; }
    static get NONE() { return NONE; }
}
