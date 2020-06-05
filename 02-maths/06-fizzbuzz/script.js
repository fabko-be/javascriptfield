/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let result = "";
// Boucle pour lancer une variable i de 1 à 100
    for(i=1 ; i <= 100 ; i++){
        // Premier IF qui test sur le reste d'une division par 3 est 0 et par 5 est 0
        // Dans ce cas, il affiche dans la console le nombre (i) ainsi que la consigne demandée.
        if ((i%3) == 0 && (i%5) == 0) {
            result = i + " fizzbizz";
            // Même principe mais uniquement pour tester le reste d'une division par 3
        } else if ((i%3) == 0) {
            result = i + " fizz";
            // Et enfin le même test pour le reste d'une division par 5
        } else if ((i%5) == 0) {
            result = i + " bizz";
            // Et pour le fun, un dernier else qui renvoie juste une référence aux minions :)
        } else {
            result = i + " whaaaaaat ?";
        };
        // Affichage du résultat dans la console pour chaque itération de la boucle For
        console.log(result);
     };

})();
