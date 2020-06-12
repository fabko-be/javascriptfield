/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
            
        let lgt;
        let max = 10;
        let counterJs;
        document.getElementById("pass-one").maxLength = 10;


        document.getElementById("pass-one").addEventListener("keyup", ()=> {
            
            let passone = document.getElementById("pass-one").value;
            lgt = passone.length;
            counterJs = lgt+"/"+max;
            document.getElementById("counter").innerHTML = counterJs;

        
        });

})();
