MyGame.render.background = function (graphics) {
    'use strict';

    let spec = {color: {fill: '#000000',stroke: '#000000'}, x: 0, y: 0, width: CANVAS_WIDTH, height: CANVAS_WIDTH};

    MyGame.graphics.drawRectangle(spec);
};
