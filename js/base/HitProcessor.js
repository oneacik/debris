class HitProcessor {

    static isCircleHit(first, second) {
        return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)) < (second.radius + first.radius);
    }

    process(actors) {
        actors.forEach(first =>
            actors
                .filter(second => second !== first)
                .reduce(
                    (first, second) => this.do(first, second),
                    first
                )
        );
        return actors;
    }

    /**
     * @returns object state after hit detection or not
     */
    do(first, second) {
        return first;
    }

}
