MyGame.systems.collision = (function(){
    //System for collision detection
    function findCollision(entities){
        let stop = [];
        for(let id in entities){
            let entity = entities[id];
            if(entity.components.property == STOP || entity.components.property == STOP_PERSISTANCE){
                stop.push(entity);
            }
        }
        return stop;
    }
    function collides(a,b){
        return a.components.position.x === b.components.position.x && 
               a.components.position.y === b.components.position.y;
    };
    function update(entities, reportEvent){
        let stop = findCollision(entities);

        for(let id in entities){
            let entity = entities[id];
            if(entity.components.property == STOP || entity.components.property == STOP_PERSISTANCE){
                for(let m = 0; m < stop.length; m ++){
                    let entityStop = stop[m];
                    if(collides(entity,entityStop)){
                        reportEvent({
                            type: 'hit-something',
                            entity: entity
                        });
                    }
                }
            }
        }
    }
    let api = {
        update: update,
    };
    return api;
});