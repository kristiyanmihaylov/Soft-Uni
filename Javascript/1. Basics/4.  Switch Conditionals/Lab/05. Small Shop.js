function shops(arg1, arg2, arg3){
    let product = arg1;
    let city = arg2;
    let amount = Number(arg3);
    let totalCost = 0;

    if(city === 'Sofia'){
        switch(product){
            case 'coffee': totalCost = amount*0.5;
            break;
            case 'water': totalCost = amount*0.8;
            break;
            case 'beer': totalCost = amount*1.2;
            break;
            case 'sweets': totalCost = amount*1.45;
            break;
            case 'peanuts': totalCost = amount*1.6;
            break
        }
    } else if (city === 'Plovdiv'){
        switch(product){
            case 'coffee': totalCost = amount*0.4;
            break;
            case 'water': totalCost = amount*0.7;
            break;
            case 'beer': totalCost = amount*1.15;
            break;
            case 'sweets': totalCost = amount*1.3;
            break;
            case 'peanuts': totalCost = amount*1.5;
            break
        }
    } else if (city === 'Varna'){
        switch(product){
            case 'coffee': totalCost = amount*0.45;
            break;
            case 'water': totalCost = amount*0.7;
            break;
            case 'beer': totalCost = amount*1.1;
            break;
            case 'sweets': totalCost = amount*1.35;
            break;
            case 'peanuts': totalCost = amount*1.55;
            break
        }
    }
    console.log(totalCost);
}