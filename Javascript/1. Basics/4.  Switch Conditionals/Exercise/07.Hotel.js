function hotel(arg1, arg2){
    let month = arg1;
    let nights = Number(arg2);

    let studio = 0;
    let apartment = 0;
    let totalStudio = 0;
    let totalApartment = 0;

    if(month === 'May' || month === 'October'){
        studio = 50;
        apartment = 65;
        if(nights<=7){
            totalStudio=nights*studio;
            totalApartment=nights*apartment;
        }
        else if(nights>7 && nights<=14){
            studio*=0.95;
            totalStudio=nights*studio;
            totalApartment=nights*apartment;
        } else if(nights>14){
            studio*=0.7;
            apartment*=0.9;
            totalStudio =nights*studio;
            totalApartment =nights*apartment;
        }

    } else if(month === 'June' || month === 'September'){
        studio = 75.2;
        apartment = 68.7;
        totalApartment=nights*apartment;
        totalStudio=nights*studio;

        if(nights>14){
            studio*=0.8;
            apartment*=0.9;
            totalStudio=nights*studio;
            totalApartment=nights*apartment;
        }
    } else if(month === 'July' || month ==='August'){
        studio = 76;
        apartment = 77;
        totalStudio = nights*studio;
        totalApartment = nights*apartment;
        if(nights>14){
            apartment*=0.9;
            totalApartment=nights*apartment;
        }
    }
    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}