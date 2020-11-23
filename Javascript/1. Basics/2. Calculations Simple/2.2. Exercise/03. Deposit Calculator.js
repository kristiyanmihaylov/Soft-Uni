function solve(depositSum, depositMonths, yearInterestRate){
    depositSum = Number(depositSum);
    depositMonths = Number(depositMonths);
    yearInterestRate = Number(yearInterestRate);

    let interest = depositSum*(yearInterestRate/100);
    let monthlyInterest = interest/12;
    let totalSum = depositSum+(depositMonths*monthlyInterest)

    console.log(totalSum);
}