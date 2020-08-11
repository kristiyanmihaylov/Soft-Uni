function boat(arg1, arg2, arg3){
    let budget = Number(arg1);
    let season = arg2;
    let fishers = Number(arg3);
    let totalExpense = 0;

    if(season === 'Spring'){
        totalExpense +=3000;
    } else if(season === 'Summer' || season === 'Autumn'){
        totalExpense +=4200;
    } else if(season === 'Winter'){
        totalExpense +=2600;
    }

    if(fishers<=6){
        totalExpense*=0.9;
    } else if(fishers>6 && fishers<=11){
        totalExpense*=0.85;
    } else if(fishers>11){
        totalExpense*=0.75;
    }

    if((fishers%2===0) && season !== 'Autumn'){
        totalExpense*=0.95;
    }

    let result = Math.abs(budget-totalExpense);

    if(budget>=totalExpense){
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);
    }
}