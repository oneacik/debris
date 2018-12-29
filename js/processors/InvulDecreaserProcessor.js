class InvulDecreaserProcessor extends Processor {
    process(actors) {
        actors.forEach(x => {
            if (x.invul != null) {
                if (x.invul > 0) {
                    x.invul--;
                }
            }
        });

        return actors;
    }
}
