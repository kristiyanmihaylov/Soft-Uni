function converter ([arg1, arg2, arg3]){
    let amount = Number(arg1);
    let entryCurrency = arg2;
    let exitCurrency = arg3;
    let bgn = 1;
    let usd = 1.79549*bgn;
    let eur = 1.95583*bgn;
    let gbp = 2.53405*bgn;
    let total = 0;

    if(entryCurrency === 'USD' && exitCurrency === 'BGN'){
        total = amount*usd;
    } else if(entryCurrency === 'BGN' && exitCurrency === 'EUR'){
        total = amount/eur;
    } else if(entryCurrency === 'EUR' && exitCurrency === 'GBP'){
        total = amount/(gbp/eur);
    } else if(entryCurrency === 'USD' && exitCurrency === 'EUR'){
        total = amount/(eur/usd);
    }
    console.log(`${total.toFixed(2)} ${exitCurrency}`);
}