/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", () => {

        var adj = Array.from(adjectives);

        function getRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return number = Math.floor(Math.random() * (max - min + 1)) + min ;
        }


        maxNb = birds.length -1;
        maxNbAdj = adj.length -1;
        femBirds = birds[getRandomInt(0, maxNb)];
        aleAdj = adj[getRandomInt(0 , maxNbAdj)];

        console.log(femBirds.fem);
        console.log(aleAdj);

        if(femBirds.fem == true){
            console.log ("La " + birds[femBirds] + " " + aleAdj + "e.");
        } else {
            console.log ("Ho nooooo !");
        }

    });

        // if (birds[femBirds].fem !== undefined){
        //         console.log(birds[femBirds] + " " + aleAdj +"e.");
        //     } else {
        //         console.log(birds[femBirds] + " " + aleAdj)
        //     }
        // });
        // console.log(birds[getRandomInt(0 , maxNb)]);
        // console.log(adj[getRandomInt(0 , maxNbAdj)]);
})();
