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
        let heroesArr = await [getData()];
        console.log(await getData());
        console.log(await createXmen());
    });

    async function getData() {
        const response = await fetch("http://localhost:3000/heroes");
        const xmen = await response.json();
        heroesArr = xmen;
        return xmen;
    }

    async function createXmen() {
        const newXmen = await {
            id: heroesArr.lenght + 1,
            name: document.querySelector("#hero-name").value,
            alterEgo: document.querySelector("#hero-alter-ego").value,
            abilities: document.querySelector("#hero-powers").value.split(","),
        };
        return newXmen;
    }

    //     async function getData(data){
    //         return data;
    //     }

    //     async function sendData(){
    //         await fetch("http://localhost:3000/heroes", {
    //             method : "POST",
    //             body: JSON.stringify(newXmen),
    //             headers : {
    //                 "content-type" : "application/json"
    //             }
    //         })
    //         await ((response)=> {
    //             try { return response.json()}
    //             catch { return (e) => { console.error(e.message)}}
    //         })
    //     }

    //         console.log(getData(xmen));
    // const addName = document.querySelector("#hero-name").value;
    // const addPowers = document.querySelector("#hero-powers").value;
    // const alterEgo = document.querySelector("#hero-alter-ego").value;

    // if (addName == "" || alterEgo == "" || addPowers == "") {
    //     alert("All fields are required");
    // } else {
    //     newXmen = {
    //         id: xmen.length + 1,
    //         name: addName,
    //         alterEgo,
    //         abilities: addPowers.split(","),
    //     };
    //     response.send(newXmen);
    //     xmen.push(newXmen);

    //     console.table(xmen);
    // }
    // }
})();
