// input controller with continuous and single action capabiliy
MyGame.input.Keyboard = (function () {
    let keysDown = {};
    let moved = false;
    let deletedKey = ""
    function keyPress(e) {
        
    }

    function keyRelease(e){
        keysDown[e.key] = e.timeStamp;
    }
    function update(entities,reportEvent) {
        MyGame.assets['movement'].pause();
        for (let id in entities) {
            let entity = entities[id];
            if (entity.components['keyboard-controlled']) {
                let input = entity.components['keyboard-controlled'];
                for (let key in input.keys) {
                    if (keysDown[key] && moved == false) {
                        // console.log(MyGame.screens['custom-controls'].controls);
                        if(key == MyGame.screens['custom-controls'].controls.up){
                            entity.components.position.y -= 1;
                            MyGame.assets['movement'].play();
                        }
                        else if(key == MyGame.screens['custom-controls'].controls.left){
                            entity.components.position.x -=  1;
                            MyGame.assets['movement'].play();
                        }
                        else if(key == MyGame.screens['custom-controls'].controls.down){
                            entity.components.position.y += 1;
                            MyGame.assets['movement'].play();
                        }
                        else if(key == MyGame.screens['custom-controls'].controls.right){
                            entity.components.position.x += 1;
                            MyGame.assets['movement'].play();
                        }
                        moved = true
                        deletedKey = key
                        reportEvent({
                            type: 'key-pressed',
                            key: key
                        })
                    }
                }
            }
            moved = false
        }
        delete keysDown[deletedKey]
        deletedKey = ""
        let undoKey = MyGame.screens['custom-controls'].controls.undo;
        let resetKey = MyGame.screens['custom-controls'].controls.reset;
        if(keysDown[undoKey]){
            reportEvent({
                type: 'undo',
                key: undoKey,
            })
            delete keysDown[undoKey];
        }
        if(keysDown[resetKey]){
            reportEvent({
                type: 'reset',
                key: resetKey,
            })
            delete keysDown[resetKey];
        }
        if (keysDown['Escape']) {
            MyGame.game.showScreen('level-select')
            MyGame.assets['background'].pause()
            delete keysDown['Escape'];
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