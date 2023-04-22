MyGame.components.AnimatedSprites = function(spec) {
    'use strict';

    let api = {
        get name() { return 'animatedSprites'; },
        get imageSrc() {return spec.imageSrc},
        set imageSrc(value) {spec.imageSrc = value},
        get spriteWidth() {return spec.spriteWidth},
        get spriteHeight() {return spec.spriteHeight},
        get spriteX() {return spec.spriteX},
        get spriteY() {return spec.spriteY},
        get frameCount() {return spec.frameCount},
        get currentFrame() {return spec.currentFrame},
        set currentFrame(value) {spec.currentFrame = value;}
    };

    return api;
};

// EXAMPLE

// let spriteWidth = 24;
// let spriteHeight = 24;
// let frameCount = 3;
// let currentFrame = 0;
// let spriteX = 0;
// let spriteY = 0;