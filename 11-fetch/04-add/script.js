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

    document.querySelector("#run").addEventListener("click", async () => {
        const checkName = document.querySelector("#hero-name").value;
        const checkEgo = document.querySelector("#hero-alter-ego").value;
        const checkPow = document.querySelector("#hero-powers").value;
        if (checkName == "" || checkEgo == "" || checkPow == "") {
            alert("All fields must be filed");
        } else {
            addHero();
        }

        async function createXmen() {
            const response = await fetch("http://localhost:3000/heroes");
            const xmen = await response.json();
            const newXmen = {
                id: xmen.length + 1,
                name: checkName,
                alterEgo: checkEgo,
                abilities: checkPow.split(","),
            };
            return newXmen;
        }

        async function addHero() {
            const pushHero = await fetch("http://localhost:3000/heroes", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(await createXmen()),
            });
            console.table(
                await (await fetch("http://localhost:3000/heroes")).json(),
            );
            return pushHero;
        }
    });
})();
