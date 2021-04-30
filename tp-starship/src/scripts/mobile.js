export default class Mobile {
    constructor(x, y, deltaX=0, deltaY=0, src) {
      this._x = x;
      this._y = y;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
      this.image = this.createImage(src);
    }
  
    get x() {
      return this._x;
    }
  
    get y() {
      return this._y;
    }
  
    set x(newX) {
      this._x = newX;
    }
  
    set y(newY) {
      this._y = newY;
    }
  
    get width() {
      return this.image.width;
    }
  
    get height() {
      return this.image.height;
    }
  
    createImage(src) {
      const img = new Image();
      img.src = src;
      return img;
    }
  
    draw(context) {
      context.drawImage(this.image, this.x, this.y);
    }
  
    /* Retourne true s'il faut détruire le mobile, false sinon */
    move(canvas) {
      this.x += this.deltaX;
      this.y += this.deltaY;
    }
  }
