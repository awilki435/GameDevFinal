//connected to an entity
MyGame.components.Push = function(spec) {
    'use strict';

    let api = {
        get name() { return 'push'; },
        get facing() {return spec.facing},
        set facing(value){spec.facing = value},
    };

    return api;
};