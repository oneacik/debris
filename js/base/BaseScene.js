class BaseScene {
    getCanvas() {
    }

    getKeys() {
    }

    handle(actors, processors, handler) {
        var wrap = (actors) => [actors, processors];

        if (handler instanceof HitProcessor) {
            return wrap(handler.process(actors));
        } else if (handler instanceof CanvasAwareProcessor) {
            return wrap(handler.process(this.getCanvas(), actors))
        } else if (handler instanceof CanvasAwareInputProcessor) {
            return wrap(handler.process(this.getKeys(), this.getCanvas(), actors))
        } else if (handler instanceof InputProcessor) {
            return wrap(handler.process(this.getKeys(), actors))
        } else if (handler instanceof Drawer) {
            return wrap(handler.draw(this.getCanvas(), actors))
        } else if (handler instanceof Processor) {
            return wrap(handler.process(actors));
        } else if (handler instanceof AllAwareProcessor) {
            return handler.process(this.getKeys(), this.getCanvas(), processors, actors)
        } else {
            throw "No handler found for this shiet, burrp Morty.";
        }
    }
}
