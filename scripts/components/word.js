MyGame.components.Word = function(spec) {
    'use strict';

    let api = {
        get name() { return 'word'; },
        // wordtypes: none, Baba,Flag, Lava, Rock, Wall, Water, Is, Kill, Push, Sink, stop, Win, You
        // Words Only
        get word(){ return spec.word}
    };

    return api;
};