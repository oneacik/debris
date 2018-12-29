class MeteorSplitProcessor extends Processor {
    constructor() {
        super();
        this.splits = [
            new HealingMeteorSplit(),
            new ExplodingMeteorSplit(),
            new SelfBombingSplit(),
            new StandardMeteorSplit()
        ];
    }

    process(actors) {
        return actors
            .flatMap(meteor => {
                if (meteor instanceof Meteor && (meteor.hp < 0 || meteor.ttl < 0)) {
                    return this.splits
                        .find(x => x.matches(meteor))
                        .split(actors, meteor);
                } else {
                    return [meteor];
                }
            });
    }

    static getRandomRotate() {
        return Math.random() * 2 * Math.PI;
    }
}
