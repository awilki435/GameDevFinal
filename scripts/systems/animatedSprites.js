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
    let deltaTime = 0; // elapsed time in seconds
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

    function updateSprites() {
        // check if time eleaped cumulative is equal to duration of frame
        
            sprite.forEach(sprite => {
                // update sprite position based on progress
                let curFrame = sprite.animatedSprites.currentFrame;
                sprite.animatedSprites.currentFrame = (curFrame + 1) % sprite.animatedSprites.frameCount;
                
                
            });

        
        
    }

    function renderSprites(entities) {
        // loop through all enities and render them
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components.appearance && entity.components.position) {
                // console.log(entity);
               graphics.drawSprite(entity); //!!! send to core(need to modify) or send to render translate enditiy data
            }
        }
    }

    // --------------------------------------------------------------
    //
    // Public interface used to get the whole game rendered.
    //
    // --------------------------------------------------------------
    function update(elapsedTime, entities) {
        // locate sprites entities in stack
        findSprites(entities);
        // Render Background
        MyGame.render.background(graphics);
        // Hamdle all sprite data and rendering
        deltaTime += elapsedTime;

        if( deltaTime <= duration){
            updateSprites(elapsedTime);
            deltaTime = 0;
        }
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
