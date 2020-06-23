/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click",() =>{

        // Début de l'index de l'array étant a 0, i = 0 et fin de l'index = length-1 (donc pas de = dans la boucle comme ça elle s'arrête au moment voulu).
        // Afficher l'élément dont l'index est égal à i tant que tous les index ne sont pas passés.
        for(i=0 ; i < fruits.length ; i++){
            console.log(fruits[i]);
        }
    });

})();
