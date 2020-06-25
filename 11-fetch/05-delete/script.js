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
    document.querySelector("#run").addEventListener("click", () => {
        const id = document.querySelector("#hero-id").value;

        delHero();

        async function delHero() {
            const heroDel = await fetch(
                `${"http://localhost:3000/heroes" + "/"}${id}`,
                {
                    method: "DELETE",
                },
            );
            afterHero();
        }

        async function afterHero() {
            const recupList = await fetch("http://localhost:3000/heroes");
            const heroesList = await recupList.json();
            console.table(await heroesList);
        }
    });
})();
