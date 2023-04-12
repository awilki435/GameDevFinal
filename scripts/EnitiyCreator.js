// Entity Creator

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
}

function createWordBaba (x,y) {
    let word = null;
    let sprite = {
        imageSrc: 'word-baba.png', 
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