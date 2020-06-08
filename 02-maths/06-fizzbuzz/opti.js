/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function(i) {
    while(i++ < 100) {
        let msg = "";
        i % 3 || (msg += "Fizz");
        i % 5 || (msg += "Buzz");
        console.log(msg || i);
        };
})(0);
