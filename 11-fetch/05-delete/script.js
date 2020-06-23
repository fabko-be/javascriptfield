/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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

        idXmen = document.getElementById("hero-id").value;
        

        if(idXmen < xmen.length){
            xmen.splice(idXmen-1, 1);
        } else {
            alert("Seulement des id de 1 à " + xmen.length);
        }

        console.table(xmen);
        
    }

    document.getElementById("run").addEventListener("click", ()=>{
        
        xmensRecup();

    });
})();
