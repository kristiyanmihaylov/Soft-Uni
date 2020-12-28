function gladiator(lostFights, helmetPr, swordPr, shieldPr, armorPr) {
    let expenses = 0;
    let count = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            expenses += helmetPr;
        } // bez else za da ne go podmine
        if (i % 3 == 0) {
            expenses += swordPr;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shieldPr;
            count++;
            if (count == 2) {
                expenses += armorPr;
                count = 0; //za da zanuli
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(
    7,
    2,
    3,
    4,
    5
);

// "Gladiator expenses: {expenses} aureus"