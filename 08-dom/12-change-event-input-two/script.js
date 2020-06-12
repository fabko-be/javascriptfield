/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let lgt;
    let max = 8;
    let counterJs;
    let exp = /^(?=.*[A-Za-z])(?=.*\d*\d)[A-Za-z\d]{8}$/gi;
    
  
    document.getElementById("pass-one").maxLength = 8;


    document.getElementById("pass-one").addEventListener("keyup", ()=> {
        
        let passone = document.getElementById("pass-one").value;
        lgt = passone.length;
        counterJs = lgt+"/"+max;
        let test = passone.match(exp)
        console.log(test);
        if(test !== null){
        document.getElementById("validity").innerHTML = "ok";
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        };
    });

})();
