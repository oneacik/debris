class ExplodingMeteor extends Meteor {
    constructor(x, y, rotate) {
        super(x, y, rotate);
        this.hp = 0;
        this.setAllColors("#ff8d2d");
    }
}
