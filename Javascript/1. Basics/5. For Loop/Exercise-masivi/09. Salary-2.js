function salary(input){
    let salary = Number(input[1]);
    for(let i = 2;i<=input.length; i++){
        let ch = input[i];

        if(ch === 'Facebook'){
            salary-=150;
        } else if(ch === 'Instagram'){
            salary-=100;
        } else if(ch==='Reddit'){
            salary-=50;
        }
        if(salary<=0){
            break;
        }
    }
    if(salary<=0){
        console.log('You have lost your salary');
    } else {
        console.log(Math.floor(salary));
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);