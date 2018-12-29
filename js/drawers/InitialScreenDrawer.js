class InitialScreenDrawer extends Drawer {

    draw(canvas, actors) {
        var beginX = canvas.width / 2;
        var beginY = canvas.height / 2;

        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "40px Arial";

        ctx.fillText("WSAD + J", beginX, beginY / 2);
        ctx.fillText("Debris.js", beginX, beginY);
        ctx.fillText("F to play", beginX, beginY * 3 / 2);

        return actors;
    }
}
