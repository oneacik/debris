class SieNieZesrajDrawer extends Drawer {
    draw(canvas, actors) {
        if (actors.find(x => x instanceof SpaceShip) === undefined) {
            var beginX = canvas.width / 2;
            var beginY = canvas.height / 2;

            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.font = "40px Arial";
            if (Score.getScore() > 100000) {
                ctx.fillText("Tylko Się Nię Zesraj", beginX, beginY);
                ctx.font = "20px Arial";
                ctx.fillText("By pominąć uwagę naciśnij f.", beginX, beginY * 3 / 2);
            } else {
                ctx.fillText("Co Za Przegryw", beginX, beginY);
                ctx.font = "20px Arial";
                ctx.fillText("Press f by być przegrywem dalej.", beginX, beginY * 3 / 2);
            }
        }

        return actors;
    }
}
