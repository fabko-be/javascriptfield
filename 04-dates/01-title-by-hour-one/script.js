/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var time = new Date();
    //new Date() heure courante dans le fuseau horaire local.
    //format LetterDay LetterMonth DayNumber Year Current Time (Hour / Minutes / secondes) and Current Time Zone
    var hours = time.getHours();
    var msg;
    if(hours < 18){
        msg = "Hello";
    } else {
        msg = "Good evening";
    };

    document.getElementById("target").innerHTML = msg;


    // to change the content of a tag: document.getElementById("target").innerHTML = "new-value"

    // your code here

})();
