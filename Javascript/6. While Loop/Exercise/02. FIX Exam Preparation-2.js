function examPrep(input){
    let unsatisfiedGrades = input[0];
    let index = 0;
    let nameTask = input[index+1];
    index+=1;
    let grade = input[index+2];
    index+=2;
    let totalSumGoodGrades = 0;
    let totalSumBadGrades = 0;
    let totalSumGrades = 0;
    let lastTask = '';

    while(totalSumBadGrades<unsatisfiedGrades){
        nameTask=input[index];
        index++;
        grade = input[index];
        index++;
        if(nameTask==='Enough'){
            console.log(`Average score: ${totalSumGrades/12}`);
        o	console.log(`Number of problems: ${}`);
        o	"Last problem: {името на последната задача}"

        }

        totalSumGrades+=grade;
        grade++;

    }
    

}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);