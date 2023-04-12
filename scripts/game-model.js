function GameModel() {
    'use strict';
    

    let entities = {};  // key is 'id', value is an Entity

    // get level data
    // create and add entites based on level data


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
        console.log('initializing borders...');
        mergeObjects(entities, initializeBorder());

        console.log('initializing obstacles...');
        mergeObjects(entities, initializeObstacles());

        console.log('initializing snake starting position...');
        let snake = initializeSnake();
        entities[snake.id] = snake;

        console.log('initializing first food location...');
        let food = createFood();
        entities[food.id] = food;
    }

    // --------------------------------------------------------------
    //
    // Public interface exposed to the game loop that tells the game
    // model to perform an update.
    //
    // --------------------------------------------------------------
    function update(elapsedTime) {
        MyGame.systems.keyboardInput.update(elapsedTime, entities);
        MyGame.systems.movement.update(elapsedTime, entities);
        MyGame.systems.collision.update(elapsedTime, entities, reportEvent);
        MyGame.systems.render.update(elapsedTime, entities);
    }

    initialize();

    let api = {
        update: update
    };

    return api;
}
