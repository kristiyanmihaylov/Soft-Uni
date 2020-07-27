function house(arg1, arg2, arg3){
    let typeFlower = arg1;
    let amountFlowers = Number(arg2);
    let budget = Number(arg3);
    let totalCost = 0;

    switch(typeFlower){
        case 'Roses':
            totalCost = amountFlowers*5;
            if(amountFlowers>80){
                totalCost*=0.9;
            }
        break;
        case 'Dahlias':
            totalCost = amountFlowers*3.8;
            if(amountFlowers>90){
                totalCost*=0.85;
            }
        break;
        case 'Tulips':
            totalCost = amountFlowers*2.8;
            if(amountFlowers>80){
                totalCost*=0.85;
            }
        break;
        case 'Narcissus':
            totalCost = amountFlowers*3;
            if(amountFlowers<120){
                totalCost*=1.15;
            }
        break;
        case 'Gladiolus':
            totalCost = amountFlowers*2.5;
            if(amountFlowers<80){
                totalCost*=1.2;
            }
        break;
    }
    let result = Math.abs(budget-totalCost);

    if(budget>=totalCost){
        console.log(`Hey, you have a great garden with ${amountFlowers} ${typeFlower} and ${result.toFixed(2)} leva left.`);
    } else if (budget<totalCost){
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`);
    }
}