MyGame.components.Position = function(spec) {
    'use strict';

    let api = {
        get name() { return 'position'; },
        get x() { return spec.x; },
        get y() { return spec.y; },
    };

    return api;
};
