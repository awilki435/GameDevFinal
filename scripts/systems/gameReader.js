MyGame.systems.gameReader = (function(){
    //System to read the game screen and add properties to entities as needed.
    //Will also keep track of a stack for unlimited undo ? 

    let stack = [];

    function update(objects){
        let stackArray = objects.map(obj => JSON.parse(JSON.stringify(obj)))
        stack.push(stackArray)
    }
    function gameSetup(objects){
        for(let id in objects){
            let property = NONE;
            let entity = objects[id]
            if (entity.components.type['type'] == 'word'){
                property = PUSH_PERSISTANCE;
            }
            else if(entity.components.type['type'] == 'hedge'){
                property = STOP_PERSISTANCE;
            }
            entity.addComponent(MyGame.components.Property(property))
            entity.components.property = property
        }
        read(objects)
    }
    function read(objects){
        removeProperties(objects);
        for(let i = 0; i < objects.length; i ++){
            let entity = objects[i]
            if(entity.components.type['type'] == 'word' && entity.components.type['wordType'] != 'is'){
                if(i + 1 < objects.length){
                    let nextRight = objects[grabEntity(entity.components.position.x + 1, entity.components.position.y,objects)]
                    if(nextRight){
                        if(nextRight.components.type['type'] == 'word' && nextRight.components.type['wordType'] == 'is'){
                            let lastRight = objects[grabEntity(entity.components.position.x + 2, entity.components.position.y,objects)];
                            if(lastRight){
                                if(lastRight.components.type['type'] == 'word' && lastRight.components.type['wordType'] != 'is'){
                                    setComponents(entity,lastRight,objects);
                                }
                            }
                        }
                    }
                    let nextDown = objects[grabEntity(entity.components.position.x, entity.components.position.y + 1, objects)]
                    if(nextDown){
                        if(nextDown.components.type['type'] == 'word' && nextDown.components.type['wordType'] == 'is'){
                            let lastDown = objects[grabEntity(entity.components.position.x, entity.components.position.y + 2, objects)]
                            if(lastDown){
                                if(lastDown.components.type['type'] == 'word' && lastDown.components.type['wordType'] != 'is'){
                                    setComponents(entity,lastDown,objects)
                                }
                            }
                        }
                    }
                }
            }
        }
        checkYou(objects)
        
    }
    function win(entity){
        entity.removeComponent(MyGame.components.KeyboardControlled);
        MyGame.systems.particleSystem.createParticleSystem(500,500);
        console.log("YOU WIN!");
        MyGame.assets['background'].pause();
        MyGame.assets['cleared'].play();

    }
    function lost(entity){
        entity.removeComponent(MyGame.components.KeyboardControlled());
        console.log("YOU LOST");
        MyGame.assets['background'].pause();
        MyGame.assets['defeat'].play();
    }
    function reset(entities){
        let current = ""
        while(stack != ""){
            current = undo(entities);
        }
        stack.push(current)
        
    }
    function undo(entities){
        let updated = stack.pop();
        for(let id in updated){
            if(entities[id].id == updated[id].id){
                entities[id].components.position = updated[id].components.position
                entities[id].components.type = updated[id].components.type
                if(entities[id].components.type['type'] != 'word'){
                    entities[id].components.animatedSprites = updated[id].components.animatedSprites
                }
                let imageSrc = ""
                if(entities[id].components.type['type'] == 'baba'){
                    imageSrc = MyGame.assets.bb
                }
                else if(entities[id].components.type['type'] == 'flag'){
                    imageSrc = MyGame.assets.flag
                }
                else if(entities[id].components.type['type'] == 'floor'){
                    imageSrc = MyGame.assets.floor
                }
                else if(entities[id].components.type['type'] == 'grass'){
                    imageSrc = MyGame.assets.grass
                }
                else if(entities[id].components.type['type'] == 'hedge'){
                    imageSrc = MyGame.assets.hedge
                }
                else if(entities[id].components.type['type'] == 'lava'){
                    imageSrc = MyGame.assets.lava
                }
                else if(entities[id].components.type['type'] == 'rock'){
                    imageSrc = MyGame.assets.rock
                }
                else if(entities[id].components.type['type'] == 'wall'){
                    imageSrc = MyGame.assets.wall
                }
                else if(entities[id].components.type['type'] == 'water'){
                    imageSrc = MyGame.assets.water
                }
                if(entities[id].components.type['type'] != 'word'){
                    entities[id].components.animatedSprites['imageSrc'] = imageSrc
                }
                
            }
        }
        read(entities);
    }
    function setComponents(first,last, objects){
        for(let id in objects){
            let newEntity = objects[id];
            if(newEntity.components.type['type'] == first.components.type['wordType']){
                let newproperty = NONE;
                if(last.components.type['wordType'] == 'stop'){
                    newproperty = STOP;
                }
                else if(last.components.type['wordType'] == 'sink'){
                    newproperty = SINK;
                }
                else if(last.components.type['wordType'] == 'win'){
                    newproperty = WIN;
                }
                else if(last.components.type['wordType'] == 'kill'){
                    newproperty = KILL;
                }
                else if(last.components.type['wordType'] == 'push'){
                    newproperty = PUSH;
                }
                else if(last.components.type['wordType'] == 'you'){
                    newproperty = YOU;
                }
                else if(last.components.type['wordType'] == 'defeat'){
                    newproperty = DEFEAT
                }
                else if(last.components.type['wordType'] == 'baba'){
                    newEntity.components.type['type'] = 'baba';
                    newEntity.components.animatedSprites['imageSrc'] = MyGame.assets.baba;
                }
                else if(last.components.type['wordType'] == 'flag'){
                    newEntity.components.type['type'] = 'flag';
                    newEntity.components.animatedSprites['imageSrc'] = MyGame.assets.flag;
                }
                else if(last.components.type['wordType'] == 'lava'){
                    newEntity.components.type['type'] = 'lava';
                    newEntity.components.animatedSprites['imageSrc'] = MyGame.assets.lava;
                }
                else if(last.components.type['wordType'] == 'rock'){
                    newEntity.components.type['type'] = 'rock';
                    newEntity.components.animatedSprites['imageSrc'] = MyGame.assets.rock;
                }
                else if(last.components.type['wordType'] == 'wall'){
                    newEntity.components.type['type'] = 'wall';
                    newEntity.components.animatedSprites['imageSrc'] = MyGame.assets.wall;
                }
                else if(last.components.type['wordType'] == 'water'){
                    newEntity.components.type['type'] = 'water';
                    newEntity.components.animatedSprites['imageSrc'] = MyGame.assets.water;
                }
                newEntity.components.property += newproperty;
            }
        }
    }
    function grabEntity(positionX,positionY, objects){
        for(let id in objects){
            let newEntity = objects[id];
            if(newEntity.components.position['x'] == positionX && newEntity.components.position['y'] == positionY){
                return id
            }
        }
    }
    function checkYou(objects){
        for(let id in objects){
            let entity = objects[id];
            entity.removeComponent(MyGame.components.KeyboardControlled())
            if(entity.components.property == YOU){
                let inputs = {keys: {
                    'w': 'up',
                    'a': 'left',
                    's': 'down',
                    'd': 'right',
                }};
                entity.addComponent(MyGame.components.KeyboardControlled(inputs))
            }
        }
    }
    function removeProperties(objects){
        for(let id in objects){
            let entity = objects[id]
            if(entity.components.property >> 6 >= 1 && entity.components.property != WIN && entity.components.property != DEFEAT && entity.components.property != SINK && entity.components.property != YOU){
                continue
            }
            else{
                entity.components.property = NONE
            }
        }
    }

    let api = {
        update: update,
        gameSetup: gameSetup,
        read: read,
        undo: undo,
        lost: lost,
        win: win,
        reset: reset,
    };

    return api;
});