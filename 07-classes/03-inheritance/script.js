/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class cat extends Animal {
        constructor (name) {
            super();
            this.name = name;
            this.constructor.greeting = "Miaou houman !";
        }
    }
    class dog extends Animal {
        constructor (name) {
            super();
            this.name = name
            this.constructor.greeting = "waaaaouaaf";
        }
    }

    document.getElementById("run").addEventListener("click", ()=> {
    let cat1 = new cat ("Minou");
    let dog1 = new dog ("Rex");
    
    console.log(cat1.sayHello());
    console.log(dog1.sayHello());
});
})();
