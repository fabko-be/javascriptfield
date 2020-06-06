/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {
        
        function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        setInterval(funcion () {

            var red = getRandomInt(0, 255);
            var green = getRandomInt(0, 255);
            var blue = getRandomInt(0, 255);
        
        document.querySelector("body").style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
        
        }, onclick);

    });

})();
