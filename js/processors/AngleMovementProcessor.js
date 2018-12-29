class AngleMovementProcessor extends Processor {
    process(actors) {
        actors.forEach(obj => {
            if (obj.speed != null && obj.rotate != null) {
                obj.x += Math.sin(obj.rotate) * obj.speed;
                obj.y += Math.cos(obj.rotate) * obj.speed;
            }
        });
        return actors;
    }
}
