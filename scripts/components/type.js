MyGame.components.Type = function(spec) {
    'use strict';

    let api = {
        get name() { return 'type'; },
        // TYPES: Baba, Flag, Floor, Hedge, Lava, Rock, Wall, Water, Word
        get type() { return spec.type },
        
    };

    return api;
};