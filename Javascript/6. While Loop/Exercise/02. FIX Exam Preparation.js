function exam(inputData){
    let index = 0; //coding starts counting from 0
    let unsatisfiedGrade = 0;
    let solvedExams = 0;
    let lastProblem = '';
    let totalSumOfGrades = 0;
    let isTired = false; //boleva stoinost  

    let minimumUnsatisfiedGrade = Number(inputData[index]);
    let exam = inputData[index];

    while(exam !=='Enough'){
        let grade = Number(inputData[index+1]);
        //za da izkara 2ta reda
        
        if(grade<=4){
            unsatisfiedGrade++;
        }

        if(unsatisfiedGrade === minimumUnsatisfiedGrade){
            isTired = true;
            break; //da izleze ot cikula
        }

        lastProblem = exam;
        totalSumOfGrades+=grade;
        solvedExams++;
        index+=2;

        exam = inputData[index];
    }

    if(isTired === true){
        console.log(`You need a break, ${unsatisfiedGrade} poor grades.`);
    } else {
        let averageScore = totalSumOfGrades/solvedExams;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${solvedExams}`);
        console.log(`Last Problem: ${lastProblem}`);
    }
}
exam([
    "3",
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