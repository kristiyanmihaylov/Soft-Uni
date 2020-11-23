function sumOutfit(arg1, arg2){
    let deg = Number(arg1);
    let timeOfDay = arg2;
    outfit = '';
    shoes = '';

    switch(timeOfDay){
        case 'Morning':
            if(deg>=10 && deg<=18){
                outfit ='Sweatshirt';
                shoes ='Sneakers';
            } else if(deg>18 && deg<=24){
                outfit = 'Shirt';
                shoes ='Moccasins';
            } else{
                outfit = 'T-Shirt';
                shoes ='Sandals';
            }
        break;
        case 'Afternoon':
            if(deg>=10 && deg<=18){
                outfit ='Shirt';
                shoes ='Moccasins';
            } else if(deg>18 && deg<=24){
                outfit = 'T-Shirt';
                shoes ='Sandals';
            } else{
                outfit = 'Swim Suit';
                shoes ='Barefoot';
            }
        break;
        case 'Evening':
            if(deg>=10 && deg<=18){
                outfit ='Shirt';
                shoes ='Moccasins';
            } else if(deg>18 && deg<=24){
                outfit = 'Shirt';
                shoes ='Moccasins';
            } else{
                outfit = 'Shirt';
                shoes ='Moccasins';
            }
        break;
    }
    console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`)
}