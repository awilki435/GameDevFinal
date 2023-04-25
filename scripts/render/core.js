MyGame.graphics = (function() {
    'use strict';

    let canvas = document.getElementById('id-canvas');
    let context = canvas.getContext('2d');

    function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // --------------------------------------------------------------
    //
    // Draws a texture to the canvas with the following specification:
    //    image: Image
    //    center: {x: , y: }
    //    size: { width: , height: }
    //
    // --------------------------------------------------------------
    function drawTexture(texture) {
        if (texture.image.ready) {
            // console.log("draw immage");
            // console.log(texture.width);
            context.save();

            context.translate(texture.center.x, texture.center.y);
            context.rotate(texture.rotation);
            context.translate(-texture.center.x, -texture.center.y);

            context.drawImage(
                texture.image,
                texture.center.x - texture.width/2,
                texture.center.y - texture.height/2,
                texture.width, texture.height);

            context.restore();
        }
    }

    function drawSprite(spec){
        // debugger
        // console.log(spec);
        // let test = spec.components.animatedSprites.spriteWidth;
        let gridSize = CANVAS_WIDTH / 20;
        // console.log( "imageScr",spec);
        context.drawImage(
            spec.components.animatedSprites.imageSrc, //scr
            spec.components.animatedSprites.spriteWidth * spec.components.animatedSprites.currentFrame,
            0,
            spec.components.animatedSprites.spriteWidth,
            spec.components.animatedSprites.spriteHeight,
            spec.components.position.x * gridSize ,
            spec.components.position.y * gridSize ,
            gridSize,
            gridSize );

            // spec.components.animatedSprites.spriteWidth, //size of sprite
            // spec.components.animatedSprites.spriteHeight);
        // console.log("Draw Sprite: Image Drawn")
    }

    // Draw a particle to the canvas
    function drawParticle(particle) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha; // set the particle's opacity
        ctx.fill();
    }

    // neds obj : x, y, size color 
    function drawRectangle(spec){
        // console.log("drawRect");
        context.save();

        context.fillStyle = spec.color.fill;
        context.fillRect(spec.x,spec.y,spec.width,spec.height);

        context.strokeStyle = spec.color.stroke;
        context.strokeRect(spec.x,spec.y,spec.width,spec.height);

        context.restore();

    }

    function drawText(spec) {
        context.save();

        context.font = spec.font;
        context.fillStyle = spec.fillStyle;
        context.strokeStyle = spec.strokeStyle;
        context.textBaseline = 'top';

        context.translate(spec.position.x, spec.position.y);
        context.rotate(spec.rotation);
        context.translate(-spec.position.x, -spec.position.y);


        context.fillText(spec.text, spec.position.x, spec.position.y);
        context.strokeText(spec.text, spec.position.x, spec.position.y);

        context.restore();
    }
    

    let api = {
        get canvas() { return canvas; },
        clear: clear,
        drawRectangle:drawRectangle,
        drawTexture: drawTexture,
        drawText: drawText,
        drawSprite: drawSprite,
        drawParticle:drawParticle
    };

    return api;
}());
