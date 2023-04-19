function GameModel() {
    'use strict';
    

    let entities = [];  // key is 'id', value is an Entity

    // get level data
    // create and add entites based on level data
    console.log(MyGame.assets);
    entities.push(createWordBaba(500,500));
    

    // --------------------------------------------------------------
    //
    // Interface that allows systems to report events back to the overall
    // game model for processing.
    //
    // --------------------------------------------------------------
    function reportEvent(info) {
        switch (info.type) {
            case 'consume-food':
                delete entities[info.entity.id];
                let food = createFood();
                entities[food.id] = food;
                break;
            case 'hit-something':
                break;
        }
    }

    // --------------------------------------------------------------
    //
    // Helper method used to merge the properties of the 'source' object
    // into the 'dest' object.
    //
    // --------------------------------------------------------------
    function mergeObjects(dest, source) {
        for (let key in source) {
            dest[key] = source[key];
        }
    }

    // --------------------------------------------------------------
    //
    // One time initialization to get the game model prepared for playing.
    //
    // --------------------------------------------------------------
    function initialize() {
        
    }

    // --------------------------------------------------------------
    //
    // Public interface exposed to the game loop that tells the game
    // model to perform an update.
    //
    // --------------------------------------------------------------
    function update(elapsedTime) {
        // MyGame.systems.keyboardInput.update(elapsedTime, entities);
        // MyGame.systems.movement.update(elapsedTime, entities);
        // MyGame.systems.collision.update(elapsedTime, entities, reportEvent);
        MyGame.systems.animatedSprites.update(elapsedTime, entities);
    }

    initialize();

    let api = {
        update: update
    };

    return api;
}
