// input controller with continuous and single action capabiliy
MyGame.input.Keyboard = function () {
    let that = {
        keys: {},
        keysReleased:{},
        handlers: {},
        singleHandlers: {}
        // keys relesesed
    };

    function keyPress(e) {
        that.keys[e.key] = e.timeStamp;
    }

    function keyRelease(e) {
        that.keysReleased[e.key] = e.timeStamp;
        delete that.keys[e.key];
    }

    that.update = function (elapsedTime) {
        // console.log(that.keysReleased);
        for (let key in that.keys) {
            if (that.keys.hasOwnProperty(key)) {
                if (that.handlers[key]) {
                    that.handlers[key](elapsedTime);
                }
            }
        }
        for (let key in that.keysReleased) {
            if (that.keysReleased.hasOwnProperty(key)) {
                if (that.singleHandlers[key]) {
                    that.singleHandlers[key](elapsedTime);
                }
            }
        }
        that.keysReleased = {};
    };

    that.register = function (key, handler) {
        that.handlers[key] = handler;
    };

    // register keyup
    that.registerkeyReleased = function (key, handler) {
        that.singleHandlers[key] = handler;
    };

    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    return that;
};
