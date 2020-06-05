/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        
        let number = document.getElementById("numbers").value;
        // Récupération de la chaine de caractères
        let numberArr = number.split(",");
        // var.split("Element séparateur") permet de séparer la chaine de caractère en plusieurs éléments
        const cmp = (a,b) => a - b;
        // Variable appelant la fonction (a,b) => a - b
        // Elle compare chaque nombre aux autres dans l'array, si a-b est négative a sera avant b, si c'est égal à 0 aucune importance, si c'est positif alors a sera placé après b !
        let sorted = numberArr.sort(cmp);
        // var.sort trie les éléments de l'array grace à l'introduction de la fonction cmp dans ce cas.
        alert(sorted);

    });

})();
