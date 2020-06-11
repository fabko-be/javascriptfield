/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // Construction de la classe personne
    class person {
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
    // method get name, qui sera utilisé pour l'accès aux données de l'objet name
    get name(){
        return `${this.firstname} ${this.lastname}`;
    }
    // method set name, qui sera utilisée pour la modification de l'objet name
    set name(nomComplet){
        let splName = nomComplet.split(" ");
        this.firstname = splName[0];
        this.lastname =  splName[1];
    }
}

document.getElementById("run").addEventListener("click", () => {
    let me = new person ("Fabian", "Quoidbach");
    console.log (me.name);
    me.name = "Truc Much";
    console.log (me.name);
})
})();
