function shop(arg1, arg2, arg3){
    let fruit = arg1;
    let day = arg2;
    let amount = Number(arg3);
    let price = 0;

    if(day === 'Monday'|| day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday'){
        switch(fruit){
            case 'banana': price = amount*2.5;
            console.log(result=price.toFixed(2));
            break;
            case 'apple': price = amount*1.2;
            console.log(result=price.toFixed(2));
            break;
            case 'orange': price = amount*0.85;
            console.log(result=price.toFixed(2));
            break;
            case 'grapefruit': price = amount*1.45;
            console.log(result=price.toFixed(2));
            break;
            case 'kiwi': price = amount*2.7;
            console.log(result=price.toFixed(2));
            break;
            case 'pineapple': price = amount*5.5;
            console.log(result=price.toFixed(2));
            break;
            case 'grapes': price = amount*3.85;
            console.log(result=price.toFixed(2));
            break;
            default: console.log('error');
            break;
        }
    } else if(day === 'Saturday' || day==='Sunday'){
        switch(fruit){
            case 'banana': price = amount*2.7;
            console.log(result=price.toFixed(2));
            break;
            case 'apple': price = amount*1.25;
            console.log(result=price.toFixed(2));
            break;
            case 'orange': price = amount*0.9;
            console.log(result=price.toFixed(2));
            break;
            case 'grapefruit': price = amount*1.6;
            console.log(result=price.toFixed(2));
            break;
            case 'kiwi': price = amount*3;
            console.log(result=price.toFixed(2));
            break;
            case 'pineapple': price = amount*5.6;
            console.log(result=price.toFixed(2));
            break;
            case 'grapes': price = amount*4.2;
            console.log(result=price.toFixed(2));
            break;
            default: console.log('error');
            break;
        }
    } else {
        console.log('error');
    }
}