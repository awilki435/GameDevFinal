MyGame.render.background = function (graphics) {
    'use strict';

    let spec = {color: {fill: 'rgb(0, 0, 255)',stroke: 'rgb(0, 0, 255)'}, x: 0, y: 0, width: 1000, height: 1000};

    MyGame.graphics.drawRectangle(spec);
};
