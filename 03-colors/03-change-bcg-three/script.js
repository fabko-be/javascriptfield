/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        document.getElementById("run").addEventListener("click", () => {
        //Fonction permettant d'obtenir un entier entre min et max
        function getRandomInt(min, max) {
        //min = ceil -> Arrondi vers le bas donc 0 possible
        //max = floor -> Arrondi vers le haut donc 255 possible
        min = Math.ceil(min);
        max = Math.floor(max);
        //Retourne un entier entre min (inclus) et max (inclus)...
        return Math.floor(Math.random() * (max - min + 1) ) + min;

        };
        // Lacement de la fonction pour chaque variable en introduisant les min / max voulu
        var red = getRandomInt(0,255);
        var green = getRandomInt(0,255);
        var blue = getRandomInt(0,255);
        // Récupération des variables pour les envoyer vers le backgroundColor du body
        document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

});

})();
