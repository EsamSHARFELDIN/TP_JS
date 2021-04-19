export default class Mobile {
    constructor(x, y, deltaX=0, deltaY=0, src) {
        this.x= x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.image = this.createImage(src);
    }

    createImage(src) {
        const img = new Image();
        img.src = src;
        return img;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y);
    }

    move(canvas) {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }
}
