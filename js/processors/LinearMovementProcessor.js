class LinearMovementProcessor extends Processor {
    process(actors) {
        actors.forEach(obj => {
            if (obj.dx != null && obj.dy != null) {
                obj.x += obj.dx;
                obj.y += obj.dy;
            }
            return obj;
        });
        return actors;
    }
}
