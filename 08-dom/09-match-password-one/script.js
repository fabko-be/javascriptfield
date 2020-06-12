/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {

        // Cible les deux éléments à tester
        let x = document.getElementById("pass-one")
        let y = document.getElementById("pass-two")

    
        // Si la valeur de x est EXACTEMENT la même que y, alors envoyer le message
        if(x.value === y.value){
            console.log("Passwords matches !")
            // Sinon changer la couleur des bordures en rouge
        } else {
            x.style.borderColor = "red";
            y.style.borderColor = "red";
        }
    });

})();