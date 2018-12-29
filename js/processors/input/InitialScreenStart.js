class InitialScreenStart extends AllAwareProcessor {
    process(keys, canvas, processors, actors) {
        if (actors.find(x => x instanceof SpaceShip) === undefined) {
            if (keys.has("f")) {
                return [AgainController.toNigdySieNieKonczy(canvas), Scenes.playingScene]
            }
        }
        return [actors, processors];
    }
}
