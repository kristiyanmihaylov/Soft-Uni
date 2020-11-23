function aquapark(arg1, arg2, arg3, arg4) {
    // Март до Май	    Юни до Август
    // Ден	10.50/ч	    12.60/ч
    // Нощ	8.4/ч	    10.20/ч 

    let month = arg1;
    let numHours = Number(arg2);
    let numPeople = Number(arg3);
    let timeDay = arg4;
    let price = 0;
    let sum = 0;

    if (month === 'march' || month === 'april' || month === 'may') {
        if (timeDay === 'day') {
            price = 10.5;
            if (numPeople >= 4) {
                price *= 0.9; //proveri dali e ok
            }
            if (numHours >= 5) {
                price *= 0.5;
            }
            sum = Number(numHours * price) * numPeople;
        } else if (timeDay === 'night') {
            price = 8.4;
            if (numPeople >= 4) {
                price *= 0.9; //proveri dali e ok
            }
            if (numHours >= 5) {
                price *= 0.5;
            }
            sum = Number(numHours * price) * numPeople;
        }
    } else if (month === 'june' || month === 'july' || month === 'august') {
        if (timeDay === 'day') {
            price = 12.6;
            if (numPeople >= 4) {
                price *= 0.9; //proveri dali e ok
            }
            if (numHours >= 5) {
                price *= 0.5;
            }
            sum = Number(numHours * price) * numPeople;

        } else if (timeDay === 'night') {
            price = 10.2;
            if (numPeople >= 4) {
                price *= 0.9; //proveri dali e ok
            }
            if (numHours >= 5) {
                price *= 0.5;
            }
            sum = Number(numHours * price) * numPeople;
        }
    }
    let pricePerPerson = Number(sum / numPeople / numHours);
    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${sum.toFixed(2)}`);
}
aquapark(
    "july",
    "5",
    "5",
    "night");