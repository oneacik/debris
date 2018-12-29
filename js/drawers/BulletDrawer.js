class BulletDrawer extends Drawer {
    draw(canvas, actors) {
        actors
            .filter(x => x instanceof Bullet)
            .forEach(
                bullet => {
                    var context = canvas.getContext('2d');
                    context.save();
                    bullet.setupContext(context);
                    context.translate(bullet.x, bullet.y);
                    context.rotate(-bullet.rotate);
                    context.beginPath();
                    context.stroke(
                        new Path2D(bullet.shapePathString)
                    );

                    context.restore()
                }
            );
        return actors;
    }
}
