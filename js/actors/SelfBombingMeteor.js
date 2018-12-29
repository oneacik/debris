class SelfBombingMeteor extends Meteor {
    constructor(x, y, rotate) {
        super(x, y, rotate);
        this.hp = 1000;
        this.ttl = 400;
        this.setAllColors("#ea0020");
    }
}
