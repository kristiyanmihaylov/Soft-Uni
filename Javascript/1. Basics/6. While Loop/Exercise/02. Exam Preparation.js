function examPrep(input) {
    let index = 1; // za da zapochnem ot 2riq red
    let unsatisfiedGrades = 0;
    let solvedExams = 0; //sumata
    let lastProblem = ''; //imeto
    let totalSumOfGrades = 0; //sumata ot vs ocenki
    let isTired = false; //da vidim dali sme stignali nezadovolitelnite ocenki

    let minimumUnsatisfiedGrades = Number(input[0]); //1viq red

    let exam = input[index]; //imeto na izpita na 2riq red

    while (exam !== 'Enough') {

        let grade = Number(input[index + 1]); //ocenkata ot izpita

        if (grade <= 4) {
            unsatisfiedGrades++;
        }

        if (unsatisfiedGrades === minimumUnsatisfiedGrades) {
            isTired = true;
            break;
        }

        lastProblem = exam;
        totalSumOfGrades += grade;
        solvedExams++;
        index += 2; //za da vzimame po 2 reda napred

        exam = input[index];//za da hvane promenite
        //i za da ne stane bezkrainost

    }

    if (isTired === true) { //polzvam dannite ot while cikula
        console.log(`You need a break, ${minimumUnsatisfiedGrades} poor grades.`);
    } else {
        let averageScore = totalSumOfGrades / solvedExams;

        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${solvedExams}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);