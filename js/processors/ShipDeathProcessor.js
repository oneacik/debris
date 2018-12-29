class ShipDeathProcessor extends Processor {
    process(actors) {
        return actors.filter(x => !(x instanceof SpaceShip && x.hp < 0));
    }
}
