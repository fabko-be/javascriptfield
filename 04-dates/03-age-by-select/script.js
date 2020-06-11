/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {
        

        // Principe :
        // récupération de la date du jour
        // récupération sous type de caractère des jours et mois entrés
        // récupération de l'année entrée type nombre
        // Création de la variable age = année en cours - année entrée

        // Récupération du jour et du mois actuel sous forme de chaine de caractère (Ajout de +1 pour le mois car Janvier = 0)
        // 4 boucles IF, si mois ou année entrée ou actuelle font moins de 2 caractères, ajouter 0 devant (Pas certains de la nécéssité pour les mois -_-')
        // bdCalc = Concatainage du mois et de l'année entrée + conversion en nombre
        // todayCalc = concatainage du mois et de l'année actuelle + conversion en nombre
        // Si bdCalc - TodayCalc (exemple  0310 (10 mars) - 0610 (10 Juin) est plus petit ou = a 0 alors afficher Age)
        // Sinon afficher Age - 1


        //récupération de la date du jour + 3 entrées de la feuille
        var today = new Date();
        var dobDay = String(document.getElementById("dob-day").value);
        var dobMonth = String(document.getElementById("dob-month").value);
        var dobYear = document.getElementById("dob-year").value;
        //Calcul de l'âge en faisant Année actuelle - Année entrée
        var age = Number(today.getFullYear()) - Number(dobYear);
    
        //création de 2 variable récupérant les jours et mois actuels sous forme de chaine de catactère
        var todayDay = String(today.getDate());
        var todayMonth = String(today.getMonth() + 1);
    
        //Bloc IF pour ajouter un 0 devant les jours ou les mois ne comportant qu'un seul caractère
        if(todayDay.length < 2){
            todayDay = "0" + todayDay;
        }
        if(todayMonth.length < 2){
            todayMonth = "0" + todayMonth;
        }
        if(dobDay.length < 2){
            dobDay = "0" + dobDay;
        }
        if(dobMonth.length < 2){
            dobMonth = "0" + dobMonth;
        }
    
        //Variable ajoutant les deux chiffres du jour encodé derrière les deux chiffes du mois
        var bdCalc = dobMonth + dobDay;
        //Conversion de la chaine de caractères obtenue en nombre
        bdCalc = Number(bdCalc);
        //Même principe avec la date du jour
        todayCalc = todayMonth + todayDay; 
        //Conversion en nombre
        todayCalc = Number(todayCalc)
        //Boucle If testant le résultat, si la date entrée (MMJJ) - la date du jour (MMJJ)
        //est négatif alors renvoyer la variable age calculée précédement.
        if((bdCalc - todayCalc) <= 0){
            alert("Vous avez donc " + age + " ans.");

        //Si ce n'est pas le cas alors renvoyée la variable -1 car son anniversaire n'est pas encore passé cette année.
        } else {
            alert("Vous avez donc " + (age -1) + " ans.");
        }
        
})
})();
