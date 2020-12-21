function fuelMoney(distance, passengers, priceLiterDiesel) {
    let passengersConsumption = (100 / 1000) * passengers;
    let fuelNeeded = (distance / 100) * 7;
    fuelNeeded += passengersConsumption; //bc of people
    let moneyFuel = fuelNeeded * priceLiterDiesel;
    console.log(`Needed money for that trip is ${moneyFuel}lv.`);
}
fuelMoney(260, 9, 2.49);