MyGame.components.Property = function(spec) {
    'use strict';

    let api = {
        get name() { return 'property'; },
        get Properties(){ spec.properties}
    };

    return api;
};

// uses constant bit masking for property classification