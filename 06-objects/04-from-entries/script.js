/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    document.getElementById("run").addEventListener("click", () => {

        // Création d'un array depuis l'array Keys, en y intégrant les valeurs de keys et de values, 

        let objArr = keys.map(function (element, i) {
            return [keys[i], values[i]];
        });

        // Création de l'object depuis l'array objArr
        
            let obj = Object.fromEntries(objArr);
            console.log(obj);
    })
})();
