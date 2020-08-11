function tradeCom(arg1, arg2){
    let city = arg1;
    let sales = Number(arg2);
    let commision = 0;

    if(city==='Sofia'){
        if(sales>=0 &&sales<=500){
            commision = sales*0.05;
            console.log(commision.toFixed(2));
        } else if(sales>500 && sales<=1000){
            commision = sales*0.07;
            console.log(commision.toFixed(2))
        } else if(sales>1000 && sales<=10000){
            commision =sales*0.08;
            console.log(commision.toFixed(2));
        } else if(sales>10000){
            commision = sales*0.12;
            console.log(commision.toFixed(2));
        } else {
            console.log('error');
        }
    } else if (city === 'Varna'){
        if(sales>=0 &&sales<=500){
            commision = sales*0.045;
            console.log(commision.toFixed(2));
        } else if(sales>500 && sales<=1000){
            commision = sales*0.075;
            console.log(commision.toFixed(2))
        } else if(sales>1000 && sales<=10000){
            commision =sales*0.1;
            console.log(commision.toFixed(2));
        } else if(sales>10000){
            commision = sales*0.13;
            console.log(commision.toFixed(2));
        } else {
            console.log('error');
        }
    } else if (city === 'Plovdiv'){
        if(sales>=0 &&sales<=500){
            commision = sales*0.055;
            console.log(commision.toFixed(2));
        } else if(sales>500 && sales<=1000){
            commision = sales*0.08;
            console.log(commision.toFixed(2))
        } else if(sales>1000 && sales<=10000){
            commision =sales*0.12;
            console.log(commision.toFixed(2));
        } else if(sales>10000){
            commision = sales*0.145;
            console.log(commision.toFixed(2));
        } else {
            console.log('error');
        }
    } else {
        console.log('error')
    }
}