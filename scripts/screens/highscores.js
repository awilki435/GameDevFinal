MyGame.screens['custom-controls'] = (function(game) {
    'use strict';

    const defaultControls = {right:'d',left:'a',up:"w",down:"s",undo:"z",reset:"r"};
    let controls = {};
    
    function initialize() {
        // Determine if custom or default controls
        if (!localStorage['controls']) {
            localStorage['controls'] = JSON.stringify(defaultControls);
        }else{
            controls = JSON.parse(localStorage.getItem('controls'));
        }
        const upButton = document.getElementById('id-custom-controls-up');
        const downButton = document.getElementById('id-custom-controls-down');
        const rightButton = document.getElementById('id-custom-controls-right');
        const leftButton = document.getElementById('id-custom-controls-left');
        const undoButton = document.getElementById('id-custom-controls-undo');
        const resetButton = document.getElementById('id-custom-controls-map-reset');
        function setButtonText(){
            upButton.textContent = `Move Up: ${controls.up}`;
            downButton.textContent = `Move Down: ${controls.down}`;
            rightButton.textContent = `Move Right: ${controls.right}`;
            leftButton.textContent = `Move Left: ${controls.left}`;
            undoButton.textContent = `Move Undo: ${controls.undo}`;
            resetButton.textContent = `Move Reset: ${controls.reset}`;
        }
        
        // Get and set lables
        setButtonText();
        console.log(localStorage.controls);
        console.log(controls);

        // document.getElementById('id-custom-controls-up').textContent = localStorage['controls']; 
        let commandId = null;
        document.addEventListener('keydown', (event) => {
            let firstKeyStroke = event.key;
            console.log(`The first key stroke was: ${firstKeyStroke}`);
            switch (commandId) {
                case 'up':
                    controls.up = firstKeyStroke;
                    commandId = null;
                    break;
                case 'down':
                    controls.down = firstKeyStroke;
                    commandId = null;
                    break;
                case 'right':
                    controls.right = firstKeyStroke;
                    commandId = null;
                    break;
                case 'left':
                    controls.left = firstKeyStroke;
                    commandId = null;
                    break;
                case 'undo':
                    controls.undo = firstKeyStroke;
                    commandId = null;
                    break;
                case 'reset':
                    controls.reset = firstKeyStroke;
                    commandId = null;
                    break;
                                                                        
                default:
                    commandId = null;
            }
            setButtonText();
        });

        // Reset UP Controls
        upButton.addEventListener(
            'click',
            function() {
                console.log(`Custom Controls: Move UP control being changed...`);
                commandId = 'up';
                });

        // Reset DOWN Controls
        downButton.addEventListener(
            'click',
            function() {
                console.log(`Custom Controls: Move DOWN control being changed...`);
                commandId = 'down';
                 });

        // Rest RIGHT Controls
        rightButton.addEventListener(
        'click',
        function() {
            console.log(`Custom Controls: Move RIGHT control being changed...`);
                commandId = 'right';
                });

        // Reset LEFT Controls
        leftButton.addEventListener(
            'click',
            function() {
                console.log(`Custom Controls: Move LEFT control being changed...`);
                commandId = 'left';
                });

        // Reset UNDO Controls
        undoButton.addEventListener(
            'click',
            function() {
                console.log(`Custom Controls: UNDO control being changed...`);
                commandId = 'undo';
                });
        
        // Reset Map RESET Controls
        resetButton.addEventListener(
            'click',
            function() {
                console.log(`Custom Controls: RESET map control being changed...`);
                commandId = 'reset';
                });




        // Game Menu Controls
        document.getElementById('id-custom-controls-back').addEventListener(
            'click',
            function() { game.showScreen('main-menu');
            localStorage['controls'] = JSON.stringify(controls);
        });

        document.getElementById('id-custom-controls-reset').addEventListener(
            'click',
            function() {
                console.log(`Custom Controls: Local storage cleared`);
                localStorage.clear();
                console.log(`Custom Controls: default controls restored`);
                controls = {};
                controls = defaultControls;
                localStorage['controls'] = JSON.stringify(defaultControls);
                setButtonText();
                
                 });

    }


    // let scoreList = [];
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const value = localStorage.getItem(key);
    //     // console.log(value);
    //     scoreList.push(value)
    // }
    // scoreList.sort(function(a,b){return b-a;})
    // for (let i = 0; i < 5; i++) {
    //     if (scoreList[i] == null) {
    //         break;
    //     }
    //     scoreOutput.innerHTML += `${scoreList[i]}<br/>`;
    // }

    
    
    
    function run() {
        //
        // I know this is empty, there isn't anything to do.
    }
    
    return {
        initialize : initialize,
        run : run
    };
}(MyGame.game));
