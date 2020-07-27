function solve (arg1){
    let initialNumber = Number(arg1);
    let bonusPoints = 0;

    if (initialNumber <= 100){
        bonusPoints =bonusPoints +5;
    } else if (initialNumber > 1000){
        bonusPoints = bonusPoints + (initialNumber*0.10);
    } else if (initialNumber > 100){
        bonusPoints = bonusPoints + (initialNumber*0.20);
    }
    if ((initialNumber % 2) === 0){
        bonusPoints = bonusPoints+=1;
    } else if((initialNumber % 10) === 5){
        bonusPoints = bonusPoints+2;
    }
    console.log(bonusPoints);
    console.log(bonusPoints+initialNumber);
}