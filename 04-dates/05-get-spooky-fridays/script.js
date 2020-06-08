/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
// Lancement du script sur un click
    document.getElementById("run").addEventListener("click", () =>{
// Array avec les mois de l'année sous forme texte
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // Récupération de l'année encodée
        var y = Number(document.getElementById("year").value);
        // Boucle tournant sur les mois de 0 (inclus) à 11 (inclus) -> Janvier - Décembre
        for(let i=0 ; i <= 11 ; i++){
            // Test sur l'année encodée, plus le mois défini dans la boucle, et la date du jour 13
            var d = new Date(y, i, 13);
            // Boucle si la date du jour est égal au 5ème jour (0 étant dimanche) alors renvoyer une alerte positive
            if(d.getDay() == 5){
                alert(months[d.getMonth()] + " has a 13th Friday !")
            } else {
                // Sinon renvoyer une alerte négative
            alert(months[d.getMonth()] +" doesn't have a 13th Friday 13");
            };
        } 
    })

    

})();
