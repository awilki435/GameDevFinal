//Dynamic loading

//------------------------------------------------------------------
//
// Purpose of this code is to bootstrap (maybe I should use that as the name)
// the rest of the application.  Only this file is specified in the index.html
// file, then the code in this file gets all the other code and assets
// loaded.
//
//------------------------------------------------------------------
MyGame.loader = (function() {
    'use strict';
    let scriptOrder = [{
            scripts: ['constants'],
            message: 'Constants loaded',
            onComplete: null
        }, {
            scripts: ['EnitiyCreator'],
            message: 'Entity Creator Loaded',
            onComplete: null
        }, {
            scripts: ['entity'],
            message: 'Entity Loaded',
            onComplete: null
        },{
            scripts: ['Components/animatedSprites'],
            message: 'Component: Animated Sprites has loaded',
            onComplete: null
        }, {
            scripts: ['Components/keyboard-controlled'],
            message: 'Component: Keyboard Controlled has loaded',
            onComplete: null
        }, {
            scripts: ['Components/position'],
            message: 'Component: Position has loaded',
            onComplete: null
        }, {
            scripts: ['Components/property'],
            message: 'Component: Property has loaded',
            onComplete: null
        }, {
            scripts: ['Components/type'],
            message: 'Component: Type has loaded',
            onComplete: null
        }, {
            scripts: ['game-model'],
            message: 'Game Model Loaded',
            onComplete: null
        }, {
            scripts: ['Systems/animatedSprites'],
            message: 'Animated Sprites Loaded',
            onComplete: null
        }, {
            scripts: ['Systems/input-keyboard'],
            message: 'Keyboard has loaded',
            onComplete: null
        }, {
            scripts: ['Render/background'],
            message: 'Background has loaded',
            onComplete: null
        }, {
            scripts: ['Screens/game'],
            message: 'Game has loaded',
            onComplete: null
        }, {
            scripts: ['Screens/credits'],
            message: 'Credits has loaded',
            onComplete: null
        }, {
            scripts: ['Screens/highscores'],
            message: 'High Scores has loaded',
            onComplete: null
        }, {
            scripts: ['Screens/levelselect'],
            message: 'Level Select has loaded',
            onComplete: null
        }, {
            scripts: ['Screens/mainmenu'],
            message: 'Main Menu has loaded',
            onComplete: null
        }, {
            scripts: ['Render/background'],
            message: 'Background has loaded',
            onComplete: null
        }, {
            scripts: ['Render/core'],
            message: 'Core has loaded',
            onComplete: null
        }, {
            scripts: ['Screens/game-play'],
            message: 'Gameplay has loaded',
            onComplete: null
        }
    ];

    let assetOrder = [{
            key: 'baba',
            source: '/assets/images/babaSheet.png'
        }, {
            key: 'bb',
            source: '/assets/images/BigBlue.png'
        },{
            key: 'flag',
            source: '/assets/images/flag.png'
        }, {
            key: 'floor',
            source: '/assets/images/floor.png'
        }, {
            key: 'flowers',
            source: '/assets/images/flowers.png'
        },{
            key: 'grass',
            source: '/assets/images/grass.png'
        }, {
            key: 'hedge',
            source: '/assets/images/hedge.png'
        }, {
            key: 'lava',
            source: '/assets/images/lava.png'
        },{
            key: 'rock',
            source: '/assets/images/rock.png'
        }, {
            key: 'water',
            source: '/assets/images/water.png'
        }, {
            key: 'baba-word',
            source: '/assets/images/word-baba.png'
        },{
            key: 'flag-word',
            source: '/assets/images/word-flag.png'
        }, {
            key: 'is-word',
            source: '/assets/images/word-is.png'
        }, {
            key: 'kill-word',
            source: '/assets/images/word-kill.png'
        },{
            key: 'lava-word',
            source: '/assets/images/word-lava.png'
        }, {
            key: 'push-word',
            source: '/assets/images/word-push.png'
        }, {
            key: 'rock-word',
            source: '/assets/images/word-rock.png'
        },{
            key: 'sink-word',
            source: '/assets/images/word-sink.png'
        }, {
            key: 'stop-word',
            source: '/assets/images/word-stop.png'
        }, {
            key: 'wall-word',
            source: '/assets/images/word-wall.png'
        },{
            key: 'water-word',
            source: '/assets/images/word-water.png'
        }, {
            key: 'win-word',
            source: '/assets/images/word-win.png'
        }, {
            key: 'you-word',
            source: '/assets/images/word-you.png'
        }, {
            key: 'background',
            source: '/assets/sounds/background_music.mp3'
        },{
            key: 'cleared',
            source: '/assets/sounds/level_cleared.mp3'
        }, {
            key: 'movement',
            source: '/assets/sounds/movement.mp3'
        }, {
            key: 'win',
            source: '/assets/sounds/win_condition_changed.mp3'
        }
    ];

    //------------------------------------------------------------------
    //
    // Helper function used to load scripts in the order specified by the
    // 'scripts' parameter.  'scripts' expects an array of objects with
    // the following format...
    //    {
    //        scripts: [script1, script2, ...],
    //        message: 'Console message displayed after loading is complete',
    //        onComplete: function to call when loading is complete, may be null
    //    }
    //
    //------------------------------------------------------------------
    function loadScripts(scripts, onComplete) {
        //
        // When we run out of things to load, that is when we call onComplete.
        if (scripts.length > 0) {
            let entry = scripts[0];
            require(entry.scripts, function() {
                console.log(entry.message);
                if (entry.onComplete) {
                    entry.onComplete();
                }
                scripts.shift();    // Alternatively: scripts.splice(0, 1);
                loadScripts(scripts, onComplete);
            });
        } else {
            onComplete();
        }
    }

    //------------------------------------------------------------------
    //
    // Helper function used to load assets in the order specified by the
    // 'assets' parameter.  'assets' expects an array of objects with
    // the following format...
    //    {
    //        key: 'asset-1',
    //        source: 'asset/.../asset.png'
    //    }
    //
    // onSuccess is invoked per asset as: onSuccess(key, asset)
    // onError is invoked per asset as: onError(error)
    // onComplete is invoked once per 'assets' array as: onComplete()
    //
    //------------------------------------------------------------------
    function loadAssets(assets, onSuccess, onError, onComplete) {
        //
        // When we run out of things to load, that is when we call onComplete.
        if (assets.length > 0) {
            let entry = assets[0];
            loadAsset(entry.source,
                function(asset) {
                    onSuccess(entry, asset);
                    assets.shift();    // Alternatively: assets.splice(0, 1);
                    loadAssets(assets, onSuccess, onError, onComplete);
                },
                function(error) {
                    onError(error);
                    assets.shift();    // Alternatively: assets.splice(0, 1);
                    loadAssets(assets, onSuccess, onError, onComplete);
                });
        } else {
            onComplete();
        }
    }

    //------------------------------------------------------------------
    //
    // This function is used to asynchronously load image and audio assets.
    // On success the asset is provided through the onSuccess callback.
    // Reference: http://www.html5rocks.com/en/tutorials/file/xhr2/
    //
    //------------------------------------------------------------------
    function loadAsset(source, onSuccess, onError) {
        let xhr = new XMLHttpRequest();
        let fileExtension = source.substr(source.lastIndexOf('.') + 1);    // Source: http://stackoverflow.com/questions/680929/how-to-extract-extension-from-filename-string-in-javascript

        if (fileExtension) {
            xhr.open('GET', source, true);
            xhr.responseType = (fileExtension === 'txt') ? 'text' : 'blob';

            xhr.onload = function() {
                let asset = null;
                if (xhr.status === 200) {
                    if (fileExtension === 'png' || fileExtension === 'jpg') {
                        asset = new Image();
                    } else if (fileExtension === 'mp3') {
                        asset = new Audio();
                    } else if (fileExtension === 'txt') {
                        if (onSuccess) { onSuccess(xhr.responseText); }
                    }
                    else {
                        if (onError) { onError('Unknown file extension: ' + fileExtension); }
                    }
                    if (xhr.responseType === 'blob') {
                        if (fileExtension === 'mp3') {
                            asset.oncanplaythrough = function() {
                                asset.oncanplaythrough = null;  // Ugh, what a hack!
                                window.URL.revokeObjectURL(asset.src);
                                if (onSuccess) { onSuccess(asset); }
                            };
                        }
                        else {  // not terrific assumption that it has an 'onload' event, but that is what we are doing
                            asset.onload = function() {
                                window.URL.revokeObjectURL(asset.src);
                                if (onSuccess) { onSuccess(asset); }
                            };
                        }
                        asset.src = window.URL.createObjectURL(xhr.response);
                    }
                } else {
                    if (onError) { onError('Failed to retrieve: ' + source); }
                }
            };
            xhr.send();
        } else {
            if (onError) { onError('Unknown file extension: ' + fileExtension); }
        }
    }

    //------------------------------------------------------------------
    //
    // Called when all the scripts are loaded, it kicks off the demo app.
    //
    //------------------------------------------------------------------
    function mainComplete() {
        console.log('It is all loaded up');
        MyGame.game.initialize();
    }

    //
    // Start with loading the assets, then the scripts.
    console.log('Starting to dynamically load project assets');
    loadAssets(assetOrder,
        function(source, asset) {    // Store it on success
            MyGame.assets[source.key] = asset;
        },
        function(error) {
            console.log(error);
        },
        function() {
            console.log('All game assets loaded');
            console.log('Starting to dynamically load project scripts');
            loadScripts(scriptOrder, mainComplete);
        }
    );

}());
