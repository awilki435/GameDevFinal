// --------------------------------------------------------------
//
// This system is responsible for renderign the whole game, which
// is just the background and the entities with a appearance
// and position components.
//
// --------------------------------------------------------------
MyGame.systems.animatedSprites = (function (graphics) {
    'use strict';

    const duration = 500; // animation duration in seconds
    let deltaTime = 0; // elapsed time in seconds
    let sprites = [];

    // --------------------------------------------------------------
    //
    // Find all the entities with both sprites and position components
    // and render them.
    //
    // --------------------------------------------------------------
    function findSprites(entities) {
        sprites = [];
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components.animatedSprites && entity.components.position) {
                sprites.push(entity);
                // console.log(entity);
            }
        }
    }

    function updateSprites() {
        // check if time elapsed cumulative is equal to duration of frame
        
            for(let id in sprites){
                // update sprite position based on progress
                let entity = sprites[id];
                let curFrame = entity.components.animatedSprites.currentFrame;
                entity.components.animatedSprites.currentFrame = (curFrame + 1) % entity.components.animatedSprites.frameCount;
            }
    }

    function renderSprites(entities) {
        // loop through all enities and render them
        // console.log("renderSprites: ");
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components.animatedSprites && entity.components.position) {
                // console.log(entity);
               MyGame.graphics.drawSprite(entity); //!!! send to core(need to modify) or send to render translate enditiy data
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

        if( deltaTime >= duration){
            updateSprites(elapsedTime);
            deltaTime = deltaTime % duration;
        }
        renderSprites(sprites);
        // console.log(sprites);
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
