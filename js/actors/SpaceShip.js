class SpaceShip extends Actor {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.rotate = 0.0;
        this.speed = 2;
        this.reload = 0;
        this.hp = 25;
        this.invul = 0;
        this.setAllColors("white");
        this.style.colorSfx = "orange";
        this.shapePathString = "m -10,10 h 2 v -3 l 4,4 1,6 1,-6 4,-4 0,3 h 2 v -5 l 3,-8 -10,5 -10,-5 3,8 z"
    }


}
