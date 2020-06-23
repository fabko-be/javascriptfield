/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
    // Récupération de la valeur entrée dans la variable num    
    let num = Number(document.getElementById("number").value);
    // Création d'un array pour la variable num
    if(num == 0 || num < 0){
        alert("Factoriel de 0 est 1, pas de factoriel pour les nombres négatifs");
    } else {
    let tabArr = [num];
    // Boucle while qui push la variable minus dans l'array créé,
    // La variable minus = num-1 tant que num est plus grand que 1
    // pour 4, la boucle intégrera donc 4 (Sa valeur initiale) puis 3 2 et 1
    
    

    while (num>1){
        let minus = num-1;
        tabArr.push(minus);
        num--;
    };

    alert(tabArr);
    let lastArr = tabArr.length;
    let final = num;

    for(i=lastArr; i > 1; i--){
        let result = (final * (i-1));
        final = (final + result);
    }
    alert(final);
}
});


})();
