function journey(arg1, arg2){
    let budget = Number(arg1);
    let season = arg2;
    
    let destination = '';
    let restType = '';
    let price = 0;

    if(budget<=100){
        destination = 'Bulgaria'; // samo kogato proverqvame pishem ===
        if(season === 'summer'){
                restType = 'Camp'; // inache pishem '=' kogato iskame da dadem stoinost/string
                price=budget*0.3;
        }
        else if(season === 'winter'){
                restType = 'Hotel';
                price = budget*0.7;
        }
    } else if(budget>100 && budget<=1000){
        destination = 'Balkans';
        if(season === 'summer'){
            restType = 'Camp';
            price=budget*0.4;
    }
    else if(season === 'winter'){
            restType = 'Hotel';
            price = budget*0.8;
    }
    } else if(budget>1000){
        destination = 'Europe';
        if(season === 'summer' || season === 'winter'){
            restType = 'Hotel';
            price=budget*0.9;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${restType} - ${price.toFixed(2)}`);
}