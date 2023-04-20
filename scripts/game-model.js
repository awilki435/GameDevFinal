function GameModel() {
    'use strict';
    

    let entities = [];  // key is 'id', value is an Entity

    // get level data
    // create and add entites based on level data
    // console.log(MyGame.assets);
    
    // --------------------------------------------------------------
    //
    // Set up level entities acording to level data  
    //
    // --------------------------------------------------------------
    function setUpLevel(levelInfo){
        entities = [];
        let grid2 = levelInfo.obj;
        let grid1 = levelInfo.static;
        // entities.push(createWordBaba(1,1));
        // entities.push(createWordWall(1,2));
        // entities.push(createWordWall(1,3));
        // entities.push(createWordyou(1,4));
        // entities.push(createBaba(2,0));

        for (let x = 0; x < levelInfo.gridSize; x++) {
            for (let y = 0; y < levelInfo.gridSize; y++) {
                let EntityId = grid1[y][x];
                let obj = objMaker(EntityId, x ,y);
                if (obj != null){
                    entities.push(obj);
                }
                
            }
        }

        for (let x = 0; x < levelInfo.gridSize; x++) {
            for (let y = 0; y < levelInfo.gridSize; y++) {
                let EntityId = grid2[y][x];
                let obj = objMaker(EntityId, x ,y);
                if (obj != null){
                    entities.push(obj);
                }
                
            }
        }
        console.log(entities);
    }
 
    function objMaker(EntityId, x,y){
        switch (EntityId) {
            case 'b':
                return createBaba(x,y);
            case 'f':
                return createFlag(x,y);
            case 'l':
                return createFloor(x,y);
            case 'g':
                return createGrass(x,y);
            case 'h':
                return createHedge(x,y);    
            case 'v':
                return createLava(x,y);
            case 'r':
                return createRock(x,y); 
            case 'w':
                return createWall(x,y);
            case 'a':
                return createWater(x,y);   
            // word objects  
            case 'W':
                return createWordWall(x,y);
            case 'R':
                return createWordRock(x,y);
            case 'F':
                return createWordFlag(x,y);
            case 'B':
                return createWordBaba(x,y);
            case 'I':
                return createWordIs(x,y);    
            case 'S':
                return createWordStop(x,y);
            case 'P':
                return createWordPush(x,y); 
            case 'V':
                return createWordLava(x,y);
            case 'A':
                return createWordWater(x,y);
            case 'Y':
                return createWordyou(x,y);
            case 'X':
                return createWordWin(x,y); 
            case 'N':
                return createWordSink(x,y);
            case 'K':
                return createWordKill(x,y);  
            default:
                return null;
              // code block to execute when none of the cases match
          }
    }
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
            case 'hit-something':
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
        MyGame.input.Keyboard.update(elapsedTime,entities);
        // MyGame.systems.movement.update(elapsedTime, entities);
        // MyGame.systems.collision.update(elapsedTime, entities, reportEvent);
        MyGame.systems.animatedSprites.update(elapsedTime, entities);
    }

    initialize();

    let api = {
        setUpLevel:setUpLevel,
        update: update
    };

    return api;
}
