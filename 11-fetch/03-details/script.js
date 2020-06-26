/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function xmensRecup() {
        const response = await fetch("http://localhost:3000/heroes");
        const xmens = await response.json();

        const pickOne = document.querySelector("#hero-id").value;
        const chosenOne = xmens[pickOne - 1];

        const template = document.querySelector("#tpl-hero");

        if (pickOne <= xmens.length && pickOne > 0) {
            const clone = template.content.cloneNode(true);

            clone.querySelector(".name").innerHTML = chosenOne.name;
            clone.querySelector(".alter-ego").innerHTML = chosenOne.alterEgo;
            clone.querySelector(".powers").innerHTML = `${chosenOne.abilities.join(", ")}.`;

            document.querySelector("#target").appendChild(clone);
        } else {
            alert(`Seulement des nombres de 1 à ${xmens.length}`);
        }
    }

    document.querySelector("#run").addEventListener("click", () => {
        xmensRecup();
    });
})();
