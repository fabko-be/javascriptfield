/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Déclaration de la classe person
    class person {
        // constructeur de la classe (prenom, nom) ou firstname = firstname et lastname = lastname
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        };
        // Method appelant le console log lié à la classe person
        sayHello() {
            console.log ("Hello, " + this.firstname + " " + this.lastname + " !");
        };
    };

    document.getElementById("run").addEventListener("click", () => {
        // Définirtion de la variable me comme nouvelle personne
        let me = new person ("Truc", "Much");
        me.sayHello();
    });
})();
