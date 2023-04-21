MyGame.components.Property = function(spec) {
    'use strict';

    let api = {
        get name() { return 'property'; },
        get Properties(){ return spec.properties},
        set Properties(properties){spec.properties = properties}
    };

    return api;
};

// uses constant bit masking for property classification