// input controller with continuous and single action capabiliy
MyGame.input.Keyboard = (function () {
    let keysDown = {};
    
    function keyPress(e) {
        
    }

    function keyRelease(e){
        keysDown[e.key] = e.timeStamp;
    }
    function update(elapsedTime, entities, objects) {
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components['keyboard-controlled']) {
                let input = entity.components['keyboard-controlled'];
                for (let key in input.keys) {
                    if (keysDown[key]) {
                        if(key == 'w'){
                            entity.components.position.y = entity.components.position.y - 1
                        }
                        else if(key == 'a'){
                            entity.components.position.x = entity.components.position.x - 1
                        }
                        else if(key == 's'){
                            entity.components.position.y = entity.components.position.y + 1
                        }
                        else if(key == 'd'){
                            entity.components.position.x = entity.components.position.x + 1
                        }
                        delete keysDown[key]
                        MyGame.systems.gameReader().update(elapsedTime,objects)
                    }
                }
            }
        }
    }

    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    let api = {
        update: update
    };

    return api;
}());










//old code
    //let that = {
      //  keys: {},
        //keysReleased:{},
      //  handlers: {},
      //  singleHandlers: {}
        // keys relesesed
    //};

    //function keyPress(e) {
    //    that.keys[e.key] = e.timeStamp;
    //    that.update()
    //}

    //function keyRelease(e) {
    //    that.keysReleased[e.key] = e.timeStamp;
    //    delete that.keys[e.key];
    //    that.update()
    //}

    //that.update = function () {
        // console.log(that.keysReleased);
    //    for(let id in entities){
    //        let entity = entities[id];
    //        if(entity.components['keyboard-controlled']){
    //            let input = entity.components['keyboard-controlled']
    //        }
    //    }
    //    for (let key in that.keys) {
    //        if (that.keys.hasOwnProperty(key)) {
    //            if (that.handlers[key]) {
    //                that.handlers[key](elapsedTime);
    //            }
    //        }
    //    }
    //    for (let key in that.keysReleased) {
    //        if (that.keysReleased.hasOwnProperty(key)) {
    //            if (that.singleHandlers[key]) {
    //                that.singleHandlers[key](elapsedTime);
    //            }
    //        }
    //    }
    //    that.keysReleased = {};
    //};

    //that.register = function (key, handler) {
    //    that.handlers[key] = handler;
    //};

    // register keyup
    //that.registerkeyReleased = function (key, handler) {
    //    that.singleHandlers[key] = handler;
    //};

    //window.addEventListener('keydown', keyPress);
    //window.addEventListener('keyup', keyRelease);

    //return that;