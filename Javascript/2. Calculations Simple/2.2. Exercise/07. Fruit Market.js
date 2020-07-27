function solve(bgnPriceStrawberries, kgSumBananas, kgSumOranges, kgSumMalinni, kgSumStrawberries){
    bgnPriceStrawberries = Number(bgnPriceStrawberries);
    kgSumBananas = Number(kgSumBananas);
    kgSumOranges = Number(kgSumOranges);
    kgSumMalinni = Number(kgSumMalinni);
    kgSumStrawberries = Number(kgSumStrawberries);

    let bgnPriceMalini = bgnPriceStrawberries/2;
    let bgnPriceOranges = bgnPriceMalini-(0.4*bgnPriceMalini);
    let bgnPriceBananas = bgnPriceMalini-(0.8*bgnPriceMalini);

    let totalSumMalini = kgSumMalinni*bgnPriceMalini;
    let totalSumOranges = kgSumOranges*bgnPriceOranges;
    let totalSumBananas = kgSumBananas*bgnPriceBananas;
    let totalSumStrawberries = kgSumStrawberries*bgnPriceStrawberries;

    let totalSum = totalSumBananas+totalSumMalini+totalSumOranges+totalSumStrawberries;


    console.log(totalSum);
}