/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    async function check(){
        
        try {
            console.table (await window.lib.getPersons());
        } 
        catch (e) {
            console.log("Error ", e.message);
        }
    };

    document.getElementById("run").addEventListener("click",() => {


        check();
        // window.lib.getPersons()
        // .catch(console.log("Error"))
        // .then(() => console.log())

    });

})();
