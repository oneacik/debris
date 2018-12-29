class AgainController extends CanvasAwareInputProcessor {
    process(keys, canvas, actors) {
        if (actors.find(x => x instanceof SpaceShip) === undefined) {
            if (keys.has("f")) {
                return AgainController.toNigdySieNieKonczy(canvas);
            }
        }
        return actors;
    }

    static toNigdySieNieKonczy(canvas) {
        Score.add(-Score.getScore());

        var actors = [];
        actors.push(new SpaceShip(canvas.width / 2.0, canvas.height / 2.0));
        actors.push(new Meteor(canvas.width / 2.0, canvas.height / 3.0, Math.PI));
        return actors;
    }
}
