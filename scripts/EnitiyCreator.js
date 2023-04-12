// Entity Creator

function createBaba () {
    let baba = null;

    
}

function createObjEntity(x, y, sprite, type) {
    let obj = Entity.createEntity();
    let sprite = {

    }

    obj.addComponent(MyGame.components.AnimatedSprites(sprite));
    obj.addComponent(MyGame.components.Position({x:x, y:y}));
    obj.addComponent(MyGame.components.Type(type));

    return obj;
}

function createWordEntity(x, y, sprite, type, theWord){
    let word = Entity.createEntity();
    word.addComponent(MyGame.components.AnimatedSprites(sprite));
    word.addComponent(MyGame.components.Position({x:x, y:y}));
    word.addComponent(MyGame.components.Type(type));
    word.addComponent(MyGame.components.word(theWord));

    return word;
}

// create object
//create word