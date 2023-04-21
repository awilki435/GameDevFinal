MyGame.systems.gameReader = (function(){
    //System to read the game screen and add properties to entities as needed.
    //Will also keep track of a stack for unlimited undo ? 

    let stack = [];

    function update(elapsedTime, objects){
        stack.push(objects);

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
    }
    function read(objects){
        
    }
    function removeProperties(){

    }

    let api = {
        update: update,
        gameSetup: gameSetup,
    };

    return api;
});