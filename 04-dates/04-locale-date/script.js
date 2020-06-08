/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Récupération de la date du jour dans la variable d
    var d = new Date();
    // Mise en place des array pour les mois et les jours
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //Affichage des éléments vers l'id Target de la page HTML en se servant des array.
    document.getElementById("target").innerHTML = days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + ", " + d.getHours() + "h" + d.getMinutes() + ".";

})();
