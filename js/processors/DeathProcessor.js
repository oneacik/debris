class DeathProcessor extends Processor {
    process(actors) {
        return actors.filter(x => !x.die);
    }
}
