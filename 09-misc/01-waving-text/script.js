/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let input = new String(document.getElementById("target").innerHTML);
    let chars = Array.from(input);

    let output = document.getElementById("target");
    let sizeArr = [12, 16, 20, 24, 28, 24, 20, 16];
    let outputArr = [];

    document.getElementById("target").innerHTML="";

    chars.forEach((element) => {
        let x = (outputArr.length % 8);
            outputArr.push('<span style="font-size:' + sizeArr[x] + 'px">' + element + '</span>');
    });

    outputArr = outputArr.join("");
    output.innerHTML = outputArr;

})();
