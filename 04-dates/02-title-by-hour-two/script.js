/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    time = new Date();
    //Création de la date du jour
    hours = time.getHours();
    minutes = time.getMinutes();
    //Récupération de l'heure et des minutes du jour
    test = String(hours) + String(minutes);
    test = Number(test);
    //Conversion en chaine de caractère pour avoir le format HHMM, reconverti ensuite en Nombre
    if(test < 1730){
    //Si test est plus petit que 1730 alors afficher Hello
        document.getElementById("target").innerHTML = "Hello";
        } else {
    //Sinon afficher Good evening !
        document.getElementById("target").innerHTML = "Good evening";
    };

})();
