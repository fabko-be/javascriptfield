/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

        let template = document.querySelector("#tpl-hero");
        
        xmen.forEach(element => {

            let clone = template.content.cloneNode(true);
            
            clone.querySelector(".name").innerHTML = element.name;
            clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
            clone.querySelector(".powers").innerHTML = element.abilities;

            document.getElementById("target").appendChild(clone);

    });

};

    document.getElementById("run").addEventListener("click", ()=>{
        
        xmensRecup();

    });

})();
