function train(input) {
    let totalJuryCount = Number(input[0]);
    let totalAverageResults = 0;
    let totalPresentations = 0;

    let index = 1; //ot tam otkudeto trqbva da durpam vhodni danni
    let presentation = input[index];

    while (presentation !== 'Finish') {

        let totalJuryResult = 0;

        for (let jury = 1; jury <= totalJuryCount; jury++) {
            index++;
            totalJuryResult += Number(input[index]);
            //uvelichavam za da mine napred predi da go vzema
            //inache shte padne na imeto na prezentaciqta

        }
        let average = totalJuryResult / totalJuryCount;
        console.log(`${presentation} - ${average.toFixed(2)}.`);

        totalAverageResults += average;
        totalPresentations++;

        index++; // za da vlqza na imeto na prezentaciqta
        presentation = input[index];
    }
    let totalAverage = totalAverageResults/totalPresentations;
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);

}
train([
    '2', //0
    'While-Loop', //1
    '6.00', '5.50',
    'For-Loop', '5.84',
    '5.66', 'Finish'
]);