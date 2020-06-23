/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function xmensRecup(){
        
        let response = await fetch("http://localhost:3000/heroes");
        xmen = await response.json();

        addPowers = document.getElementById("hero-powers").value;

        newXmen = {
            id : xmen.length + 1,
            name : document.getElementById("hero-name").value,
            alterEgo : document.getElementById("hero-alter-ego").value,
            abilities : addPowers.split(",")
        }

        xmen.push(newXmen);

        console.table(xmen);
        
    }

    document.getElementById("run").addEventListener("click", ()=>{
        
        xmensRecup();

    });
})();
