class Scenes{

}

Scenes.playingScene = [
    new SpaceShipDrawer(),
    new BulletDrawer(),
    new MeteorDrawer(),

    new HpDrawer(),
    new ScoreDrawer(),
    new SieNieZesrajDrawer(),

    new LinearMovementProcessor(),
    new AngleMovementProcessor(),
    new PositionProcessor(),

    new BulletToAnythingHitProcessor(),
    new InvulernableHitProcessorDecorator(new SpaceShipToAnythingHitProcessor()),
    new MeteorToBulletHitProcessor(),

    new DeathProcessor(),
    new ShipDeathProcessor(),
    new MeteorSplitProcessor(),
    new TtlProcessor(),

    new ReloadProcessor(),
    new InvulDecreaserProcessor(),

    new AgainController(),
    new SpaceShipController()
];

