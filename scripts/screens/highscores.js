MyGame.screens['high-scores'] = (function(game) {
    'use strict';
    const scoreOutput = document.getElementById("score-Output");
    
    function initialize() {
        document.getElementById('id-high-scores-back').addEventListener(
            'click',
            function() { game.showScreen('main-menu'); });

        document.getElementById('id-high-scores-reset').addEventListener(
            'click',
            function() {
                localStorage.clear();
                location.reload();

             });

        document.getElementById('id-high-scores-add').addEventListener(
        'click',
        function() { localStorage.setItem(localStorage.length,'20');
        location.reload();
    
    });
    }


    let scoreList = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        // console.log(value);
        scoreList.push(value)
    }
    scoreList.sort(function(a,b){return b-a;})
    for (let i = 0; i < 5; i++) {
        if (scoreList[i] == null) {
            break;
        }
        scoreOutput.innerHTML += `${scoreList[i]}<br/>`;
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
