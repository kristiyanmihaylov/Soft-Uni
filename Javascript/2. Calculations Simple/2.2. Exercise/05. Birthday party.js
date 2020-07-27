function party(rent){

    rent = Number(rent);

    let cake = rent*0.20;
    let drinks = cake*0.55;
    let animator = rent/3;

    let minBudget = rent+cake+drinks+animator;

    console.log(minBudget);
}