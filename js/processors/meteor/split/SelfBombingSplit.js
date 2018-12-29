class SelfBombingSplit extends BaseMeteorSplit {
    split(actors, meteor) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .map(x => {
                var rot = MeteorSplitProcessor.getRandomRotate();
                return new SlowBullet(meteor.x + meteor.radius * 2 * Math.sin(rot), meteor.y + meteor.radius * 2 * Math.cos(rot), rot);
            });
    }

    matches(meteor) {
        return (meteor instanceof SelfBombingMeteor);
    }
}
