function cinema(arg1, arg2, arg3){
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);
    let totalProfit = 0;
    let area =rows*columns;

    switch(type){
        case 'Premiere': totalProfit = area*12;
        console.log(`${totalProfit.toFixed(2)} leva`);
            break;
        case 'Normal': totalProfit = area*7.5;
        console.log(`${totalProfit.toFixed(2)} leva`);
            break;
        case 'Discount': totalProfit = area*5;
        console.log(`${totalProfit.toFixed(2)} leva`);
            break;
    }
}