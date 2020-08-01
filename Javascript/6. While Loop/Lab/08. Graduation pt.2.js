function graduate(input){
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;

    let counter =1;
    let counterFailed = 0;
    let averageGrade =0;

    while(counter<=12){
        grade = Number(input[index]);
        index++;
        if(grade<4.00){
            counterFailed++;
            if(counterFailed===2){
                console.log(`${name} has been excluded at ${counter} grade`);
                break;
            }
            continue; //pravi loop za izkluchvane dokato nqma po hubava ocenka
        }
        averageGrade+=grade;
        counter++;
    }
    console.log(`${name} graduated. Average grade: ${((averageGrade/12).toFixed(2))}`);
}
graduate(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);