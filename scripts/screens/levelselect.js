MyGame.screens['level-select'] = (function(game) {
    'use strict';
    
    function initialize() {
        document.getElementById('id-level-select-back').addEventListener(
            'click',
            function() { game.showScreen('main-menu'); 
        });

        let levelData = MyGame.assets['level-all'].split('\n');
        // console.log(levelData);
        console.log(MyGame.assets);

        let levels = [];

        // Find levels
        for (let i = 0; i < levelData.length; i++) {
            let line = levelData[i];
            if (line.includes("almost")) {
                levels.push({startline:i,name: line})
            }else if (line.includes('Level')){
                levels.push({startline:i,name: line})
            }
        }
        // Find grid size
        for (let i = 0; i < levels.length; i++) {
            let start = levels[i].startline;
            let number = levelData[start+1].match(/\d+\.\d+|\d+/)[0];
            levels[i].gridSize = parseInt(number);
        }
        // Get first set of level data
        for (let i = 0; i < levels.length; i++) {
            let grid = [];
            let line = levels[i].startline + 2;
            // console.log('grid',levels[i].gridSize);
            let end = line + levels[i].gridSize;
            // console.log('start',line, 'end',end);
            for (line; line < end; line++) {
                grid.push(levelData[line].split(''));  
            }
            levels[i].static = grid;
        }
        // get second set of level data
        for (let i = 0; i < levels.length; i++) {
            let grid = [];
            let line = levels[i].startline + 22;
            // console.log('grid',levels[i].gridSize);
            let end = line + levels[i].gridSize;
            // console.log('start',line, 'end',end);
            for (line; line < end; line++) {
                grid.push(levelData[line].split(''));  
            }
            levels[i].obj = grid;
        }

        // console.log(levels);
        //
        // Setup each of menu events for the screens

        let buttonContainer = document.getElementById("level-select");
        levels.map(name => {
        let button = document.createElement("button");
        button.innerText = name.name;
        buttonContainer.appendChild(button);

        button.addEventListener("click", function() {
            console.log("Button " + name.name + " was clicked.");
            game.showScreen('game-play');
            MyGame.screens['game-play'].populateMap(name);
            
        });
        

      });
    }
    
    function run() {
        //
        // I know this is empty, there isn't anything to do.
    }
    
    return {
        initialize : initialize,
        run : run
    };
}(MyGame.game));
