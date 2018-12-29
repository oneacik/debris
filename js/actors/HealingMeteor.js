class HealingMeteor extends Meteor {
    constructor(x, y, rotate) {
        super(x, y, rotate);
        this.hp = 10;
        this.ttl = 2000;
        this.hpAdd = 2;
        this.setAllColors("#3eea00");
    }
}
