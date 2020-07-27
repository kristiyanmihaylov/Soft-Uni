function solve(arg1, arg2){
    let hours = Number(arg1);
    let minutes = Number(arg2);
    let newHour, newMinutes;

    if(hours === 23 && minutes >=45){
        newHour = 0;
        newMinutes = (minutes+15)%60;
    } else if (hours === 0 && minutes>=45){
        newHour = 1;
        newMinutes = (minutes+15)%60;
    } else {
        newHour = hours;
        if (minutes >=45){
            newHour +=1;
            newMinutes = (minutes+15)%60;
        } else {
            newMinutes = minutes+15;
        }
    }

    if (newMinutes<10){
        newMinutes = ':0' +newMinutes;
    } else {
        newMinutes = ':'+newMinutes;
    }
    console.log(newHour+newMinutes);
}