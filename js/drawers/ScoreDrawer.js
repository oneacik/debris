class ScoreDrawer extends Drawer {
    draw(canvas, actors) {
        var beginX = canvas.width - 10;
        var beginY = canvas.height - 20;

        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.textAlign = "right";
        ctx.font = "10px Arial";
        ctx.fillText("Score: " + Score.getScore(), beginX, beginY);
        return actors;
    }
}
