MyGame.systems.collision = (function(){
    //System for collision detection
    function findCollision(entities){
        let stop = [];
        for(let id in entities){
            let entity = entities[id];
            if(entity.components.property == STOP || entity.components.property == STOP_PERSISTANCE || entity.components.property == PUSH || entity.components.property == PUSH_PERSISTANCE || entity.components.property == WIN || entity.components.property == DEFEAT || entity.components.property == SINK){
                stop.push(entity);
            }
        }
        return stop;
    }
    function push(){

    }
    function collides(a,b){
        return a.components.position.x === b.components.position.x && 
               a.components.position.y === b.components.position.y;
    };
    function update(entities, reportEvent, key){
        let stop = findCollision(entities);

        for(let id in entities){
            let entity = entities[id];
            if(entity.components.property == YOU){
                for(let m = 0; m < stop.length; m ++){
                    let entityStop = stop[m];
                    if(collides(entity,entityStop)){
                        reportEvent({
                            type: 'hit-something',
                            entity: entity
                        });
                        if(entityStop.components.property == STOP || entityStop.components.property == STOP_PERSISTANCE){
                            if(key == 'w'){
                                entity.components.position['y'] += 1
                            }
                            else if(key == 'a'){
                                entity.components.position['x'] += 1
                            }
                            else if(key == 's'){
                                entity.components.position['y'] -= 1
                            }
                            else if (key == 'd'){
                                entity.components.position['x'] -= 1
                            }
                        }
                        else if(entityStop.components.property == PUSH || entityStop.components.property == PUSH_PERSISTANCE){
                            if(key == 'w'){
                                entityStop.components.position['y'] -=1
                            }
                            else if(key == 'a'){
                                entityStop.components.position['x'] -=1
                            }
                            else if(key == 's'){
                                entityStop.components.position['y'] +=1
                            }
                            else if (key == 'd'){
                                entityStop.components.position['x'] +=1
                            }
                            
                            if(entityStop.components.type['type'] == 'word'){
                                if(entityStop.components.type['wordType'] == 'win'){
                                    MyGame.assets['win'].play();
                                }
                                reportEvent({
                                    type: 'pushed-word',
                                    entity: entityStop,
                                })
                            }
                        }
                        else if(entityStop.components.property == WIN || entity.components.property == WIN){
                            reportEvent({
                                type: 'won-game',
                                entity: entityStop,
                            })
                        }
                        else{
                            reportEvent({
                                type: 'lost-game',
                                entity: entity,
                            })
                        }
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