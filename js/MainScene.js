class MainScene extends BaseScene {
    constructor() {
        super();
        this.keys = new Set();
        this.actors = [];

        this.processors = [
            new InitialScreenDrawer(),
            new InitialScreenStart()
        ]
    }

    refresh() {
        this.clearCanvas(this.getCanvas());
        Ticker.inc();

        [this.actors, this.processors] = this.processors.reduce(
            (state, handler) => this.handle(state[0], state[1], handler)
            , [this.actors, this.processors])

    }

    keydown(key) {
        this.keys.add(key);
    }

    keyup(key) {
        this.keys.delete(key);
    }

    getCanvas() {
        return document.getElementById("scene");
    }

    getKeys() {
        return this.keys;
    }


    clearCanvas(canvas) {
        var context = canvas.getContext('2d');
        context.fillStyle = "black";
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    static init() {
        MainScene.scene = new MainScene();
        var refr = () => {
            MainScene.scene.refresh();
            requestAnimationFrame(refr);
        };
        refr();
        document.addEventListener("keydown", (x) => MainScene.scene.keydown(x.key));
        document.addEventListener("keyup", (x) => MainScene.scene.keyup(x.key));
    }

}
