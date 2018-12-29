class SpaceShipToAnythingHitProcessor extends HitProcessor {
    do(first, second) {
        if (!(first instanceof SpaceShip)) {
            return first;
        }
        //make it a little easier to not get hit
        var fake_first = {x: first.x, y: first.y, radius: first.radius};

        if (HitProcessor.isCircleHit(fake_first, second)) {
            first.hp -= 1;
            first.invul = 80;
        }
        return first;
    }
}
