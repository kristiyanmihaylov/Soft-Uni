function trip(arg1, arg2, arg3){
    let days = Number(arg1);
    let type = arg2;
    let grade= arg3;
    let nights = days-1;
    let finalCost = 0;

    switch(type){
        case 'room for one person':
            finalCost = nights*18;
        break;
        case 'apartment':
            finalCost = nights*25;
            if(days<10){
                finalCost*=0.7;
            } else if(days>=10 && days<=15){
                finalCost*=0.65;
            } else if(days>15){
                finalCost*=0.5;
            }
        break;
        case 'president apartment':
            finalCost = nights*35;
            if(days<10){
                finalCost*=0.9;
            } else if(days>=10 && days<=15){
                finalCost*=0.85;
            } else if(days>15){
                finalCost*=0.8;
            }
        break;
    }
    if (grade === 'positive'){
        finalCost*=1.25;
    } else if(grade === 'negative'){
        finalCost*=0.9;
    }
    console.log(finalCost.toFixed(2));
}