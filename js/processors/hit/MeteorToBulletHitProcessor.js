class MeteorToBulletHitProcessor extends HitProcessor {
    do(first, second) {
        if (!(first instanceof Meteor && second instanceof Bullet)) {
            return first;
        }

        if (HitProcessor.isCircleHit(first, second)) {
            first.hp -= 1;
            Score.add(100);
        }

        return first;
    }
}
