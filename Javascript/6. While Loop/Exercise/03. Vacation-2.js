function vacation(input) {
    let vacationMoney = Number(input[0]); //kogato sa chisla
    let availableMoney = Number(input[1]);
    let days = 0; //vs dni
    let spendDays = 0; //posledovatelni dni na harchene

    let index = 2;
    let decision = input[index]; //save or spend

    while (spendDays < 5 && availableMoney < vacationMoney) {

        let decisionMoney = Number(input[index + 1])

        if (decision === 'spend') {
            spendDays++;
            let resultAfterSpend = availableMoney - decisionMoney;

            if (resultAfterSpend > 0) {
                availableMoney = resultAfterSpend;
            } else {
                availableMoney = 0;
            }
        } else if (decision === 'save') {
            availableMoney += decisionMoney;
            spendDays = 0; //taka prekratqvam seriqta ot dni na harchene zashtoto spestqva
        }
        days++;
        index += 2;
        decision = input[index];
        
    }
    // sled kato promenq indexa
    //shte vzema danni ot masiva
    //kato purvonachalno e 2 to shte stane 4 i taka
    //shte razglejdam 4 i 5 shtom 2 i 3 sym proveril
    if (availableMoney >= vacationMoney) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(days);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
]);