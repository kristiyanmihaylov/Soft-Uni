function solve(arg1, arg2, arg3){
    let budget = Number(arg1);
    let people = Number(arg2);
    let clothing = Number(arg3);
    let decor = budget*0.10;
    let expenses = people*clothing;

    if(people > 150){
        expenses = expenses*0.9; //premahvam 10%
    }
    let totalExpenses = decor+expenses;

    if (budget >= totalExpenses){
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget-totalExpenses).toFixed(2)} leva left.`)
    } else{
        console.log('Not enough money!')
        console.log(`Wingard needs ${(totalExpenses-budget).toFixed(2)} leva more.`)
    }
}