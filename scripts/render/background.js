MyGame.render.background = function (graphics) {
    'use strict';

    let spec = {color: {fill: '#000000',stroke: '#000000'}, x: 0, y: 0, width: graphics.width, height: graphics.width};

    MyGame.graphics.drawRectangle(spec);
};
