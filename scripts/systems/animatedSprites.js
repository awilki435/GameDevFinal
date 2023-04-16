// --------------------------------------------------------------
//
// This system is responsible for renderign the whole game, which
// is just the background and the entities with a appearance
// and position components.
//
// --------------------------------------------------------------
MyGame.systems.animatedSprites = (function (graphics) {
    'use strict';

    const duration = 2; // animation duration in seconds
    let elapsed = 0; // elapsed time in seconds
    let sprite = [];

    // --------------------------------------------------------------
    //
    // Find all the entities with both sprites and position components
    // and render them.
    //
    // --------------------------------------------------------------
    function findSprites(entities) {
        sprite = [];
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components.animatedSprites && entity.components.position) {
                sprite.push(entity);
            }
        }
    }

    function updateSprites(time) {
        sprites.forEach(sprite => {
            // update sprite position based on progress
            sprite.animatedSprites.spriteWidth
            scurrentFrame = (currentFrame + 1) % 3;
            spriteX = currentFrame * spriteWidth;
            
        });
        
    }

    function renderSprites(entities) {
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components.appearance && entity.components.position) {

                MyGame.render.segmented(graphics, entity.components.appearance, entity.components.position);
            }
        }
    }








    // --------------------------------------------------------------
    //
    // Public interface used to get the whole game rendered.
    //
    // --------------------------------------------------------------
    function update(elapsedTime, entities) {
        // locate sprites entities
        findSprites(entities);
        // Render Background
        MyGame.render.background(graphics);
        updateSprites()
        renderSprites(sprites);
    }

    let api = {
        update: update
    };

    return api;
}(MyGame.graphics));


// const sprites = [/* array of sprites */];
// const duration = 2; // animation duration in seconds
// let elapsed = 0; // elapsed time in seconds

// function updateSprites(time) {
//   const progress = time / duration; // calculate progress percentage
//   sprites.forEach(sprite => {
//     // update sprite position based on progress
//     sprite.x = /* calculate new x position */;
//     sprite.y = /* calculate new y position */;
//   });
// }

// function animate() {
//   const now = Date.now() / 1000; // get current time in seconds
//   const deltaTime = now - elapsed; // calculate time since last update
//   elapsed = now;
//   updateSprites(deltaTime);
//   requestAnimationFrame(animate); // loop continuously
// }

// animate(); // start the animation loop
