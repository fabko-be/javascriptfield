/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {

        let list = [];
        let totalList = 0;
        // Fonction retourne un entier arrondi entre 1 et 100 (inclus)
        function getRandomInt(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return number = Math.floor(Math.random() * (max - min + 1)) + min ;
        }
        // Création du random Array de 10 entrées
        for(i=1; i <= 10; i++){
            list.push(getRandomInt(1,100));
        };
        // Pour chaque élément, renvoyer sa valeur dans l'id valant n-(index+1)
        // Incrémenter par la même occasion la variable calculant le total
        list.forEach((value, i) => {
            document.getElementById("n-"+(i +1)).innerHTML=value;
            totalList += value;
        })
        // Constante pour comparaison des nombres dans l'array que l'on vient de créer
        const cmp = (a,b) => a - b;
        // Tri de l'array par ordre croissant
        list = list.sort(cmp);
        // Renvoi des données dans les champs voulu, min, max, sommes et moyenne
        document.getElementById("min").innerHTML = list[0];
        document.getElementById("max").innerHTML = list[9];
        document.getElementById("sum").innerHTML = totalList;
        document.getElementById("average").innerHTML = (totalList / 10);
    });

})();
