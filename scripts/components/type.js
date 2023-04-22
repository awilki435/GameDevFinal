MyGame.components.Type = function(spec) {
    'use strict';

    let api = {
        get name() { return 'type'; },
        // TYPES: Baba, Flag, Floor, Hedge, Lava, Rock, Wall, Water, Word
        get type() { return spec.type },
        set type(value){spec.type = value},
        // wordtypes: none, Baba,Flag, Lava, Rock, Wall, Water, Is, Kill, Push, Sink, stop, Win, You
        // Words Only
        get wordType(){ return spec.wordType}
        
    };

    return api;
};