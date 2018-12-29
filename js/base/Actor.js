class Actor {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.die = false;
        this.boundable = true;
        this.canvasSize = 500;
        this.radius = 10;
        this.ttl = null;
        this.style = {
            colorMain: "white",
            colorGlow: "white",
            colorText: "white",
            colorSfx: "red"
        }
    }

    setAllColors(color) {
        this.style.colorMain = color;
        this.style.colorGlow = color;
        this.style.colorText = color;
        this.style.colorSfx = color;
    }

    setupContext(context) {
        context.strokeStyle = this.style.colorMain;
        context.fillStyle = this.style.colorMain;
        context.shadowColor = this.style.colorGlow;
        context.shadowBlur = 3;
    }

    draw(canvas) {
    }

    react(scene, keys) {
        scene
            .filter(x => this.isHit(x))
            .forEach(x => {
                this.hit(x);
                x.hit(this);
            });
    }

    isHit(object) {
        return Math.sqrt(Math.pow(object.x - this.x, 2) + Math.pow(object.y - this.y, 2)) < (this.radius + object.radius);
    }

    hit(x) {
    }

}
