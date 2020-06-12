/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let table = "<table>"
    let x = 1

        for (let i = 1 ; i <= 10 ; i++){
        table += "<tr>";
        
            for (x = 1 ; x <= 10 ; x ++){
                table += "<td>" + x * i + "</td>"
            }
        
        table += "</tr>"
        }
    table += "</table>"
    document.getElementById("target").innerHTML = table;
})();
