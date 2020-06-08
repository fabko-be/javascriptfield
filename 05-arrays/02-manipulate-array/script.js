/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {

        fruits.pop();
        // Supprime le dernier élément
        fruits.shift();
        // Supprime le premier élément
        fruits.push("kiwi");
        // Ajoute kiwi à la fin de l'array
        fruits.unshift("banana")
        // Ajoute Banana au début de l'array
        alert(fruits);
        
    })
    // your code here

})();
