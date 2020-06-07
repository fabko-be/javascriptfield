
    var today = new Date();
    var dobDay = "2";
    var dobMonth = "7";
    var dobYear = "1987";

    var age = Number(today.getFullYear()) - Number(dobYear);

    alert(age);

    var todayDay = String(today.getDate());
    var todayMonth = String(today.getMonth() + 1);
    var todayYear = String(today.getFullYear());

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

    var bdCalc = dobMonth + dobDay;
    bdCalc = Number(bdCalc);
    alert(bdCalc);

    todayCalc = todayMonth + todayDay; 
    alert(todayCalc);

    bdCalc = Number(bdCalc);
    todayCalc = Number(todayCalc)

    if((bdCalc - todayCalc) <= 0){
        alert(age);
    } else {
        alert(age -1);
    }

    
    // alert("vous êtes né le " + dobDay + " " + dobMonth + " " + dobYear );

    // var startAge = ((Number(today.getYear())+1900) - Number(dobYear));
    // alert(startAge);

    // var startMonth = ((Number(today.getMonth())+1) - Number(dobMonth));
    // alert(startMonth);

    // var startDay = (Number(today.getDate()) - Number(dobDay));
    // alert(startDay);

    // if(startMonth >= 0 && startDay > 0){
    //     if(startDay > 0){
    //         alert(startAge -1);
    //     } else {
    //         alert(startAge -1);
    //     }
    // } else {
    //     alert(startAge -1);
    // }
