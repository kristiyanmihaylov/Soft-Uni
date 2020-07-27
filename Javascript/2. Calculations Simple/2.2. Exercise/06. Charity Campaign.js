function solve(daysOfCampaign, numberCookers, numberCakes, numberGofreti, numberPancakes){
    daysOfCampaign = Number(daysOfCampaign);
    numberCookers = Number(numberCookers);
    numberCakes = Number(numberCakes);
    numberGofreti = Number(numberGofreti);
    numberPancakes = Number(numberPancakes);

    let cakes = numberCakes*45;
    let gofreti = numberGofreti*5.8;
    let pancakes = numberPancakes*3.2;
    let totalDaySum = (cakes+gofreti+pancakes)*numberCookers;
    let totalCampaingSum = totalDaySum*daysOfCampaign;
    let sumAfterBills = totalCampaingSum-(totalCampaingSum/8);

    console.log(sumAfterBills);
}