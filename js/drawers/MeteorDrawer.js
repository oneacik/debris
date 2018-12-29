class MeteorDrawer extends Drawer {
    draw(canvas, actors) {
        actors
            .filter(x => x instanceof Meteor)
            .forEach(
                bullet => {
                    var context = canvas.getContext('2d');
                    context.save();
                    bullet.setupContext(context);
                    context.translate(bullet.x, bullet.y);
                    context.rotate(-bullet.rotate);
                    context.beginPath();
                    context.moveTo(
                        bullet.vertexes[7].x,
                        bullet.vertexes[7].y);
                    bullet.vertexes.forEach(
                        v => {
                            context.lineTo(
                                v.x,
                                v.y
                            )
                        }
                    );
                    context.stroke();
                    context.restore()

                    //context.arc(bullet.x, bullet.y, bullet.radius, 0, 2 * Math.PI);
                }
            );
        return actors;
    }
}
