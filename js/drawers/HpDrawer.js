class HpDrawer extends Drawer {
    draw(canvas, actors) {
        var beginX = 10;
        var beginY = 10;
        var size = 10;
        var pad = 5;

        actors
            .filter(x => x instanceof SpaceShip)
            .forEach(
                ship => {
                    for (var i = 0; i < ship.hp; i++) {
                        var context = canvas.getContext('2d');
                        ship.setupContext(context);
                        context.beginPath();
                        context.moveTo(beginX + (size + pad) * i, beginY);
                        context.lineTo(beginX + (size + pad) * i + size, beginY);
                        context.lineTo(beginX + (size + pad) * i + size, beginY + size);
                        context.lineTo(beginX + (size + pad) * i, beginY + size);
                        context.lineTo(beginX + (size + pad) * i, beginY);
                        context.stroke();
                    }
                }
            );
        return actors;
    }
}
