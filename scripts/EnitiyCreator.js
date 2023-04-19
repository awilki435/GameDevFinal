// ************************** //
// Purpose: Generate Enities with required componests (location, sprite, type)
// Input : Grid Location
// Ouput : Enitity
// ************************** //

// Entity Creator //
function createBaba (x,y) {
    let baba = null;
    let sprite = {
        imageSrc: 'sprite_0.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'baba',
        wordType: 'none'
    }
    baba = createObjEntity(x,y,sprite,typeClass);

    // Return entity to list
    // direct add to entity list
    return baba;
}

function createFlag (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'flag.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'flag',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}

 function createFloor (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'floor.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'floor',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}

 function createHedge (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'hedge.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'hedge',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}

function createLava (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'lava.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'lava',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}

function createRock (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'rock.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'rock',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}

function createWall (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'wall.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'wall',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}

function createWater (x,y){
    let object = null;
    let sprite = {
        imageSrc: 'water.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'water',
        wordType: 'none'
    }
    object = createObjEntity(x,y,sprite,typeClass);
    return object;
}
//  WORD OBJECTS //
function createWordBaba (x,y) {
    let word = null;
    let sprite = {
        imageSrc: MyGame.assets['baba-word'], 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'baba'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordFlag (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-flag.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'flag'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordLava (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-lava.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'lava'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordRock (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-rock.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'rock'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordWall (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-wall.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'wall'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordWater(x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-water.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'water'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordIs (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-is.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'is'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordKill (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-Kill.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'Kill'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordPush (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-push.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'push'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordSink (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-sink.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'sink'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordStop (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-stop.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'stop'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordWin (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-win.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'win'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}

function createWordyou (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-you.png', 
        spriteWidth: 24,
        spriteHeight:  24,
        spriteX: 0,
        spriteY: 0,
        frameCount: 3,
        currentFrame: 0
    }
    let typeClass = {
        type: 'word',
        wordType: 'you'
    }
    word = createObjEntity(x,y,sprite,typeClass);
    return word;
}



function createObjEntity(x, y, sprite, type) {
    let obj = Entity.createEntity();
    obj.addComponent(MyGame.components.AnimatedSprites(sprite));
    obj.addComponent(MyGame.components.Position({x:x, y:y}));
    obj.addComponent(MyGame.components.Type(type));

    return obj;
}


// create object
//create word