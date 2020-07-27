function scholarship(arg1, arg2, arg3){
    let income = Number(arg1);
    let aveSuccess = Number(arg2);
    let minSalary = Number(arg3);
    let socialScholarship = 0;
    let excellentScholarship = 0;

    if(income<minSalary && aveSuccess>4.5){
        socialScholarship = minSalary*0.35;
    } else if(aveSuccess>=5.5){
        excellentScholarship =aveSuccess*25;
    } else {
        console.log('You cannot get a scholarship!');
    }

    if(income<minSalary && socialScholarship>excellentScholarship){
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if(aveSuccess>=5.5 && excellentScholarship>=socialScholarship){
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    }
}