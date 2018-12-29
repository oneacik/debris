class ReloadProcessor extends Processor {
    process(actors) {
        actors.forEach(x => {
            if (x.reload != null) {
                x.reload -= 1;
            }
        });
        return actors;
    }
}
