class StandardMeteorSplit extends BaseMeteorSplit {
    split(actors, meteor) {
        var ran = Math.random();
        var meteor_num = actors.filter(x => x instanceof Meteor).length;


        var func_val = this.sigmoid((meteor_num - 27) / 3);
        console.log(func_val);
        if (ran > func_val) {
            return [
                new Meteor(meteor.x, meteor.y, MeteorSplitProcessor.getRandomRotate()),
                new Meteor(meteor.x, meteor.y, MeteorSplitProcessor.getRandomRotate())
            ]
        } else {
            return [
                new Meteor(meteor.x, meteor.y, MeteorSplitProcessor.getRandomRotate()),
                (new (this.getRandomMeteor())(meteor.x, meteor.y, MeteorSplitProcessor.getRandomRotate()))
            ]
        }
    }

    getRandomMeteor() {
        var x = Math.random() * 100;
        if (x < 30) return SelfBombingMeteor;
        if (x < 35) return HealingMeteor;
        return ExplodingMeteor;
    }

    sigmoid(x) {
        return (1 / (1 + Math.exp(-x)))
    }

    matches(meteor) {
        return (meteor instanceof Meteor)
    }

}
