class HealingMeteorSplit extends BaseMeteorSplit {
    split(actors, meteor) {
        if (meteor.hp < 0) {
            actors.find(x => x instanceof SpaceShip).hp += meteor.hpAdd;
        }
        return [];
    }

    matches(meteor) {
        return (meteor instanceof HealingMeteor);
    }
}
