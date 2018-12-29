class BulletToAnythingHitProcessor extends HitProcessor {
    do(first, second) {
        if (!(first instanceof Bullet && !(second instanceof Bullet))) {
            return first;
        }
        if (HitProcessor.isCircleHit(first, second)) {
            first.die = true;
        }
        return first;
    }
}
