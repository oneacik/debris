class Meteor extends Actor {
    constructor(x, y, rotate) {
        super();
        this.x = x;
        this.y = y;
        this.rotate = rotate;
        this.radius = 8;
        this.speed = Math.random();
        this.hp = 5;
        this.setAllColors("#4edaff");
        this.vertexes = this.generateVertexes(8)
    }

    generateVertexes(sideNo) {
        var radMin = 3;
        var radMax = 12;
        var vxs = [];
        for (var i = 0; i < sideNo; i++) {
            var radius = radMin + Math.random() * (radMax - radMin);
            var v = {};
            v.x = radius * Math.cos(Math.PI * 2 * i / sideNo);
            v.y = radius * Math.sin(Math.PI * 2 * i / sideNo);
            vxs.push(v)
        }
        return vxs
    }

}
