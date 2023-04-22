MyGame.screens['game-play'] = (function(manager, graphics, input) {
    'use strict';

    let cancelNextRequest = false;
    let lastTimeStamp;
    let model = null;

    //------------------------------------------------------------------
    //
    // One time initialization...nothing to do here.
    //
    //------------------------------------------------------------------
    function initialize() {
        console.log('game initializing...');
        
    }

    //------------------------------------------------------------------
    //
    // This is the Game Loop update function!
    //
    //------------------------------------------------------------------
    function update(elapsedTime) {
        model.update(elapsedTime);
    }

    //------------------------------------------------------------------
    //
    // This is the Game Loop function!
    //
    //------------------------------------------------------------------
    function gameLoop(time) {
        
        update(time - lastTimeStamp);
        lastTimeStamp = time;
        
        if (!cancelNextRequest) {
            requestAnimationFrame(gameLoop);
        }
    }

    function populateMap(data){
        model.setUpLevel(data)
    }

    function run() {
        model = GameModel();
        //
        // Start the animation loop
        cancelNextRequest = false;
        lastTimeStamp = performance.now();
        requestAnimationFrame(gameLoop);
    }

    return {
        initialize : initialize,
        run : run,
        populateMap:populateMap
    };
}(MyGame.manager, MyGame.graphics, MyGame.input));
