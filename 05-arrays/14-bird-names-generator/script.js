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
        // Création d'un array depuis le Set Adjectives
        var adj = Array.from(adjectives);
        // Fonction pour généré un entier aléation entre min et max (inclus tous les deux)
        function getRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return number = Math.floor(Math.random() * (max - min + 1)) + min ;
        }
        // Variable pour généré un numéro d'index Max
        maxNb = birds.length -1;
        maxNbAdj = adj.length -1;
        // Variable stockant l'oiseau choisi au hasard
        femBirds = birds[getRandomInt(0, maxNb)];
        // Variable stockant l'adjectif choisi au hasard
        aleAdj = adj[getRandomInt(0 , maxNbAdj)];
        // Si femBirds.fem à un champ fem alors afficher l'oiseau suivi de l'adjectif au féminin
        if(femBirds.fem == true){
            console.log ("La " + femBirds.fem + " " + aleAdj + "e.");
        // Sinon afficher le nom de l'oiseau choisi sui de l'adjectif au masculin
        } else {
            console.log ("Le " + femBirds.name + " " + aleAdj + ".");
        }

    });
})();
