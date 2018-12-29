class TtlProcessor extends Processor {
    process(actors) {
        return actors.filter(x =>
            x.ttl == null || x.ttl >= 0
        )
            .map(x => {
                if (x.ttl != null) {
                    x.ttl -= 1;
                }
                return x;
            });
    }
}
