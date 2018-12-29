class SpaceShipDrawer extends Drawer {
    draw(canvas, actors) {
        actors
            .filter(x => x instanceof SpaceShip)
            .forEach(
                ship => {
                    var context = canvas.getContext('2d');
                    context.save();
                    ship.setupContext(context);
                    if ((ship.invul > 0) & (Ticker.i % 20 > 10)) {
                        context.strokeStyle = ship.style.colorSfx;
                    }
                    context.translate(ship.x, ship.y);
                    context.rotate(-ship.rotate);
                    context.beginPath();
                    context.stroke(
                        new Path2D(ship.shapePathString)
                    );

                    context.restore()
                }
            );
        return actors;
    }
}
