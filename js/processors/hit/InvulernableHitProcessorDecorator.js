class InvulernableHitProcessorDecorator extends HitProcessor {
    constructor(processor) {
        super();
        this.processor = processor;
    }

    do(first, second) {
        if (first.invul == null) {
            return this.processor.do(first, second);
        } else {
            if (first.invul <= 0) {
                return this.processor.do(first, second);
            } else {
                return first;
            }
        }
    }
}
