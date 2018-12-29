class PositionProcessor extends CanvasAwareProcessor {
    static cut(limit, pos) {
        var npos = pos % limit;
        while (npos < 0) {
            npos += limit;
        }
        return npos;
    }

    process(canvas, actors) {
        actors.forEach(obj => {
            obj.x = PositionProcessor.cut(canvas.width, obj.x);
            obj.y = PositionProcessor.cut(canvas.height, obj.y);
            return obj;
        });
        return actors
    }
}
